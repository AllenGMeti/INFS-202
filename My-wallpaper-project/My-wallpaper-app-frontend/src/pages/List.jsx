import ItemCard from "../components/ItemCard";
import { useWallpaper } from "../context/WallpaperContext";

export default function List() {
  const { category, setCategory } = useWallpaper();

  return (
    <main>
      <div className="box-model">

        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("light")}>Light</button>
        <button onClick={() => setCategory("dark")}>Dark</button>

        {(category === "all" || category === "light") && (
          <>
            <h3>Light wallpapers</h3>
            <p>The wallpapers below are best used for a laptop on light mode.</p>
            <div className="cards">
              <ItemCard
                label="FIRST WALLPAPER"
                src="download.jpg"
                alt="See no evil, hear no evil, speak no evil"
                width={300}
                height={300}
              />
            </div>
          </>
        )}

        {(category === "all" || category === "dark") && (
          <>
            <h3>Dark wallpapers</h3>
            <p>The wallpapers below are best used for a laptop on dark mode.</p>
            <div className="cards">
              <ItemCard
                label="FIRST WALLPAPER"
                src="thumb-1920-1401469.png"
                alt="Silver surfer"
                width={500}
                height={300}
              />
              <ItemCard
                label="SECOND WALLPAPER"
                src="wp15370739.png"
                alt="Silver surfer"
                width={500}
                height={300}
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
