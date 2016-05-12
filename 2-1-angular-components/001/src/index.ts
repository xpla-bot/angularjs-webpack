import './index.styl'

import * as angular from 'angular'
/// Importujemy nowy komponent
import { AppComponent } from './app/app.component'
import { AppService } from './app/app.service'

angular
  .module('app', [])
  /// Używamy go pod nazwą 'app'
  .component('app', AppComponent)
  .service('AppService', AppService)
