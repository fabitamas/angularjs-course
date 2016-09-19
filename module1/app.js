(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope, $filter) {

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
}
})();
