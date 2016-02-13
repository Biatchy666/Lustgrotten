<?php 

if(isset($_GET['Befehl'])) {

//EINSCHALTEN
//LED1
if($_GET['Befehl'] === 'led1ein') {

trim(@shell_exec("/usr/local/bin/gpio -g write 25 1")); //Befehl an die Shell senden um GPIO 23 einzuschalten
}
//AUSSCHALTEN
//LED1
elseif($_GET['Befehl'] === 'led1aus') {
trim(@shell_exec("/usr/local/bin/gpio -g write 25 0")); //Befehl an die Shell senden um GPIO 23 einzuschalten
}}
?>
<a href="<?php print($_SERVER['PHP_SELF']); ?>?Befehl=led1ein">Led4 einschalten</a>
<a href="<?php print($_SERVER['PHP_SELF']); ?>?Befehl=led1aus">Led4 ausschalten</a>