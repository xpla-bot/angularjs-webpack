import { IComponentOptionsRouter } from './shared/interfaces/component-options-router.interface'

export const AppComponent: IComponentOptionsRouter = {
  $routeConfig: [{
    component: 'products',
    name: 'Products',
    /// Zagnieżdzamy ścieżkę
    path: 'products/...',
    useAsDefault: true,
  }],
  controller: class {},
  template: `<ng-outlet></ng-outlet>`,
}
