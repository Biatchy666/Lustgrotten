<?php 
if(isset($_POST['pin'])) {
$pin = $_POST['pin'];
trim(@shell_exec("gpio export ".$pin." out"));
echo("Initialisiert neu ".$pin);
}
?>