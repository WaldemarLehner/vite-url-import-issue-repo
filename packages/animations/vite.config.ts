import { defineConfig } from "vite";
import motionCanvas from "@motion-canvas/vite-plugin";
import ffmpeg from "@motion-canvas/ffmpeg";
import { globSync } from "glob";

export default defineConfig({
  plugins: [
    motionCanvas({
      project: globSync("./src/*/*.ts").map((e) => "./" + e),
    }),
    ffmpeg(),
  ],
});
