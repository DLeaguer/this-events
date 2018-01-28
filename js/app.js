//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var navs = document.getElementsByClassName('navi');

for (var i=0; i<navs.length; i++){
	navs[i].addEventListener('click', showNav);
	// console.log(navs[i]);
}

function showNav(){
	// console.log(this.innerHTML);
	var getNav = this.querySelectorAll(".inner")[0];
	if(getNav.style.display === "none"){
		getNav.style.display = "block";
	}else{
		getNav.style.display = "none";
	}
}



/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var nameElem = document.getElementsByClassName('name');

for (var i=0; i<nameElem.length; i++){
	nameElem[i].addEventListener('click', showName);
}

function showName(){
	var getName = this.querySelectorAll(".menu")[0];
	if (getName.style.display === "none"){
		getName.style.display = "block";
	}else{
		getName.style.display = "none";
	}
}