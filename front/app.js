'use strict';

var app = angular.module('app', [
  'ngRoute', 'app.directives', 'ui.bootstrap', 'ngCookies'
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
  .when('/tables', {
    templateUrl: 'components/tables/tables.html',
    controller: 'TablesCtrl'
  })
  .otherwise({redirectTo: '/dashboard'});
}]);

angular.module('app.directives', []);

angular.module('app').controller('MasterCtrl', 
    function MasterCtrl($scope, $cookieStore) {
  $scope.toggle = true;
});