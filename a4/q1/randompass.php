<?php
// random password generator
// REFERENCE: https://stackoverflow.com/a/6101969
function randomPassword() {
    $alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()!-+=_';
    $pass = array(); //remember to declare $pass as an array
    for ($i = 0; $i < 16; $i++) {
        $n = rand(0, strlen($alphabet) - 1);
        $pass[] = $alphabet[$n];
    }
    return implode($pass); //turn the array into a string
}

?>
