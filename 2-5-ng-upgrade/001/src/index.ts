import './index.styl'

//2/ Importujemy zależności Angulara 2
import 'reflect-metadata'
require('zone.js/dist/zone') // tslint:disable-line

import * as angular from 'angular'
//2/ Dodajemy adapter do upgrade'u
import { UpgradeAdapter } from '@angular/upgrade'
const adapter: any = new UpgradeAdapter()

import { ComponentsModule } from './app/app'

angular
  .module('app', [
    ComponentsModule.name,
  ])

/// Bootstrapujemy z użyciem adaptera
adapter.bootstrap(document.body, ['app']);
