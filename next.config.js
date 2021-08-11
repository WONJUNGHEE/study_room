const widthBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");
const webpack = require("webpack");

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = {
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://WONJUNGHEE.github.io/study_room/"
      : "",

  webpack(config, { isServer, buildId }) {
    config.resolve.modules.push(__dirname);

    return config;
  },
};
