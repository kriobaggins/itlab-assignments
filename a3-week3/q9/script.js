// get the dom elements of the to input value 
// and the error block associated with it
let toBlock = document.getElementById('to');
let error = document.getElementById('error');


/** Check the error in to (email) field
  * @param value String which takes input of the string from to 
  * block which is a list of emails separated by semicolon
  * @return Boolean true if there is error in the toBlock value
  */
function emailCheckError( value ) {
  let toArray = value.replace(/\s+/g, "").split(";");
  let error = false;

  /**
    * REFERENCE: The regex string to validate email id https://stackoverflow.com/a/46181/12335360
    */
  let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  for (let i = 0; i < toArray.length; i++) { 
    if (!emailRegex.test(toArray[i])) {
      error = true;
    }
  }

  return error;
}

/** EventLister for submit button
  * use the emailCheckError function to change the 
  * innerHTML of the to field error div
  */
document.getElementById('submitButton')
  .addEventListener("click", function(e) {
    /* preventDefault to disable reload on submitting the form 
     * REFERENCE: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault */
    e.preventDefault();
    error.innerHTML = emailCheckError(toBlock.value) ? "email invalid" : null
})


console.log(emailCheckError(toBlock.value))
