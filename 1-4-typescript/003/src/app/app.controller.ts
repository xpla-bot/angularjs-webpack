export function AppController(AppService: any) {
	const vm = this
	
	vm.products = AppService.products 
}
