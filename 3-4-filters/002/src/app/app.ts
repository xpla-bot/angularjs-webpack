import * as angular from 'angular';

import {ProductsService} from "./products.service";
import {AppComponent} from "./app.component";

function plnFilterFactory () {
    return function plnFilter (input: number): string {
        const zl = Math.floor(input);
        const gr = Math.floor((input*100)%100);

        return `${zl}zł ${gr}gr`;
    };
}

angular.module('app', [])
    .component('appComponent', AppComponent)
    .service('productsService', ProductsService)
    .filter('pln', plnFilterFactory);