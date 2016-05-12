import { IProduct } from './product.interface'

export class AppController {
  public products: IProduct[]

  //4/ Adnotacja mówi, że mają zostać sprawdzone zależności w tym miejscu
  constructor(AppService: any) {
    'ngInject';
    
    this.products = AppService.products
  }
}
