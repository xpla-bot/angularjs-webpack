const { listElement } = require('./products.styl') // tslint:disable-line
import { IComponentOptionsRouter } from '../shared/interfaces/component-options-router.interface'
import { IProduct } from './product.interface'

export const ProductsComponent: IComponentOptionsRouter = {
  $routeConfig: [{
    component: 'productsMain',
    name: 'ProductsMain',
    path: '/',
    useAsDefault: true,
  }, {
    component: 'productsAdd',
    name: 'ProductsAdd',
    path: '/add',
  }],
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
        <li ng-repeat="product in $ctrl.products" class="${listElement}">
          {{ product.name }} - {{ product.price | currency }}
        </li>
      </ul>
      <ng-outlet></ng-outlet>
    </div>
  `,
}
