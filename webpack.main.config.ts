import type { Configuration } from "webpack";
import path from "path";

import { rules } from "./webpack.rules";

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: "./src/index.ts",
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
    alias: {
      $templates: path.resolve(__dirname, "./src/components/templates"),
      $screens: path.resolve(__dirname, "./src/screens"),
      $assets: path.resolve(__dirname, "./src/static"),
      $organisms: path.resolve(__dirname, "./src/components/organisms"),
    },
  },
};
