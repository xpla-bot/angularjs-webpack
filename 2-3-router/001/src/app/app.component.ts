/// Przydadzą nam się typy
import { IComponentOptionsRouter } from './shared/interfaces/component-options-router.interface'

export const AppComponent: IComponentOptionsRouter = {
  //3/ Konfiguracja routera
  $routeConfig: [{
    component: 'products',
    name: 'Products',
    path: '/',
    useAsDefault: true,
  }],
  controller: class {},
  /// W komponencie App ląduje teraz dyrektywa routera
  template: `<ng-outlet></ng-outlet>`,
}
