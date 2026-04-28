import { createContext, useContext, useState } from "react";

const WallpaperContext = createContext();

export function WallpaperProvider({ children }) {
  const [category, setCategory] = useState("all");

  return (
    <WallpaperContext.Provider value={{ category, setCategory }}>
      {children}
    </WallpaperContext.Provider>
  );
}

export function useWallpaper() {
  return useContext(WallpaperContext);
}
