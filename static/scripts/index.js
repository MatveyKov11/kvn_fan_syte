small.style.display = 'none';
big.onclick = function(event) {
	big.style.display = 'none';
	small.style.display = 'flex';

    mainImg.style.maxWidth = '100%';
    mainImg.style.maxHeight = '2000vh';
}

small.onclick = function(event) {
	small.style.display = 'none';
	big.style.display = 'flex';

    mainImg.style.maxHeight = '50vh';
    mainImg.style.maxWidth = '60%';
}