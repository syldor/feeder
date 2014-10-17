'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app', [
  'ngRoute', 'app.directives', 'ui.bootstrap'
]).
config([
	'$routeProvider', function($routeProvider) {
  return $routeProvider.when('/', {
    redirectTo: '/dashboard'
  })
  .when('/dashboard', {
    templateUrl: 'components/dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  })
  .otherwise({redirectTo: '/dashboard'});
}]);

angular.module('app.directives', []);