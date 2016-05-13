import IComponentOptions = angular.IComponentOptions
import { IProduct } from '../product.interface'

export const ProductsAddComponent: IComponentOptions = {
  bindings: {
    $router: '<',
  },
  controller: class {
    public newProduct: IProduct
    public onProductAdded: Function
    public $router: any

    constructor(private Products: any) {
      'ngInject';
    }

    public onSubmit({ newProduct }: { newProduct: IProduct }): void {
      this.Products.products.push(newProduct)
      this.newProduct = {
        name: '',
        price: undefined,
      }
      this.$router.navigate(['ProductsMain']);
    }
  },
  template: `
    <form 
      ng-submit="$ctrl.onSubmit({ newProduct: $ctrl.newProduct })"
    >
      <input 
        ng-model="$ctrl.newProduct.name" 
        placeholder="name" 
        required
      >
      <input 
        ng-model="$ctrl.newProduct.price" 
        placeholder="price" 
        type="number" 
        step="0.01"
        required
      >
      <button>Save</button>
    </form>
  `,
}
