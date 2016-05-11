const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');

/// Dodajmy flagę do rozróżnienia czy to build prod czy dev
const isProdEnv = process.env.WEBPACK_ENV === 'production';

const config = {
	entry: './src/index',
	output: {
		/// ścieżka do eksportu
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{ test: /\.styl$/, loaders: ['style', 'css', 'stylus'] },
		],
	},
	//4/ Użyjemy UglifyJS do wypuszczenia produkcyjnego kodu
	plugins: isProdEnv ? [
		new webpack.optimize.UglifyJsPlugin(),
		new CopyWebpackPlugin([{ from: './src/index.html', to: 'index.html' }])
	] : [],
}

module.exports = config
