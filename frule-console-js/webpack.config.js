/**
 * @author Jacky.Gao
 * @author fred
 * 2018-04-23
 * Base on Webpack4
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: {
        frame: './src/frame/index.jsx',
        // variableEditor: './src/variable/index.jsx',
        // constantEditor: './src/constant/index.jsx',
        // parameterEditor: './src/parameter/index.jsx',
        // actionEditor: './src/action/index.jsx',
        // packageEditor: './src/package/index.jsx',
        // flowDesigner: './src/flow/index.jsx',
        // ruleSetEditor: './src/editor/urule/index.jsx',
        // decisionTableEditor: './src/editor/decisiontable/index.jsx',
        // scriptDecisionTableEditor: './src/editor/scriptdecisiontable/index.jsx',
        // decisionTreeEditor: './src/editor/decisiontree/index.jsx',
        // clientConfigEditor: './src/client/index.jsx',
        // ulEditor: './src/editor/ul/index.jsx',
        // scoreCardTable: './src/scorecard/index.jsx',
        // permissionConfigEditor: './src/permission/index.jsx'
    },

    output: {
        path: path.resolve('dist'),
        filename: '[name].bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/frame.html'
        }),
        // 复制文件
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'lib'),
                to: 'lib'
                // ignore: ['.*']
            },
            {
                from: path.resolve(__dirname, 'html'),
                to: 'html'
            }
        ])
    ],

    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    "presets": [
                        "react", "env"
                    ]
                }
            }, {
                test: /\.css$/,
                use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
            }, {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000000
                        }
                    }
                ]
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        proxy: {
            '/frule/api': {
                target: 'http://127.0.0.1:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^': ''
                }
            }
        }
    }
};