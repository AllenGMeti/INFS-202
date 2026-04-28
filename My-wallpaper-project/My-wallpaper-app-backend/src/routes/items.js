import express from 'express';
import mongoose from 'mongoose';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Inline schema for demo items (Week 9 CRUD)
const itemSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'Title is required'], trim: true },
    description: { type: String, trim: true },
    completed: { type: Boolean, default: false },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

const Item = mongoose.model('Item', itemSchema);

// @route   GET /api/items
// @desc    Get all items
// @access  Public
router.get('/', async (req, res) => {
  try {
    const items = await Item.find({}).populate('owner', 'name email');
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   GET /api/items/:id
// @desc    Get single item
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate('owner', 'name email');
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/items
// @desc    Create new item
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const { title, description } = req.body;
    const item = await Item.create({
      title,
      description,
      owner: req.user._id,
    });
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @route   PUT /api/items/:id
// @desc    Update an item
// @access  Private
router.put('/:id', protect, async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @route   DELETE /api/items/:id
// @desc    Delete an item
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
