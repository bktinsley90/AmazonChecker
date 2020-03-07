let itemName = prompt("What is the Item Name");
let basePrice = prompt("What is the Base price");
let blackFriday = prompt("Is it Black Friday?");
let searchEngine = prompt("Did you find this product through a search engine");
let compShop = prompt("Did you find this product on a different site?");
let message= `The base price for a ${itemName} is ${basePrice}.` ;
let finalPrice;

// sending the complete message back to user usinng alert
// The name of the item + basePrice
// the blackfriday, searchEngine, compShop will affect the price

if (blackFriday === "yes"){
    message + "Since it's Black Friday, we will reduce the price by 25%.";
    finalPrice= (basePrice - (basePrice * .25));
}

if (searchEngine === "yes") {
    message + "We will increase the price by 1% to pay the search engine.";
    (finalPrice * 1.01); 
}
if (compShop === "yes") {
    message + "This purchaser is a comparison shopper, so we will reduce the price by 10%.";
    (basePrice * .10);
}


alert(`${message} The final price is ${finalPrice}.`);