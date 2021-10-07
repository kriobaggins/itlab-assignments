const pizzaData = JSON.parse(sessionStorage.getItem("pizzaData"));

let pizzaName = document.getElementById("pizzaName");

pizzaName.innerHTML = `${pizzaData.pizzaSize} with ${pizzaData.filling}${(pizzaData.chips) && " and Chips"}`;

document.getElementById("totalCost").innerHTML = pizzaData.cost;
