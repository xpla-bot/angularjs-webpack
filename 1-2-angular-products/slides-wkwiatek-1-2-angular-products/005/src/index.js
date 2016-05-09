import angular from 'angular'
import { AppController } from './app/app.controller'
import { AppService } from './app/app.service'

angular
	.module('app', [])
	/// Dzięki strict DI dostaniemy błąd bez jawnego podania wstrzykiwanych zależności
	.controller('AppController', ['AppService', AppController])
	.service('AppService', AppService)
