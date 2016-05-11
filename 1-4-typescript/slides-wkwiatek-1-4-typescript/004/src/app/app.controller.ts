//7/ Zmieńmy funkcje na klasy 
export class AppController {
  public products: any[]

  constructor(AppService: any) {
    this.products = AppService.products
  }
}
