import './index.styl'

/// Musimy lekko zmodyfikować import - teraz robi to TypeScript
import * as angular from 'angular'
import { AppController } from './app/app.controller'
import { AppService } from './app/app.service'

angular
  .module('app', [])
  .controller('AppController', ['AppService', AppController])
  .service('AppService', AppService)
