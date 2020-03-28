let itemName = prompt("What is the Item Name");
let basePrice = Number(prompt("What is the Base price"));
let blackFriday = prompt("Is it Black Friday?");
let searchEngine = prompt("Did you find this product through a search engine");
let compShop = prompt("Did you find this product on a different site?");
let message = `The base price for a ${itemName} is ${basePrice} `;
let message1;
let message2;
let message3;
let finalPrice;

// sending the complete message back to user usinng alert
// The name of the item + basePrice
// the blackfriday, searchEngine, compShop will affect the price

if (blackFriday === "yes"){
    message1= `Since it's Black Friday, we will reduce the price by 25%.`;
    finalPrice = (basePrice - (basePrice * .25));
} 
if (searchEngine === "yes") {
    message2=`We will increase the price by 1% to pay the search engine.`;
    finalPrice = (basePrice * 1.01); 
}
if (compShop === "yes") {
    message3= `This purchaser is a comparison shopper, so we will reduce the price by 10%.`;
    finalPrice= (basePrice * .10);
}

alert(`${message} ${message1} ${message2} ${message3}The final price is ${finalPrice}`)
