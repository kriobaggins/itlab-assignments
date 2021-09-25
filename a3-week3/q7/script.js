/**
  * REFERENCE: The regex string to validate email id https://stackoverflow.com/a/46181/12335360
  */
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// the mobile numbers in India start with 7 or 8 or 9 and then there are 9 more numbers following which can be anything digit
const phoneRegex = /^[789]\d{9}$/;

/** form validator function for validating required fields
 * @param get the form data as a javascript object and validate
 * the phone and email values in the javascript object
 * @return object with boolean values indicating if the 
 * values are valid or not
 */
const formValidation = (data) => {
  let phone = phoneRegex.test(data.phone);
  let email = emailRegex.test(data.email);

  return {phone, email};
}

/** onsubmit handle function for the form
 * @return boolean false to stop the reloading of the 
 * page on submit
 */
function submitForm() {
  const info = document.getElementById("customerInfo");

  // use the javascript's FormData API to get the data from the form on submit
  // REFERENCE: https://developer.mozilla.org/en-US/docs/Web/API/FormData
  const formData = new FormData(info);

  // store the form data as a JavaScript object
  const data = {
    cname: formData.get("cname"),
    address: formData.get("address"),
    gender: formData.get("gender"),
    languages: formData.getAll("language"),
    city: formData.get("city"),
    phone: parseInt(formData.get("phone")),
    email: formData.get("email"),
  }

  // validate the data and get the output
  validation = formValidation(data)

  // get the div contents where the error message will be
  // displayed in the UI to indicate the error about the field
  let errorEmail = document.getElementById('errorEmail');
  let errorPhone = document.getElementById('errorPhone');

  // set the UI indication after validating the values for 
  // better user interface
  !validation.email ? (errorEmail.innerHTML = "Email Invalid. Enter email of format xxx@xxx.xxx") : (errorEmail.innerHTML = "");
  !validation.phone ? (errorPhone.innerHTML = "Phone No. Invalid. Enter 10 Digit mobile no") : (errorPhone.innerHTML = "");

  const alertString = `customer name: ${data.cname}
address: ${data.address}
gender: ${data.gender}
languages: ${data.languages}
city: ${data.city}
phone: ${data.phone}
email: ${data.email}
`

  // send alert and console log the message if there are no errors
  if (validation.email && validation.phone) {
    console.log(data);
    alert(alertString);
  }  

  return false;
}
