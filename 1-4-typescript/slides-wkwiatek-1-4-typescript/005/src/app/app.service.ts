/// Importujemy utworzony interfejs
import { IProduct } from './product.interface'

export class AppService {
  //5/ Używamy go do trzymania prawidłowej struktury obiektów
  public products: IProduct[] = [
    { name: 'Milk', price: 1.05 },
    { name: 'Salami', price: 2.5 },
    { name: 'Bread', price: 0.85 },
  ]
}
