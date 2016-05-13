import IModule = angular.IModule
import { ProductsModule } from './products/products'
import { AppComponent } from './app.component'

import '@angular/router/angular1/angular_1_router'

export const ComponentsModule: IModule = angular
  .module('app.components', [
    'ngComponentRouter',
    ProductsModule.name,
  ])
  .component('app', AppComponent)
  .value('$routerRootComponent', 'app')
