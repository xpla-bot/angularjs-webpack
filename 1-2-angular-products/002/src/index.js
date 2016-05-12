import angular from 'angular'
import { AppController } from './app/app'

//3/ Tworzymy pierwszy kontroler
angular
	.module('app', [])
	.controller('AppController', AppController)