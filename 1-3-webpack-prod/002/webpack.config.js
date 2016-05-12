const config = {
	entry: './src/index',
	output: {
		filename: 'bundle.js',
	},
	//5/ Dodawanie loaderów w webpacku
	module: {
		loaders: [
			{ test: /\.styl$/, loaders: ['style', 'css', 'stylus'] },
		],
	},
}

module.exports = config
