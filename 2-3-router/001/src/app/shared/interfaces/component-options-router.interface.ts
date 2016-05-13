import IComponentOptions = angular.IComponentOptions

//10/ Tworzymy interfejsy dla routera
interface IRouteConfig {
  path: string
  name: string
  component: string
  useAsDefault: boolean
}

export interface IComponentOptionsRouter extends IComponentOptions {
  $routeConfig: IRouteConfig[]
}
