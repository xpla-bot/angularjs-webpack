import { IProduct } from './product.interface'
import IComponentOptions = angular.IComponentOptions;

//21/ Cała logika i widok jest teraz w ProductsComponent
export const ProductsComponent: IComponentOptions = {
  controller: class {
    public products: IProduct[]

    constructor(Products: any) {
      'ngInject';

      this.products = Products.products
    }
  },
  template: `
    <div>
      <h1>Shopping list</h1>
      <ul>
        <li ng-repeat="product in $ctrl.products">
          {{ product.name }} - {{ product.price | currency }}
        </li>
      </ul>
    </div>
  `,
}
