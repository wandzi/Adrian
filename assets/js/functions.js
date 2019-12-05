
var hamburger_icon = document.querySelector("#hamburger-icon");
var close_btn = document.querySelector(".closebtn");
var close = document.querySelector("#close");


function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function closeInterface() {
	document.getElementById("myNav").style.height = "0%";
}

hamburger_icon.addEventListener("click", function(){
    openNav();
}, false);

close_btn.addEventListener("click", function(){
    closeNav();
}, false);

close.addEventListener("click", function(){
    closeInterface();
}, false);

