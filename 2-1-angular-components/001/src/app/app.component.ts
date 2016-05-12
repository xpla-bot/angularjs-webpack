import { IProduct } from './product.interface'
/// Dostajemy interfejsy do Angulara 1.5 dzięki typings
import IComponentOptions = angular.IComponentOptions;

/// Ustalenie typu pozwoli nam uniknąć błedów w strukturze obiektu
export const AppComponent: IComponentOptions = {
  //10/ Contoller i widok są teraz obok siebie
  controller: class {
    public products: IProduct[]

    constructor(AppService: any) {
      'ngInject';

      this.products = AppService.products
    }
  },
  template: `
    <div>
      <h1>Shopping list</h1>
      <ul>
        <!-- Używamy teraz $ctrl zamiast vm -->
        <li ng-repeat="product in $ctrl.products">
          {{ product.name }} - {{ product.price | currency }}
        </li>
      </ul>
    </div>
  `,
}
