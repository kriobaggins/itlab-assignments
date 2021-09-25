
/** Check the error in to (email) field
  * @param value String which takes input of the string from to 
  * block which is a list of emails separated by semicolon
  * @return Boolean true if there is error in the toBlock value
  */
function emailValidation( value ) {
  let toArray = value.replace(/\s+/g, "").split(";");
  let error = true;

  /**
    * REFERENCE: The regex string to validate email id https://stackoverflow.com/a/46181/12335360
    */
  let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  for (let i = 0; i < toArray.length; i++) { 
    if (!emailRegex.test(toArray[i])) {
      error = false;
    }
  }

  return error;
}

/** onsubmit function to run on form submission
  * use the emailCheckError function to change the 
  * innerHTML of the to field error div and alert for correct value
  */
function submitForm() {
  const info = document.getElementById("mailInfo");
  const formData = new FormData(info);
  const toError = document.getElementById("error");

  const data = {
    to: formData.get("to"),
    subject: formData.get("subject"),
    body: formData.get("body"),
  }
  let alertValue =`to email: ${data.to}\nsubject: ${data.subject}\nbody: ${data.body}`
  
  validEmail = emailValidation(data.to);
  !validEmail ? (toError.innerHTML = "Invalid Email") : (toError.innerHTML = "")

  // !emailCheckError ? (toError.innerHTML = "Invalid Email Field") : (toError.innerHTML = "")

  if(validEmail) {
    !validEmail ? (toError.innerHTML = "Invalid Email") : (toError.innerHTML = "")
    console.log(data);
    alert(alertValue);
  }
  
  return false;
}
