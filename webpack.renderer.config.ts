import type { Configuration } from "webpack";
import path from "path";

import { rules } from "./webpack.rules";
import { plugins } from "./webpack.plugins";

rules.push({
  test: /\.css$/,
  use: [
    { loader: "style-loader" },
    { loader: "css-loader" },
    { loader: "postcss-loader" },
  ],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
    alias: {
      $templates: path.resolve(__dirname, "./src/components/templates"),
      $screens: path.resolve(__dirname, "./src/screens"),
      $assets: path.resolve(__dirname, "./src/static"),
      $atoms: path.resolve(__dirname, "./src/components/atoms"),
      $organisms: path.resolve(__dirname, "./src/components/organisms"),
      $stores: path.resolve(__dirname, "./src/stores"),
    },
  },
};
