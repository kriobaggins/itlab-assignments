/**
  * REFERENCE: The regex string to validate email id https://stackoverflow.com/a/46181/12335360
  */
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
  * REFERENCE: The regex string to validate mobile number https://stackoverflow.com/a/3813226/12335360
  */
const phoneRegex = /^[789]\d{9}$/;

const formValidation = (data) => {
  let phone = phoneRegex.test(data.phone);
  let email = emailRegex.test(data.email);

  return {phone, email};
}


function submitForm() {
  const info = document.getElementById("customerInfo");

  const formData = new FormData(info);

  const data = {
    cname: formData.get("cname"),
    address: formData.get("address"),
    gender: formData.get("gender"),
    languages: formData.getAll("language"),
    city: formData.get("city"),
    phone: parseInt(formData.get("phone")),
    email: formData.get("email"),
  }

  validation = formValidation(data)
  let errorEmail = document.getElementById('errorEmail');
  let errorPhone = document.getElementById('errorPhone');

  !validation.email ? (errorEmail.innerHTML = "Email Invalid") : null;
  !validation.phone ? (errorPhone.innerHTML = "Phone No. Invalid") : null;

  const alertString = `customer name: ${data.cname}
address: ${data.address}
gender: ${data.gender}
languages: ${data.languages}
city: ${data.city}
phone: ${data.phone}
email: ${data.email}
`

  if (validation.email && validation.phone) {
    !validation.email ? (errorEmail.innerHTML = "Email Invalid") : (errorEmail.innerHTML = "");
    !validation.phone ? (errorPhone.innerHTML = "Phone No. Invalid") : (errorPhone.innerHTML = "");
    console.log(data);
    alert(alertString);
  }  

  return false;
}
