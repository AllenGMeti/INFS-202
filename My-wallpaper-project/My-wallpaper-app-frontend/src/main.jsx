import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { WallpaperProvider } from "./context/WallpaperContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WallpaperProvider>
      <App />
    </WallpaperProvider>
  </StrictMode>
);
