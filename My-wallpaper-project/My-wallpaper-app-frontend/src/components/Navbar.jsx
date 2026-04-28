import { Link } from "react-router-dom";

// Week 7 Step 2: Header component
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/wallpapers">Phone wallpapers</Link></li>
        <li><Link to="/wallpapers">Laptop wallpapers</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
