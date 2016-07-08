import * as angular from 'angular';

import {ProductsService} from "./products.service";
import {AppComponent} from "./app.component";

function plnFilterFactory () {
    return function plnFilter (input: number, mode:string): string {
        if (mode == 'short') {
            return input.toFixed(2).replace('.', ',')+' zł';
        } else {
            const zl = Math.floor(input);
            const gr = Math.floor((input*100)%100);

            return `${zl}zł ${gr}gr`;
        }
    };
}

angular.module('app', [])
    .component('appComponent', AppComponent)
    .service('productsService', ProductsService)
    .filter('pln', plnFilterFactory);