import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import List from "./pages/List";
import Details from "./pages/Details";
import AddItem from "./pages/AddItem";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallpapers" element={<List />} />
        <Route path="/wallpapers/:id" element={<Details />} />
        <Route path="/contact" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
}
