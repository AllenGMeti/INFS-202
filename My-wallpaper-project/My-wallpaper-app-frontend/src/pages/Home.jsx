import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Wallpaper</h1>
      <p id="title">Ocean of wallpapers.</p><br /><br />
      <button id="myBtn" onClick={() => navigate("/wallpapers")}>Phone wallpapers</button>
      <button id="myBtna" onClick={() => navigate("/wallpapers")}>Pc wallpapers</button>
    </>
  );
}
