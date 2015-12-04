'use strict';

angular.module('myApp', ['ui.router'])

	.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  	.state("home", {
  		url: "/",
  		templateUrl: "home/home.html",
  		controller: "homeCtrl"
  	})
  	.state("map", {
  		url: "/map",
  			templateUrl: "maps/map.html",
  			controller: "mapCtrl"
  		})
      .state("login", {
      url: "/login",
        templateUrl: "login/login.html",
        controller: "mapCtrl"
      })
});
