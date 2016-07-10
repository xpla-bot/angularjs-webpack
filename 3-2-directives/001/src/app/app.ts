import * as angular from 'angular';

import {ProductsService} from "./products.service";
import {AppComponent} from "./app.component";
import {Product} from "./Product";

class ProductDirectiveController {
    public product: Product;
}

function productDirective () {
    return {
        scope: {
            product: '<'
        },
        bindToController: true,
        controllerAs: '$ctrl',
        restrict: 'E',
        controller: ProductDirectiveController,
        template: `
            <div>{{ $ctrl.product.name }} - {{ $ctrl.product.price | currency }}</div>
        `
    }
}

angular.module('app', [])
    .component('appComponent', AppComponent)
    .service('productsService', ProductsService)
    .directive('myProduct', productDirective);