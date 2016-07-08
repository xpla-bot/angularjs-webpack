import * as angular from 'angular';
import IAttributes = angular.IAttributes;
import IScope = angular.IScope;

import {ProductsService} from "./products.service";
import {AppComponent} from "./app.component";
import {Product} from "./Product";


interface ProductScope extends IScope {
    product: Product;
}

function basketButtonDirective () {
    return {
        scope: {
            product: '<'
        },
        restrict: 'A',
        link: function (scope: ProductScope, element: JQuery, attrs: IAttributes) {
            let added: boolean = false;

            element.on('mouseover', () => {
                element.css('background-color', added ? 'tomato' : 'yellow');
                element.css('color', added ? 'white' : 'black');
            });

            element.on('mouseout', () => {
                element.css('background-color', 'transparent');
                element.css('color', 'black');
            });

            element.on('click', () => {
                if (!added) {
                    console.log(scope.product, 'product added to basket');
                    element.append(document.createTextNode(`product ${scope.product.name} added to basket`));
                    added = true;
                }
            });
        }
    }
}

angular.module('app', [])
.component('appComponent', AppComponent)
    .service('productsService', ProductsService)
    .directive('basketButton', basketButtonDirective);