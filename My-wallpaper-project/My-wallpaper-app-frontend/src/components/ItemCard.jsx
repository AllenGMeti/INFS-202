export default function ItemCard({ src, alt, label, width = 300, height = 300 }) {
  return (
    <div className="card">
      <p>{label}</p>
      <img src={src} alt={alt} width={width} height={height} />
    </div>
  );
}
