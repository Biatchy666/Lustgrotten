function ladeStandart(){
 WinJS.UI.Fragments.renderCopy("/Testfragment1.htm", fragmentsWithControlsDiv)
        .done(
            function () {
                // After the fragment is loaded into the target element,
                // WinJS.UI.processAll() needs to be called to activate the
                // controls and process options records.
                WinJS.UI.processAll(fragmentsWithControlsDiv);

                console.log("successfully loaded fragment", "sample", "status");
            },
            function (error) {
                console.log("error loading fragment: " + error, "sample", "error");
            }
        );
	//initialisierepin(25);
	//initialisierepin(24);
	//initialisierepin(23);
	
	initialisierepin(2);
	initialisierepin(3);
	initialisierepin(4);
	initialisierepin(17);
	initialisierepin(22);
	initialisierepin(10);
	initialisierepin(9);
	initialisierepin(11);
	
}

function initialisierepin(pinnummer){
	$.ajax({
	  url: '/php/gpioinit.php',
	  data: {'pin': pinnummer},
	  type: 'POST',
	  dataType: 'json',
	  success: function (data){
	  alert("Lampe ausgeschaltet " +data);      
	}});
}
var aktuelleseite=1;
function seitenumschaltung(nummer){
  if(aktuelleseite!=nummer){
  var Dir="";
  switch(nummer){
    case 1: Dir ="/Testfragment1.htm";break;
    case 2: Dir ="/Testfragment2.htm";break;
    case 3: Dir ="/Testfragment3.htm";break;
    case 4: Dir ="/Blankfragment.htm";break;
    default:break;}  
aktuelleseite=nummer;
  var fragmentsWithControlsDiv = document.querySelector("#fragmentsWithControlsDiv");
  fragmentsWithControlsDiv.innerHTML = "";
  WinJS.UI.Fragments.renderCopy(Dir, fragmentsWithControlsDiv)
        .done(
            function () {
                // After the fragment is loaded into the target element,
                // WinJS.UI.processAll() needs to be called to activate the
                // controls and process options records.
                WinJS.UI.processAll(fragmentsWithControlsDiv);

                console.log("successfully loaded fragment", "sample", "status");
            },
            function (error) {
                console.log("error loading fragment: " + error, "sample", "error");
            }
        );
  }
}
function lampeschalten(pin, wert){
  console.log("Lampe wurde eingeschaltet");
  $.ajax({
    url: '/php/pinschalten.php',
    dataType: 'json',
    data: {'pin': pin, 'wert': wert},
    type: 'POST',
    success: function (data){
    alert("Lampe eingeschaltet " +data);      
    }});
  console.log("Lampe wurde eingeschaltet wirklich");
}
function verhindereDrehen(){
	if(document.fullscreenEnabled){
		var bild = document.getElementById("app");
		console.log("Vollbild möglich");
		if(!document.fullscreenElement){
		bild.requestFullscreen();
		}
		else{
			document.exitFullscreen();
		}
	}
	else{
		  if (document.requestFullScreen) {
     document.requestFullScreen();   } else if (document.mozRequestFullScreen) {
     document.mozRequestFullScreen();   } else if (document.webkitRequestFullScreen) {
     document.webkitRequestFullScreen();   }

		console.log("Vollbild nicht möglich")
		
		
	}
}
WinJS.UI.processAll();
