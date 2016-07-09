import IComponentOptions = angular.IComponentOptions;

import {Product} from "./Product";
import {ProductsService} from "./products.service";


interface Order {
    name: string;
    product: Product;
    count: number;
}

class OrderFormComponentController {
    public products: Product[];
    public order: Order;
    public message: string;

    constructor (productsService: ProductsService) {
        'ngInject';

        this.resetOrder();
        this.products = productsService.getProducts();
    }
    
    public sendOrder () {
        console.log('Order', this.order);
        this.resetOrder();
        this.message = 'Order sent';
    }

    private resetOrder () {
        this.order = {
            name: '',
            product: null,
            count: 0
        };
    }
}

export const OrderFormComponent: IComponentOptions = {
    controller: OrderFormComponentController,
    template: `
        <form ng-submit="$ctrl.sendOrder()">
            <header>Order product</header>
            <p ng-if="$ctrl.message">{{ $ctrl.message }}</p>
            <label>Your name: <input type="text" ng-model="$ctrl.order.name"></label>
            <label>Product: <select ng-model="$ctrl.order.product" ng-options="product as product.name for product in $ctrl.products"></select></label>
            <label>Count: <input type="number" ng-model="$ctrl.order.count" /></label>
            <button type="submit">Send order</button>
        </form>
    `
}