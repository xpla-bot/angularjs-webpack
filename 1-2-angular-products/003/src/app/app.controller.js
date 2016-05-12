export function AppController() {
	const vm = this

	//5/ Dodajmy listę produktów do kupienia
	vm.products = [
		{ name: 'Milk', price: 1.05 },
		{ name: 'Salami', price: 2.5 },
		{ name: 'Bread', price: 0.85 },
	]
}