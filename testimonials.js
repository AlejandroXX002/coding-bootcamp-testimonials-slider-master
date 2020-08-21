let slideIndex = 1;
// TODO: use Default parameters instead
showSlides(slideIndex);

function plusSlides(n) {
	// TODO: Use ++ operator
	showSlides((slideIndex += n));
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("my-slides");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	// TODO: Use a for of loop instead
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}
