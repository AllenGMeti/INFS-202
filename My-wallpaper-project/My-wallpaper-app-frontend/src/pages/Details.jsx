import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();

  return (
    <div className="box-model">
      <h3>Wallpaper Details</h3>
      <p>Viewing wallpaper: <strong>{id}</strong></p>
    </div>
  );
}
