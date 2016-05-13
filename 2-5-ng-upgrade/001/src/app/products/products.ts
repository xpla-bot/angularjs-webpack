import IModule = angular.IModule
import { ProductsComponent } from './products.component'
import { ProductsService } from './products.service'
import { ProductsAddComponent } from './add/products-add.component'
import { ProductsMainComponent } from './main/products-main.component'

export const ProductsModule: IModule = angular
  .module('app.components.products', [])
  .component('products', ProductsComponent)
  .component('productsAdd', ProductsAddComponent)
  .component('productsMain', ProductsMainComponent)
  .service('Products', ProductsService)
