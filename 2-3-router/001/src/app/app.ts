import IModule = angular.IModule
import { ProductsModule } from './products/products'
import { AppComponent } from './app.component'

/// Importujemy router
import '@angular/router/angular1/angular_1_router'

export const ComponentsModule: IModule = angular
  .module('app.components', [
    /// Dodajemy go do zależności
    'ngComponentRouter',
    ProductsModule.name,
  ])
  .component('app', AppComponent)
  /// Ustalamy jaki jest główny komponent routera
  .value('$routerRootComponent', 'app')
