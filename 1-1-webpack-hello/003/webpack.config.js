/// Używamy node'a w wersji 6, więc możemy korzystać z dobrodziejstw ES2015
const config = {
	/// Na początek potrzebujemy plik wejściowy
	entry: './src/index',
	//3/ Oraz wynikowy
	output: {
		filename: 'bundle.js',
	},
}

module.exports = config
