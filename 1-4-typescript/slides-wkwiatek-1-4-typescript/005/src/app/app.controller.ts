import { IProduct } from './product.interface'

export class AppController {
  public products: IProduct[]

  constructor(AppService: any) {
    this.products = AppService.products
  }
}
