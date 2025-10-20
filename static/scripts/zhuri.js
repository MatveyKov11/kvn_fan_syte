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

window1.style.left = 50 + 'px';
window1.style.width = window.innerWidth - 100 + 'px';
window1.style.height = window.innerHeight - 100 + 'px';

window2.style.left = 50 + 'px';
window2.style.width = window.innerWidth - 100 + 'px';
window2.style.height = window.innerHeight - 100 + 'px';

document.onscroll = function(event) {
	window1.style.top = scrollY + 50 + 'px';
    window2.style.top = scrollY + 50 + 'px';
}