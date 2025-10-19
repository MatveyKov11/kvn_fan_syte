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

document.onscroll = function(event) {
	window1.style.top = scrollY + 20 + 'px';
    window2.style.top = scrollY + 20 + 'px';
    window3.style.top = scrollY + 20 + 'px';
    window4.style.top = scrollY + 20 + 'px';
    window5.style.top = scrollY + 20 + 'px';
    window6.style.top = scrollY + 20 + 'px';
}