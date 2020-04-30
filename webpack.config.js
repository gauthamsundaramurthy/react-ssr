const path = require("path")

module.exports = {
    mode: "development",
    entry : {
        client: path.resolve(__dirname, './src/components/client.js')
    },
    output : {
        path: path.resolve(__dirname, 'assets'),
        filename: "[name].js"
    },
    module: {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}