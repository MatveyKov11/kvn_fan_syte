show1.onclick = function(event) {
	window1.style.display = 'flex';
}
close1.onclick = function(event) {
	window1.style.display = 'none';
}

show2.onclick = function(event) {
	window2.style.display = 'flex';
}
close2.onclick = function(event) {
	window2.style.display = 'none';
}

show3.onclick = function(event) {
	window3.style.display = 'flex';
}
close3.onclick = function(event) {
	window3.style.display = 'none';
}

show4.onclick = function(event) {
	window4.style.display = 'flex';
}
close4.onclick = function(event) {
	window4.style.display = 'none';
}

show5.onclick = function(event) {
	window5.style.display = 'flex';
}
close5.onclick = function(event) {
	window5.style.display = 'none';
}

show6.onclick = function(event) {
	window6.style.display = 'flex';
}
close6.onclick = function(event) {
	window6.style.display = 'none';
}
if (window.innerWidth > 900){
	window1.style.left = 50 + 'px';
	window1.style.width = window.innerWidth - 100 + 'px';
	window1.style.height = window.innerHeight - 100 + 'px';

	window2.style.left = 50 + 'px';
	window2.style.width = window.innerWidth - 100 + 'px';
	window2.style.height = window.innerHeight - 100 + 'px';

	window3.style.left = 50 + 'px';
	window3.style.width = window.innerWidth - 100 + 'px';
	window3.style.height = window.innerHeight - 100 + 'px';

	window4.style.left = 50 + 'px';
	window4.style.width = window.innerWidth - 100 + 'px';
	window4.style.height = window.innerHeight - 100 + 'px';

	window5.style.left = 50 + 'px';
	window5.style.width = window.innerWidth - 100 + 'px';
	window5.style.height = window.innerHeight - 100 + 'px';

	window6.style.left = 50 + 'px';
	window6.style.width = window.innerWidth - 100 + 'px';
	window6.style.height = window.innerHeight - 100 + 'px';

	document.onscroll = function(event) {
		window1.style.top = scrollY + 50 + 'px';
		window2.style.top = scrollY + 50 + 'px';
		window3.style.top = scrollY + 50 + 'px';
		window4.style.top = scrollY + 50 + 'px';
		window5.style.top = scrollY + 50 + 'px';
		window6.style.top = scrollY + 50 + 'px';
	}
}else{
	window1.style.left = 10 + 'px';
	window1.style.width = window.innerWidth - 20 + 'px';
	window1.style.height = window.innerHeight - 20 + 'px';

	window2.style.left = 10 + 'px';
	window2.style.width = window.innerWidth - 20 + 'px';
	window2.style.height = window.innerHeight - 20 + 'px';

	window3.style.left = 10 + 'px';
	window3.style.width = window.innerWidth - 20 + 'px';
	window3.style.height = window.innerHeight - 20 + 'px';

	window4.style.left = 10 + 'px';
	window4.style.width = window.innerWidth - 20 + 'px';
	window4.style.height = window.innerHeight - 20 + 'px';

	window5.style.left = 10 + 'px';
	window5.style.width = window.innerWidth - 20 + 'px';
	window5.style.height = window.innerHeight - 20 + 'px';

	window6.style.left = 10 + 'px';
	window6.style.width = window.innerWidth - 20 + 'px';
	window6.style.height = window.innerHeight - 20 + 'px';

	document.onscroll = function(event) {
		window1.style.top = scrollY + 10 + 'px';
		window2.style.top = scrollY + 10 + 'px';
		window3.style.top = scrollY + 10 + 'px';
		window4.style.top = scrollY + 10 + 'px';
		window5.style.top = scrollY + 10 + 'px';
		window6.style.top = scrollY + 10 + 'px';
	}
}