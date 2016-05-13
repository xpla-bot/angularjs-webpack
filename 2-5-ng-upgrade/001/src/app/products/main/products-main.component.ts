import IComponentOptions = angular.IComponentOptions

export const ProductsMainComponent: IComponentOptions = {
  controller: class {},
  template: `
    <a ng-link="['ProductsAdd']" href="javascript:void(0)">Add Product</a>
  `,
}
