// onchange handler to change view of input options depending
// upon the option of payment the user has chosen to pay
function handlePaymentMethodOnChange() {
  let paymentMethod = document.getElementById("paymentMethod").value;
  console.log(paymentMethod);


  let credit = document.getElementById("credit");
  let debit = document.getElementById("debit");
  let dd = document.getElementById("dd");

  if (paymentMethod === "credit") {
    credit.style.display = "inherit";
    debit.style.display = "none";
    dd.style.display = "none";
  } else if (paymentMethod === "debit") {
    debit.style.display = "inherit";
    dd.style.display = "none";
    credit.style.display = "none";
  } else {
    dd.style.display = "inherit";
    credit.style.display = "none";
    debit.style.display = "none";
  }
}

handlePaymentMethodOnChange();
