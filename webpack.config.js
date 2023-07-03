const path = require("path");

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browsersList';
const devTool = devMode ? 'source-map' : undefined;

module.exports = {
    mode: mode,
    target: target,
    devtool: devTool,
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: "index.[contenthash].js"
    }
};