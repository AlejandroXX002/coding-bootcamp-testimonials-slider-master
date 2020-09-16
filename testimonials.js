let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
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
	for (const slider of slides) {
		slider.style.display = "none";
	}

	slides[slideIndex - 1].style.display = "";
}
