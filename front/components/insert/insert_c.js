'use strict';

function InsertCtrl($scope, $http, $filter, $upload) {
  $scope.onFileSelect = function($files) {
    for (var i = 0; i < $files.length; i++) {
      var file = $files[i];
      $scope.upload = $upload.upload({
        url: 'http://localhost:3001/api/upload/',
        method: 'POST',
        data: {myObj: $scope.myModelObj},
        file: file, 
        fileName: 'up.pdf',
      }).success(function(data) {
        $scope.headers = data[1];
        $scope.data = data.slice(2);
      });
    }
  };
}