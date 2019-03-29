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

    resolve: {
        extensions: ['*', '.js', '.json']
    },

    entry: {
        frame: './src/frame/index.jsx',
        variableEditor: './src/variable/index.jsx',
        constantEditor: './src/constant/index.jsx',
        parameterEditor: './src/parameter/index.jsx',
        actionEditor: './src/action/index.jsx',
        packageEditor: './src/package/index.jsx',
        flowDesigner: './src/flow/index.jsx',
        ruleSetEditor: './src/editor/urule/index.jsx',
        decisionTableEditor: './src/editor/decisiontable/index.jsx',
        scriptDecisionTableEditor: './src/editor/scriptdecisiontable/index.jsx',
        decisionTreeEditor: './src/editor/decisiontree/index.jsx',
        // clientConfigEditor: './src/client/index.jsx',
        ulEditor: './src/editor/ul/index.jsx',
        scoreCardTable: './src/scorecard/index.jsx',
        complexScoreCardTable: './src/complexscorecard/index.jsx',
        // permissionConfigEditor: './src/permission/index.jsx'
    },

    output: {
        path: path.resolve('dist'),
        filename: '[name].bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'html/frame.html',
            chunks: ["frame"]
        }),
        new HtmlWebpackPlugin({
            filename: 'variable-editor.html',
            template: 'html/variable-editor.html',
            chunks: ["variableEditor"]
        }),
        new HtmlWebpackPlugin({
            filename: 'ruleset-editor.html',
            template: 'html/ruleset-editor.html',
            chunks: ["ruleSetEditor"]
        }),
        new HtmlWebpackPlugin({
            filename: 'decision-table-editor.html',
            template: 'html/decision-table-editor.html',
            chunks: ["decisionTableEditor"]
        }),
        new HtmlWebpackPlugin({
            filename: 'decision-tree-editor.html',
            template: 'html/decision-tree-editor.html',
            chunks: ["decisionTreeEditor"]
        }),
        new HtmlWebpackPlugin({
            filename: 'score-card-editor.html',
            template: 'html/score-card-editor.html',
            chunks: ["scoreCardTable"]
        }),
        new HtmlWebpackPlugin({
            filename: 'complexscorecard-editor.html',
            template: 'html/complexscorecard-editor.html',
            chunks: ["complexScoreCardTable"]
        }),
        new HtmlWebpackPlugin({
            filename: 'rule-flow-designer.html',
            template: 'html/rule-flow-designer.html',
            chunks: ["flowDesigner"]
        }),
        new HtmlWebpackPlugin({
            filename: 'package-editor.html',
            template: 'html/package-editor.html',
            chunks: ["packageEditor"]
        }),
        new HtmlWebpackPlugin({
            filename: 'constant-editor.html',
            template: 'html/constant-editor.html',
            chunks: ["constantEditor"]
        }),
        new HtmlWebpackPlugin({
            filename: 'action-editor.html',
            template: 'html/action-editor.html',
            chunks: ["actionEditor"]
        }),
        new HtmlWebpackPlugin({
            filename: 'parameter-editor.html',
            template: 'html/parameter-editor.html',
            chunks: ["parameterEditor"]
        }),
        new HtmlWebpackPlugin({
            filename: 'script-decision-table-editor.html',
            template: 'html/script-decision-table-editor.html',
            chunks: ["scriptDecisionTableEditor"]
        }),
        new HtmlWebpackPlugin({
            filename: 'ul-editor.html',
            template: 'html/ul-editor.html',
            chunks: ["ulEditor"]
        }),
        // 复制文件
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'lib'),
                to: 'lib'
                // ignore: ['.*']
            },
            {
                from: path.resolve(__dirname, 'fonts'),
                to: 'fonts'
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