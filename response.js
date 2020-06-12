// Nav Bar always shows
window.onscroll = function(){
	scrollNav()
};

function scrollNav(){
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("topNav").style.top = "0";
	}
	else {
		document.getElementById("topNav").style.top = "-100px";
	}
}