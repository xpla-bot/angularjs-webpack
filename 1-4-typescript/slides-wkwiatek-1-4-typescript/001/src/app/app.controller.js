export function AppController(AppService) {
	const vm = this
	
	vm.products = AppService.products 
}