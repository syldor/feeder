'use strict';

angular.module('app.directives').controller('TopBarCtrl',
  function($scope) {
    $scope.isCollapsed = true;
  });

angular.module('app.directives').directive('top_bar', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {

    },
    templateUrl: 'components/top_bar/top_bar_d.html',
    controller: 'TopBarCtrl'
  };
});