var array = [
    { type: "item", title: "Logo", picture: "/images/Logo/grau.jpg" },
    { type: "item", title: "W+D 224", picture: "/images/Logo/224.jpg" },
    { type: "item", title: "W+D 326BC", picture: "/images/Logo/326BC.jpg" },
    { type: "item", title: "Ein Eis", picture: "/images/Eis/Eis1.png" },
    { type: "item", title: "Zwei Eis", picture: "/images/Eis/Eis2.jpg" }
];
var bindingList = new WinJS.Binding.List(array);
function playvideo(){
	var vid =document.getElementById("myvideo");
	var but =document.getElementById("play");
	if(vid.paused){
		vid.play();
		but.textContent="--Pause--";
		}
	else{
		vid.pause();
		but.textContent="Abspielen";
	}
}
WinJS.Namespace.define("DefaultData", {
    bindingList: bindingList,
    array: array
});
WinJS.UI.processAll();

