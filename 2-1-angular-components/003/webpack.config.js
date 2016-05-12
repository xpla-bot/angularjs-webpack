const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isProdEnv = process.env.WEBPACK_ENV === 'production'

const config = {
	devtool: 'source-map',
	entry: './src/index',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['', '.js', '.ts', '.json']
	},
	module: {
		preLoaders: [
			{ test: /\.ts$/, loaders: ['tslint'], exclude: /node_modules/ },
		],
		loaders: [
			{ test: /\.ts$/, loaders: ['ng-annotate', 'ts'], exclude: /node_modules/ },
      /// Potrzebne jest dodatkowe query do loadera css
			{ test: /\.styl$/, loaders: ['style', 'css?modules', 'stylus'] },
		],
	},
	plugins: isProdEnv ? [
		new webpack.optimize.UglifyJsPlugin(),
		new CopyWebpackPlugin([{ from: './src/index.html', to: 'index.html' }])
	] : [],
}

module.exports = config
