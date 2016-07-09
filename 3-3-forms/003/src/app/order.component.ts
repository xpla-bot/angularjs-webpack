import IComponentOptions = angular.IComponentOptions;
import IFormController = angular.IFormController;

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
    
    public sendOrder (formController: IFormController) {
        console.log(formController);
        if (formController.$valid) {
            console.log('Order', this.order);
            this.resetOrder();
            this.message = 'Order sent';
        } else {
            this.message = 'Order cannot be send';
        }
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
        <form name="orderForm" ng-submit="$ctrl.sendOrder(orderForm)" novalidate>
            <header>Order product</header>
            <p ng-if="$ctrl.message">{{ $ctrl.message }}</p>
            <label>Your name: <input type="text" ng-model="$ctrl.order.name" name="name" required full-name></label>
            <label>Product: <select ng-model="$ctrl.order.product" ng-options="product as product.name for product in $ctrl.products" name="product"></select></label>
            <label>Count: <input type="number" ng-model="$ctrl.order.count" min="1" max="10" step="1" name="count" /></label>
            <button type="submit" ng-disabled="orderForm.$invalid">Send order</button>
            
            
            <div ng-messages="orderForm.name.$error">
                <div ng-message="required">Name is required</div>
                <div ng-message="fullName">Name should look like name of real person</div>
            </div>
            <div ng-messages="orderForm.count.$error">
                <div ng-message="min">Minimal count is 1</div>
                <div ng-message="max">Maximal count is 10</div>
            </div>
        </form>
    `
}