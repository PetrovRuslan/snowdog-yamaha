const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: 
                    [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
            },
            {
                test: /\.(jpg|png|svg|)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[path][name].[ext]',
                      outputPath: './',
                      useRelativePath: true
                    }
                  },
                ]
              },
              {
                test: /\.pug$/,
                loaders: [
                  {
                    loader: "html-loader"
                  },
                  {
                    loader: "pug-html-loader",
                    options: {
                      "pretty":true
                    }
                  }
                ]
              },
            {

            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: [
                {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    outputPath: './',
                    useRelativePath: true
                    }
                },
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: './index.pug'
        }),
        new CopyWebpackPlugin([
          { from: 'src/scripts', to: 'src/scripts' },
          { from: 'src/css', to: 'src/css' },
          { from: 'src/templates', to: 'src/templates'},
          { from: 'src/images', to: 'src/images'},
        ]),
    ]
}