// one dollar in indian rs. we can even get the current price
// if we can add external APIs with fetch API to get data 
// from external APIs.
const oneDollar = 75

// data for the select optins which will be replaced dynamically
// when the user changes the currency option
const services = {
  ticket: [
    {preText: "Lower Ring", dollar: "$15", rupee: `₹${15*oneDollar}`},
    {preText: "Middle Ring", dollar: "$25", rupee: `₹${25*oneDollar}`},
    {preText: "Higher Ring", dollar: "$35", rupee: `₹${35*oneDollar}`},
    {preText: "Golden Ring", dollar: "$55", rupee: `₹${55*oneDollar}`},
  ],
  hotelRoom: [
    {preText: "Basic single Bedroom", dollar: "$50", rupee: `₹${50*oneDollar}`},
    {preText: "Junior Suite (bedroom + living room)", dollar: "$80", rupee: `₹${80*oneDollar}`},
    {preText: "Luxury Suite (bedroom + living room + kitchen)", dollar: "$110", rupee: `₹${110*oneDollar}`},
  ],
  meals: [
    {preText: "Banquet", dollar: "$10", rupee: `₹${10*oneDollar}`},
    {preText: "5 Star Restaurant", dollar: "$30", rupee: `₹${30*oneDollar}`},
    {preText: "Room Service", dollar: "$60", rupee: `₹${60*oneDollar}`},
  ],
  transport: [
    {preText: "No transport service", dollar: "$0", rupee: `₹${0*oneDollar}`},
    {preText: "Personal Cab", dollar: "$35", rupee: `₹${35*oneDollar}`},
  ],
}

/** An onchange handler function which will retrive the 
 * current values of packages respective to the currency 
 * chosen and total cost and also change the cost and output
 * in the payments section for user to pay the amount
 */
function handleCostOnChange() {
  let ticketCost = parseInt(document.getElementById("ticket").value.replace(/[$,₹]+/g,""))
  let hotelRoomCost = parseInt(document.getElementById("hotelRoom").value.replace(/[$,₹]+/g,""))
  let mealsCost = parseInt(document.getElementById("meals").value.replace(/[$,₹]+/g,""))
  let transportCost = parseInt(document.getElementById("transport").value.replace(/[$,₹]+/g,""))

  let totalCost = ticketCost + hotelRoomCost + mealsCost + transportCost
  console.log(totalCost)


  let currency = document.getElementById("currency").value;
  if (currency === "dollar")
    document.getElementById("totalCost").innerHTML = `$${totalCost}`;
  else {
    document.getElementById("totalCost").innerHTML = `₹${totalCost}`;
  }
}

/** onchange handler to change the costs of the services 
 * when the currency choice changes
 */
function handleCurrencyOnChange() {
  let currency = document.getElementById("currency").value;

  let ticket = document.getElementById("ticket");
  for (let i=0; i<ticket.children.length; i++) {
    ticket[i].innerHTML = `${services.ticket[i].preText} ${services.ticket[i][currency]}`;
    ticket[i].value = `${services.ticket[i][currency]} ${services.ticket[i].preText}`;
  }

  let hotelRoom = document.getElementById("hotelRoom");
  for (let i=0; i<hotelRoom.children.length; i++) {
    hotelRoom[i].innerHTML = `${services.hotelRoom[i].preText} ${services.hotelRoom[i][currency]}`;
    hotelRoom[i].value = `${services.hotelRoom[i][currency]} ${services.hotelRoom[i].preText}`;
  }

  let meals = document.getElementById("meals");
  for (let i=0; i<meals.children.length; i++) {
    meals[i].innerHTML = `${services.meals[i].preText} ${services.meals[i][currency]}`;
    meals[i].value =  `${services.meals[i][currency]} ${services.meals[i].preText}`;
  }

  let transport = document.getElementById("transport");
  for (let i=0; i<transport.children.length; i++) {
    transport[i].innerHTML = `${services.transport[i].preText} ${services.transport[i][currency]}`;
    transport[i].value =  `${services.transport[i][currency]} ${services.transport[i].preText}`;
  }
handleCostOnChange()
}

handleCurrencyOnChange()
handleCostOnChange()
