'use strict';

angular.module('app.directives').controller('MenuCtrl',
  function($scope) {

  });

angular.module('app.directives').directive('menu', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {

    },
    templateUrl: 'components/menu/menu_d.html',
    controller: 'MenuCtrl'
  };
});