<?php 
if(isset($_POST['pin'])&&isset($_POST['wert'])) {
$pin = $_POST['pin'];
$wert= $_POST['wert'];
trim(@shell_exec("gpio -g write ".$pin." ".$wert));
echo("Initialisiert neu ".$pin);
}
?>