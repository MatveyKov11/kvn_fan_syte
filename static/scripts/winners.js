small.style.display = 'none';
big.onclick = function(event) {
	big.style.display = 'none';
	small.style.display = 'flex';

	winImg1.style.maxWidth = '100%';
    winImg1.style.maxHeight = '2000vh';

	winImg2.style.maxWidth = '100%';
    winImg2.style.maxHeight = '2000vh';

	winImg3.style.maxWidth = '100%';
    winImg3.style.maxHeight = '2000vh';
}

small.onclick = function(event) {
	small.style.display = 'none';
	big.style.display = 'flex';

	winImg1.style.maxWidth = '60%';
    winImg1.style.maxHeight = '55vh';

	winImg2.style.maxWidth = '60%';
    winImg2.style.maxHeight = '55vh';

	winImg3.style.maxWidth = '60%';
    winImg3.style.maxHeight = '55vh';
}