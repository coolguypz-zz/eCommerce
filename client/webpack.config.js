
const path = require("path");
const PORT = process.env.port || 5000;
const webpack = require("webpack")

module.exports = {
    entry: [
        "core-js/stable",
        "regenerator-runtime/runtime",
        "webpack-dev-server/client?http://localhost:" + PORT,
        "./index.js",
    ],
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.s?(c|a)ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: ["file-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devtool: "source-map",
    devServer: {
        port: PORT,
    },
}