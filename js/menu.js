const menus = ["home", "about", "search", "help", "login", "logout"];

function Menu(argument) {
	// Set Active Menu
	var header = document.getElementsByClassName("nav");
	var navlink = header[0].getElementsByClassName("nav-link");
	for (var i = 0; i < navlink.length; i++) {
	  navlink[i].addEventListener("click", function() {
	  var current = document.getElementsByClassName("active");
	  current[0].className = current[0].className.replace(" active", "");
	  this.className += " active";
	  });
	}
}

