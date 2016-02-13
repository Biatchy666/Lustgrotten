var sockethost = 'ws://echo.websocket.org';

var connect = new WebSocket(sockethost);
var dropdownwahl = document.getElementById("auswahl");
var vollb = false;
function sprachwahl() {
	var attribute = document.getElementById("sprachdropdown");
	if(attribute.selectedIndex==0){
		location='styleGuide.html';
	}
	else{
		location='styleGuide.de.html';
	}
	console.log(attribute.selectedIndex);
}
connect.onmessage = function(event) {
	alert("Nachricht vom Server: " + event.data);
}
function onhomebuttonpressed() {
	document.getElementById("homebutton").classList.add('active');
	document.getElementById("firstbutton").classList.remove('active');
	document.getElementById("secondbutton").classList.remove('active');
	document.getElementById("zusatzbutton").classList.remove('active');
	
	document.getElementById("ersteseite").classList.remove('disabled');
	document.getElementById("zweiteseite").classList.add('disabled');
	document.getElementById("dritteseite").classList.add('disabled');
	document.getElementById("vierteseite").classList.add('disabled');
}

function onfirstbuttonpressed() {
	document.getElementById("homebutton").classList.remove('active');
	document.getElementById("firstbutton").classList.add('active');
	document.getElementById("secondbutton").classList.remove('active');
	document.getElementById("zusatzbutton").classList.remove('active');
	
	document.getElementById("ersteseite").classList.add('disabled');
	document.getElementById("zweiteseite").classList.remove('disabled');
	document.getElementById("dritteseite").classList.add('disabled');
	document.getElementById("vierteseite").classList.add('disabled');
}
function onsecondbuttonpressed() {
	document.getElementById("homebutton").classList.remove('active');
	document.getElementById("firstbutton").classList.remove('active');
	document.getElementById("secondbutton").classList.add('active');
	document.getElementById("zusatzbutton").classList.remove('active');
	
	document.getElementById("ersteseite").classList.add('disabled');
	document.getElementById("zweiteseite").classList.add('disabled');
	document.getElementById("dritteseite").classList.remove('disabled');
	document.getElementById("vierteseite").classList.add('disabled');
}

function onzusatzbuttonpressed() {
	document.getElementById("homebutton").classList.remove('active');
	document.getElementById("firstbutton").classList.remove('active');
	document.getElementById("secondbutton").classList.remove('active');
	document.getElementById("zusatzbutton").classList.add('active');
	
	document.getElementById("ersteseite").classList.add('disabled');
	document.getElementById("zweiteseite").classList.add('disabled');
	document.getElementById("dritteseite").classList.add('disabled');
	document.getElementById("vierteseite").classList.remove('disabled');
}
 function onscreenbuttonpressed() {
	 if(document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen){
		 document.getElementById("expand").classList.remove('fa-compress');	
		document.getElementById("expand").classList.add('fa-expand');
		document.getElementById("screenbutton").classList.remove('activesprache');				 
		console.log("Kein Volbild mehr");
		vollb=false;			
	 }
	 else{
		document.getElementById("expand").classList.add('fa-compress');
		document.getElementById("expand").classList.remove('fa-expand');	
		document.getElementById("screenbutton").classList.add('activesprache');		
		console.log("Vollbild aktiv");
		vollb=true;			
	 }
	 vollbild();
 }
function onenglischbuttonpressed() {	
	location='styleGuide.html';
}
function ondeutschbuttonpressed() {
	location='styleGuide.de.html';	
}
function onspanischbuttonpressed() {
	connect.send("Hola Websocket, Hola " + auswahl.value);
}




/*--------------------------Nav Rechts---------------------------------*/
function onthirdbuttonpressed() {	
	document.getElementById("thirdbutton").classList.add('activerechts');
	document.getElementById("fourthbutton").classList.remove('activerechts');
	document.getElementById("fifthbutton").classList.remove('activerechts');
	console.log("Dritter Button wurde gedrückt");
	document.getElementById("sidebar1").classList.remove('disabled');
	document.getElementById("sidebar2").classList.add('disabled');
	document.getElementById("sidebar3").classList.add('disabled');
}
function onfourthbuttonpressed() {
	document.getElementById("fourthbutton").classList.add('activerechts');
	document.getElementById("thirdbutton").classList.remove('activerechts');
	document.getElementById("fifthbutton").classList.remove('activerechts');
	console.log("Vierter Button wurde gedrückt");
	document.getElementById("sidebar1").classList.add('disabled');
	document.getElementById("sidebar2").classList.remove('disabled');
	document.getElementById("sidebar3").classList.add('disabled');

}
function onfifthbuttonpressed() {
	document.getElementById("fourthbutton").classList.remove('activerechts');
	document.getElementById("thirdbutton").classList.remove('activerechts');
	document.getElementById("fifthbutton").classList.add('activerechts');
	console.log("fünfter Button wurde gedrückt");
	document.getElementById("sidebar1").classList.add('disabled');
	document.getElementById("sidebar2").classList.add('disabled');
	document.getElementById("sidebar3").classList.remove('disabled');

}

var toggleWifi = function() {
    var obj = document.getElementById("wifiToggle").winControl;
    console.log("Wifi toggled. Current status: " + (obj.checked ? "on" : "off"));
}

// To protect against untrusted code execution, all functions are required to be marked as supported for processing before they can be used inside a data-win-options attribute in HTML markup.
WinJS.Utilities.markSupportedForProcessing(toggleWifi);

// track whether the item was bought or not
var bought;

//Show the flyout
function showConfirmFlyout() {
    bought = false;
    log("");

    var buyButton = document.getElementById("buyButton");
    document.getElementById("confirmFlyout").winControl.show(buyButton);
}

// When the Buy button is pressed, hide the flyout since the user is done with it.
function confirmOrder() {
    bought = true;
    log("You have completed your purchase.");
    document.getElementById("confirmFlyout").winControl.hide();
}

// On dismiss of the flyout, determine if it closed because the user pressed the buy button. If not, then the
// flyout was light dismissed.
function onDismiss() {
    if (!bought) {
        log("The purchase was not completed.");
    }
}

function log(message) {
    document.getElementById("status").textContent = message;
}

WinJS.UI.processAll().then(function () {
    document.getElementById("buyButton").addEventListener("click", showConfirmFlyout, false);
    document.getElementById("confirmButton").addEventListener("click", confirmOrder, false);
    document.getElementById("confirmFlyout").addEventListener("afterhide", onDismiss, false);	
});

function onEscPressed(event){
	console.log(event.key);
}

function vollbild() {
  console.log("Funktion vollbild() ausgeführt");
  var element = document.getElementById("wrapper");
 
  if (element.requestFullScreen) {
 
    if (!document.fullScreen) {
      element.requestFullscreen();
    } else {
      document.exitFullScreen();
    }
 
  } else if (element.mozRequestFullScreen) {
 
    if (!document.mozFullScreen) {
      element.mozRequestFullScreen();
    } else {
      document.mozCancelFullScreen();
    }
 
  } else if (element.webkitRequestFullScreen) {
 
    if (!document.webkitIsFullScreen) {
      element.webkitRequestFullScreen();
    } else {
      document.webkitCancelFullScreen();
    }
 
  }
 
}


WinJS.UI.processAll();