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
      soldOut: false,
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "Linas"
        },
        {
          stars: 4,
          body: "It be pretty good.",
          author: "Kathy"
        }
      ]
    },
    {
      name: "Sapphire",
      price: 15.50,
      description: "Big and Cool",
      canPurchase: true,
      soldOut: true,
      reviews: [
        {
          stars: 2,
          body: "Not as cool as they say!",
          author: "Linas"
        },
        {
          stars: 4,
          body: "It be alright.",
          author: "James"
        }
      ]
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

  app.controller("ReviewController", function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };

  });




})();
