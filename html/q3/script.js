/**
  * REFERENCE: The regex string to validate email id https://stackoverflow.com/a/46181/12335360
  */
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// the mobile numbers in India start with 7 or 8 or 9 and then there are 9 more numbers following which can be anything digit
const phoneRegex = /^[789]\d{9}$/;


/**
  * REFERENCE: The regex string to validate multiple https://stackoverflow.com/a/9315696
  */

const cardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

// cvv is a 3digit pin
const cvvRegex = /^\d{3}$/;

const formValidation = (data) => {
  let phone = phoneRegex.test(data.phone);
  let email = emailRegex.test(data.email);

  // validate the cvv and cardNo only if debit or credit 
  // options are chosen
  if(data.paymentMethod === "debit" || data.paymentMethod === "credit"){
    let cvv = cvvRegex.test(data.cvv);
    let card = cardRegex.test(data.cardNo);
    return {phone, email, cvv, card};
  } 

  return {phone, email};
}

/** getFormData function to get the form data on calling the 
 * function and converting into object depending upon the 
 * payment option of the user
 * @param the form element from DOM
 * @return form data object filtered based on the user's choice
 * of the payment method
 */
function getFormData(info) {
  const formData = new FormData(info);

  const data = {
    name: formData.get("name"),
    phone: parseInt(formData.get("phone")),
    email: formData.get("email"),
    jobRole: formData.get("jobRole"),
    gender: formData.get("gender"),
    country: formData.get("countrySelect"),
    currency: formData.get("currency"),
    ticket: formData.get("ticket"),
    hotelName: formData.get("hotelName"),
    hotelRoom: formData.get("hotelRoom"),
    meals: formData.get("meals"),
    transport: formData.get("transport"),
    paymentMethod: formData.get("paymentMethod"),
  }
  
  if (data.paymentMethod === "credit") {
    data.cardNo = formData.get("creditCardNo");
    data.cvv = formData.get("creditcvv");
    data.expiry = `${formData.get("creditExpiryMo")}/${formData.get("creditExpiryYr")}`;
  } else if (data.paymentMethod === "debit") {
    data.cardNo = formData.get("debitCardNo");
    data.cvv = formData.get("debitcvv");
    data.expiry = `${formData.get("debitExpiryMo")}/${formData.get("debitExpiryYr")}`;
  } else {
    data.ddAccNo = formData.get("ddAccNo");
    data.ddPass = formData.get("ddAccNo");
  }

  return data;
}

function submitForm() {
  const info = document.getElementById("customerInfo");
  let data = getFormData(info);

  // const alertString = `name: ${data.name}
// phone: ${data.phone}
// email: ${data.email}
// jobRole: ${data.jobRole}
// gender: ${data.gender}
// country: ${data.country}
// currency: ${data.currency}
// ticket: ${data.ticket}
// hotelName: ${data.hotelName}
// hotelRoom: ${data.hotelRoom}
// meals: ${data.meals}
// transport: ${data.transport}
// paymentMethod: ${data.paymentMethod}
// `

  let validation = formValidation(data)
  let errorEmail = document.getElementById('errorEmail');
  let errorPhone = document.getElementById('errorPhone');
  let errorccvv = document.getElementById('errorccvv');
  let errorccard = document.getElementById('errorccard');
  let errordcvv = document.getElementById('errordcvv');
  let errordcard = document.getElementById('errordcard');

  !validation.email ? (errorEmail.innerHTML = "Email Invalid. Enter email of format xxx@xxx.xxx") : (errorEmail.innerHTML = "");
  !validation.phone ? (errorPhone.innerHTML = "Phone No. Invalid. Enter 10 Digit mobile no") : (errorPhone.innerHTML = "");
  if (data.paymentMethod == "credit") {
    !validation.cvv ? (errorccvv.innerHTML = "CVV Invalid. Enter 3digit number on back of your card") : (errorccvv.innerHTML = "");
    !validation.card ? (errorccard.innerHTML = "Card No Invalid") : (errorccard.innerHTML = "");
  } else if (data.paymentMethod == "debit") {
    !validation.cvv ? (errordcvv.innerHTML = "CVV Invalid. Enter 3digit number on back of your card") : (errordcvv.innerHTML = "");
    !validation.card ? (errordcard.innerHTML = "Card No Invalid") : (errordcard.innerHTML = "");
  }

  // if (validation.email && validation.phone) {
    // let validation = formValidation(data)
    // if ((data.paymentMethod === "credit" || data.paymentMethod === "debit") && validation.card && validation.cvv) {
      // console.log(data);
      // alert(alertString);
    // } else if (data.paymentMethod == "dd"){
      // console.log(data);
      // alert(alertString);
    // }
  // }

  return (validation.email && validation.phone && (data.paymentMethod !== "dd" ? (validation.card && validation.cvv) : true))

  // return false;
}

