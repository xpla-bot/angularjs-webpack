import IComponentOptions = angular.IComponentOptions
import { IProduct } from '../product.interface'

export const ProductsAddComponent: IComponentOptions = {
  //3/ Przekazujemy $router do komponentu
  bindings: {
    $router: '<',
  },
  controller: class {
    public newProduct: IProduct
    public onProductAdded: Function
    public $router: any

    //3/ private w konstruktorze binduje od razu do this
    constructor(private Products: any) {
      'ngInject';
    }

    /// Wykorzystamy destructing assignment ale silnie typowane
    public onSubmit({ newProduct }: { newProduct: IProduct }): void {
      /// Odwołujemy się bezpośrednio do serwisu teraz
      this.Products.products.push(newProduct)
      this.newProduct = {
        name: '',
        price: undefined,
      }
      /// Możemy też zrobić routing z poziomu komponentu
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
