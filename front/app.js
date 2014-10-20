'use strict';

var app = angular.module('app', [
  'ngRoute', 'app.directives', 'ui.bootstrap', 'ngCookies', 'angularFileUpload'
]).
config([
    '$routeProvider', function($routeProvider) {
  return $routeProvider.when('/', {
    redirectTo: '/tables'
  })
  .when('/insert', {
    templateUrl: 'components/insert/insert.html',
    controller: 'InsertCtrl'
  })
  .when('/tables', {
    templateUrl: 'components/tables/tables.html',
    controller: 'TablesCtrl'
  })
  .otherwise({redirectTo: '/tables'});
}]);

angular.module('app.directives', []);

angular.module('app').controller('MasterCtrl', 
    function MasterCtrl($scope, $cookieStore) {
  $scope.toggle = true;
});