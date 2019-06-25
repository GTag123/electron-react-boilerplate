const path = require("path");

module.exports = {
    entry: './src/renderer.js',
    output: {
        path: path.join(__dirname, 'src', 'dist'),
        filename: 'renderer-bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}
