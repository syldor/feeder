'use strict';

function TablesCtrl($scope, $http, $filter, $location) {
  $scope.get_tables_list = function() {
    $http({method: 'GET', url: 'http://localhost:3001/api/tables/list'}).
      success(function(data) {
        $scope.data = data;
  	});
  }

  $scope.insert_data = function() {
  	$location.path('insert');
  }

  $scope.get_tables_list();
}