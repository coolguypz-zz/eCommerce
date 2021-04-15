
const path = require("path");
const PORT = process.env.port || 3000;

module.exports = {
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
        contentBase: "./src",
    },
}