let slideIndex = 1;
// TODO: use Default parameters instead
showSlides(slideIndex);

function plusSlides(n) {
	// ++ OPERATOR
	showSlides((slideIndex += n));
}

function showSlides(n) {
	let slides = document.getElementsByClassName("my-slides");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	// OPERATOR REPLACED
	for (const slider of slides) {
		slider.style.display = "none";
	}

	slides[slideIndex - 1].style.display = "block";
}
