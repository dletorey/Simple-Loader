// removeLoader fires once page is loaded
function removeLoader() {
	document.getElementsByTagName("main")[0].removeAttribute("id"); // sets <main id="loading"> to be <main> 
	document.getElementById("loader").setAttribute("class", "hidden"); // sets <div id="loader"></div> to be <div id="loader" class="hidden"></div> so the loader displays
}
// addLoader fires once an action takes place
function addLoader() {
	document.getElementsByTagName("main")[0].setAttribute("id", "loading"); // sets <main> to be <main id="loading">
	document.getElementById("loader").removeAttribute("class"); // sets <div id="loader" class="hidden"></div> to be <div id="loader"></div> so the loader displays
}
window.onload = function() {
	removeLoader();
};