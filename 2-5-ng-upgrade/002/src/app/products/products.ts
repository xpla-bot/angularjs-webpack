import IModule = angular.IModule
import { ProductsComponent } from './products.component'
import { ProductsService } from './products.service'
import { ProductsAddComponent } from './add/products-add.component'
import { ProductsMainComponent } from './main/products-main.component'
import { adapter } from '../../index'

/// serwis ng2 musi zostać dodany jako provider 
adapter.addProvider(ProductsService);

export const ProductsModule: IModule = angular
  .module('app.components.products', [])
  .component('products', ProductsComponent)
  .component('productsAdd', ProductsAddComponent)
  .component('productsMain', ProductsMainComponent)
  /// Downgrade serwisu to wywołanie metody
  .service('Products', adapter.downgradeNg2Provider(ProductsService))
