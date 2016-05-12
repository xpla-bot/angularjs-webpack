const { listElement } = require('./products.styl') // tslint:disable-line
import IComponentOptions = angular.IComponentOptions;
import { IProduct } from './product.interface'

export const ProductsComponent: IComponentOptions = {
  controller: class {
    public products: IProduct[]

    constructor(Products: any) {
      'ngInject';

      this.products = Products.products
    }

    //3/ Metoda obsługująca dodanie produktu
    public addProduct(newProduct: IProduct): void {
      this.products.push(newProduct)
    }
  },
  template: `
    <div>
      <h1>Shopping list</h1>
      <ul>
        <li ng-repeat="product in $ctrl.products" class="${listElement}">
          {{ product.name }} - {{ product.price | currency }}
        </li>
      </ul>
      <!-- Wykorzystujemy komponent -->
      <products-add
        on-product-added="$ctrl.addProduct(newProduct)"
      ></products-add>
    </div>
  `,
}
