import IComponentOptions = angular.IComponentOptions

interface IRouteConfig {
  path: string
  name: string
  component: string
  useAsDefault?: boolean
}

export interface IComponentOptionsRouter extends IComponentOptions {
  $routeConfig: IRouteConfig[]
}
