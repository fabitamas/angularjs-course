(function () {
'use strict';

angular.module('tooMuchApp', [])

.controller('tooMuchController', function($scope) {

  $scope.check = function() {
    if (!$scope.list) {
      $scope.result = 'Please enter data first';
    } else {
      var arrayOfStrings = $scope.list.split(',');
      if (arrayOfStrings.length < 4) {
        $scope.result = 'Enjoy!';
      } else {
        $scope.result = 'Too much!';
      }

    }
  };


});

})();
