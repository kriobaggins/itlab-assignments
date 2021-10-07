<?php

include './db_create.php';
extract($_POST);

$name = mysqli_real_escape_string($conn, $name);
$email = mysqli_real_escape_string($conn, $email);
$phone = mysqli_real_escape_string($conn, $phone);
$password = md5($password);

echo $name;
echo $phone;
echo $email;
echo $password;
echo $gender;
echo $currency;
echo $ticket;
echo $hotelName;
echo $hotelRoom;
echo $meals;
echo $transport;
echo $register;

$sql="INSERT INTO $tablename(username, email, phone, password, jobRole, gender, country, currency, ticket, hotelName, hotelRoom, meals, transport)
VALUES ('$name', '$email', '$phone', '$password', '$jobRole', '$gender', '$countrySelect', '$currency', '$ticket', '$hotelName', '$hotelRoom', '$meals', '$transport')";

if (isset($register)) {
  if(!mysqli_query($conn, $sql)) {
    echo ('<script>alert("user already registered. '. mysqli_error($conn) .'")</script>');
  } else {
    header("Location: login");
  }
}

?>
