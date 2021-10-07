const pizzaPrice = {
  six: 100,
  eight: 150,
  ten: 200,
  twelve: 300,
}

/** onsubmit handle function for the form
 * @return boolean false to stop the reloading of the 
 * page on submit
 */
function submitForm() {
  const info = document.getElementById("pizzaInfo");

  // use the javascript's FormData API to get the data from the form on submit
  // REFERENCE: https://developer.mozilla.org/en-US/docs/Web/API/FormData
  const formData = new FormData(info);


  // store the form data as a JavaScript object
  const data = {
    pizzaSize: formData.get("pizza") + " inch",
    filling: formData.get("filling"),
    chips: formData.get("chips") && "yes",
    gst: formData.get("gst") && "yes",
    cost: onChangeCalcCosts(),
  }

  sessionStorage.setItem("pizzaData", JSON.stringify(data));
  // console.log(JSON.parse(sessionStorage.getItem("pizzaData")));

  document.location = "address.html"
  return false;
}

function onChangeCalcCosts() {
  let pizzaValue = document.getElementsByName('pizza');
  let pizzaCost = 0;
      
  for(i = 0; i < pizzaValue.length; i++) {
      if(pizzaValue[i].checked) {
        pizzaCost = pizzaPrice[pizzaValue[i].value];
      }
  }

  let fillingCost = 20;
  let totalCost = document.getElementById("totalCost");

  let totaledCost = pizzaCost + fillingCost;
  let chips = document.getElementById("chips").checked;
  let gst = document.getElementById("gst").checked;

  chips && (totaledCost += 100);
  gst && (totaledCost *= 1.05);

  totalCost.innerHTML = `Rs. ${totaledCost}`
  return totaledCost;
}

onChangeCalcCosts()
