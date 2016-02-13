function textneu(){
	console.log("Skript ausgeführt");
	$.get("/servertime.php", function(data, status){
	console.log("das Script wurde ausgeführt");
	if(status=="success")
	{
		console.los("Erfolg")
	}
	else{
		console.log("Fehlschlag")
	}
	});
}
(function () {
    "use strict";			//geringere Tolleranz gegenüber falschem Code

var element = document.getElementById("ersterAbsatz")
var name = document.getElementById("headerclass")
var name = document.getElementById("headerclass")
//name.addEventListener("click", backtonormal )
$("header").click(function(){
	console.log("Der Header wurde gedrückt");
});
$("header").mousedown(function(){
	document.getElementById("startbildschirm").innerHTML="Alte Internettseite";
$(".neuetexte").append("<p>Hier steht jetzt etwas neues, das hier vorher nicht stand</p>")
	});
$("header").mouseup(function(){
	document.getElementById("startbildschirm").innerHTML="Altere Internettseite";
});
function backtonormal(){
	window.location.href = "TestBlank.html";
}

if(element){
element.innerHTML="Kein Hallo Welt"
}
else{
	console.log("Es gab ein Problem mit der Adressierung");
}



})();

$(document).ready(function(){
	$("#erneuern").click(function(){
		$("#textfeld").load("servertime.php")});		
});

