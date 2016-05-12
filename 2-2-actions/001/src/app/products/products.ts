import IModule = angular.IModule
import { ProductsComponent } from './products.component'
import { ProductsService } from './products.service'
/// Importujemy nowy komponent
import { ProductsAddComponent } from './add/products-add.component'

export const ProductsModule: IModule = angular
  .module('app.components.products', [])
  .component('products', ProductsComponent)
  /// Dodajemy go do modułu
  .component('productsAdd', ProductsAddComponent)
  .service('Products', ProductsService)
