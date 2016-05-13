import './index.styl'

import 'reflect-metadata'
require('zone.js/dist/zone') // tslint:disable-line

import * as angular from 'angular'
import { UpgradeAdapter } from '@angular/upgrade'
export const adapter: any = new UpgradeAdapter()

import { ROUTER_PROVIDERS } from '@angular/router'

import { ComponentsModule } from './app/app'

angular
  .module('app', [
    ComponentsModule.name,
  ])

adapter.addProvider(ROUTER_PROVIDERS)

adapter.bootstrap(document.body, ['app'])
