(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  };

  return ddo;
};

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchTerm = "";

  menu.narrowItDown = function () {
    var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
    promise.then(function (response) {
      menu.found = response;
    });
  }

  menu.removeItem = function (index) {
    menu.found.splice(index, 1);
  }
};

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    return $http({method: "GET", url: ('https://davids-restaurant.herokuapp.com/menu_items.json')})
    .then(function (result) {
      // process result and only keep items that match
      var menuItems = result.data.menu_items;
      var foundItems = [];
      if (searchTerm) {
        for (var i = 0; i < menuItems.length; i++) {
          if (menuItems[i].description.indexOf(searchTerm) !== -1) {
            foundItems.push(menuItems[i]);
          }
        }
      }

      // return processed items
      return foundItems;
    });
  };
};

})()
