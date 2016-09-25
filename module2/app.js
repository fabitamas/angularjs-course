(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

function ShoppingListCheckOffService() {
  var service = this;

  // declaration of the two lists
  var toBuyItems = [];
  var alreadyBoughtItems = [];

  // add some initial values to the first list
  var item = {
    name: "cookies",
    quantity: 10
  };
  var item2 = {
    name: "chips",
    quantity: 5
  };
  var item3 = {
    name: "fish",
    quantity: 2
  };
  toBuyItems.push(item);
  toBuyItems.push(item2);
  toBuyItems.push(item3);

  // buyItem function definition
  service.buyItem = function (itemIdex) {
    var item = toBuyItems.splice(itemIdex, 1);
    alreadyBoughtItems.push(item[0]);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };
  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };
}

function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyItem = function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}

})();
