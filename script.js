let itemName = prompt("What is the Item Name");
let basePrice = Number(prompt("What is the Base price"));
let blackFriday = prompt("Is it Black Friday?");
let searchEngine = prompt("Did you find this product through a search engine");
let compShop = prompt("Did you find this product on a different site?");
let message = `The base price for a ${itemName} is ${basePrice} `;

// sending the complete message back to user usinng alert
// The name of the item + basePrice
// the blackfriday, searchEngine, compShop will affect the price
  function percentage(per)
  {
    return basePrice - (basePrice*per)  ;
  }
            
    if (blackFriday === "yes"){
        message.concat(`Since it's Black Friday, we will reduce the price by 25%.`);
        percentage(0.25)
    } else if (searchEngine === "yes") {
        message.concat(`We will increase the price by 1% to pay the search engine.`);
        percentage(1.01)
    } else if (compShop === "yes") {
        message.concat(`This purchaser is a comparison shopper, so we will reduce the price by 10%.`);
        percentage(.10)
    }

alert(`${message}The final price is ${basePrice}`);


