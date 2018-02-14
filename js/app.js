//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/
var navGet = document.getElementsByClassName('navi');
for (var i=0; i<navGet.length; i++){
	navGet[i].style.cursor = 'pointer';
	navGet[i].addEventListener('click', showNavi);
}

var aElem = document.getElementsByClassName('inner');
for (var i=0; i<aElem.length; i++){
	aElem[i].style.display = 'none';
}

function showNavi(){
	var aElem = this.querySelectorAll('.inner')[0];
	if (aElem.style.display === 'none'){
		aElem.style.display = 'block';
	}else{
		aElem.style.display = 'none';
	}
}




/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/
var nameGet = document.getElementsByClassName('name');
for (var i=0; i<nameGet.length; i++){
	nameGet[i].style.cursor = 'pointer';
	nameGet[i].addEventListener('click', showMenu);
}

var pElem = document.getElementsByClassName('menu');
for (var i=0; i<pElem.length; i++){
	pElem[i].style.display = 'none';
}

function showMenu(){
	var pElem = this.querySelectorAll('.menu')[0];
	if (pElem.style.display === 'none'){
		pElem.style.display = 'block';
	}else{
		pElem.style.display = 'none';
	}
}