import {ProductsService} from "./products.service";
import {Product} from './Product';

export function ProductsFactory (productsService: ProductsService): Product[] {
    'ngInject';
    
    return productsService.getProducts();
}