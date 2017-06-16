// business logic
size1 = 0;
size2 = 0;
size3 = 0;
size4 = 0;
cheese = 0;
meat = 0;
veggie = 0;


function Pizza (size1, size2, size3, size4, cheese, meat, veggie) {
  this.size1 = size1;
  this.size2 = size2;
  this.size3 = size3;
  this.size4 = size4;
  this.cheese = cheese;
  this.meat = meat;
  this.veggie = veggie;
}

Pizza.prototype.cost = function(transactionAmount) {
  return this.size1 + this.size2 + this.size3 + this.size4 + this.cheese + this.meat + this.veggie;
}


// user interface logic
$(document).ready(function() {
  var size1 = "small", price = 3;
  var size2 = "medium", price = 4;
  var size3 = "large", price = 5;
  var size4 = "family", price = 6;
  var cheese = price 2;
  var meat = price 3;
  var veggie = price 1;

  $("form#pizzaOrder").submit(function(event) {
    $("result").empty();
    event.preventDefault();


    var userInput = parseInt($("input#user-input").val());

  });
});

var pizza = { size: [small, medium, large, family], cheese: [mozzarella, provolone, parmesan, asiago], meat: [sausage, pepperoni, CanadianBacon, chicken], veggie: [olives, mushrooms, onions, peppers, artichokes] }


// var size = {size: "small", "medium", "large", "family"}
// var cheese = {name: "mozzarella", "provolone", "parmesan"};
// var meat = {name: "sausage", "pepperoni", "CanadianBacon", "chicken"};
// var veggie = {name: "olives", "mushrooms", "onions", "peppers", "artichoke"};









}
