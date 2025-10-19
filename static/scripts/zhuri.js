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

document.onscroll = function(event) {
	window1.style.top = scrollY + 20 + 'px';
    window2.style.top = scrollY + 20 + 'px';
}