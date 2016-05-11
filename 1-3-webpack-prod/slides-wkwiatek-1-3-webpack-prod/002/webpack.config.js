const config = {
	entry: './src/index',
	output: {
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{ test: /\.styl$/, loaders: ['style', 'css', 'stylus'] },
		],
	},
}

module.exports = config
