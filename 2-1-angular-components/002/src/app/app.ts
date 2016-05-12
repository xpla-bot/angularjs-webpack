import IModule = angular.IModule
import { ProductsModule } from './products/products'
import { AppComponent } from './app.component'

//5/ Tworzymy nowy moduł na wszystkie komponenty aplikacji
export const ComponentsModule: IModule = angular
  .module('app.components', [
    ProductsModule.name,
  ])
  .component('app', AppComponent)
