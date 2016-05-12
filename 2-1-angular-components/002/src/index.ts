import './index.styl'

import * as angular from 'angular'
//6/ Importujemy wszystkie komponenty do aplikacji głównej 
import { ComponentsModule } from './app/app'

angular
  .module('app', [
    ComponentsModule.name,
  ])
