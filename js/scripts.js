// business logic
//constructor - pizza
function Pizza (size, cheese, meat, veggie) {
  this.size = size;
  this.cheese = cheese;
  this.meat = meat;
  this.veggie = veggie;
}

Pizza.prototype.cost = function() {
  //return this.size + this.cheese + this.meat + this.veggie;
  var sizes = {"small" : 3, "medium" : 4, "large" : 5, "family" : 6};
  var pieCost = sizes[this["size"]];
  var cheeseCost = 2 * this["cheese"].length;
  var meatCost = 3 * this["meat"].length;
  var veggieCost = 1 * this["veggie"].length;
  return pieCost + cheeseCost + meatCost + veggieCost;
}

// user interface logic
$(document).ready(function() {

  $("form#pizzaOrder").submit(function(event) {
    $("#orderTotal").empty();
    event.preventDefault();
    //get user selections to pass to constructor
    var size = $('input[name=size]:checked').val();

    var cheese = new Array();
    $('input[name=cheese]:checked').each(function() {
      cheese.push($(this).val());
    });

    var meat = new Array();
    $('input[name=meat]:checked').each(function() {
      meat.push($(this).val());
    });
    // alert(meat)
    var veggies = new Array();
    $('input[name=veggies]:checked').each(function() {
      veggies.push($(this).val());
    });
    //call the pizza constructor
    var order = new Pizza (size, cheese, meat, veggies);
    //get price for this order by calling the prototype cost function
    var orderCost = order.cost();
    $("#orderTotal").text("Thank you! Your order total is: $ " + orderCost);
  }); //end sub
});
