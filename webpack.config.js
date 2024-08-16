const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin  = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { type } = require("os");
const { assert } = require("console");


const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd

const filename = ext => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`;

module.exports = {
	context:path.resolve(__dirname,"src"),
	mode: 'development',
	entry: "./index.js",
	output: {
		filename: filename("js"),
		path: path.resolve(__dirname,"dist"),
	},
	resolve: {
		extensions: [".js"],
		alias:{	
			"@": path.resolve(__dirname,"src"),
			"@core":  path.resolve(__dirname,"src/core")
		}
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 9000,
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HTMLWebpackPlugin({
			template: "index.html",
			minify: {
				collapseWhitespace: isProd,
				removeComments: isProd,
			}
		}),
		new CopyPlugin({
			patterns: [
				{ from: path.resolve(__dirname,"src/favicon.ico"), to: path.resolve(__dirname,"dist")}
			]
		}),
		new MiniCssExtractPlugin({
			filename: filename("css")
		})
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					MiniCssExtractPlugin.loader,
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader"
				],
			},
			{
				test: /\.woff2?$/i,
				type:  "asset/resource",
				generator:  {
					filename: "fonts/[name][ext]"
				}
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator:  {
					filename: "images/[name][ext]"
				}
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
};
