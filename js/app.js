//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var navElem = document.getElementsByClassName('navi');
for (var i=0; i<navElem.length; i++){
	navElem[i].addEventListener('click', showInner);
}

// var innerElem = document.getElementsByClassName('inner');
// console.log(innerElem);

// for (var i=0; i<innerElem.length; i++){
// 	innerElem[i].style.display = 'none';
// }

function showInner(){
	var inElem = this.querySelectorAll('.inner')[0];
	if (inElem.style.display === 'none'){
		inElem.style.display = 'block';
	}else{
		inElem.style.display = 'none';
	}
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var nameElem = document.getElementsByClassName('name');
for (var i=0; i<nameElem.length; i++){
	nameElem[i].addEventListener('click', showMenu);
}

function showMenu(){
	var menuElem = this.querySelectorAll('.menu')[0];
	if (menuElem.style.display === 'none'){
		menuElem.style.display = 'block';
	}else{
		menuElem.style.display = 'none';
	}
}