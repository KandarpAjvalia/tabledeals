const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	resolve: {
		extensions: ['.mjs', '.js']
	},
	output: {
		path: path.join(path.resolve(), '../server/dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			options: {
				presets: [
					[
						'@babel/preset-env',
						{
							targets: {
								esmodules: true
							}
						}
					],
					'@babel/preset-react'
				]
			}
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.(png|jpg|gif)$/,
			use: [{
				loader: 'file-loader',
				options: {}
			}]
		}]
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new Dotenv()
	]
}
