(function() {
  var app = angular.module("store", []);

  app.controller("StoreController", function(){
    this.products = gems; // property of the controller
  });

  var gems = [
    {
      name: "Ruby",
      price: 12.50,
      description: "Shiny and red language",
      canPurchase: true,
      soldOut: false
    },
    {
      name: "Sapphire",
      price: 15.50,
      description: "Big and Cool",
      canPurchase: true,
      soldOut: true
    }
  ];

  app.controller("PanelController", function(){
    this.stuff = 1;

    this.selectStuff = function(clickedstuff) {
      this.stuff = clickedstuff;
    };

    this.isSelected = function(stuff) {
      return this.stuff === stuff;
    };

  });

})();
