$(document).ready(function () {
	$('.gallery__cards').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true,
		prevArrow: $('.arr-left'),
		nextArrow: $('.arr-right'),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					arrows: true,
					centerMode: true,
				},
			},
		],
	});
});

$(document).ready(function () {
	$('.reviews__texts').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: false,
		fade: true,
	});
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
	nav.classList.toggle('nav-active');
	burger.classList.toggle('toggle');
});

// Close nav when any nav link is clicked
navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		if (nav.classList.contains('nav-active')) {
			nav.classList.remove('nav-active');
			burger.classList.remove('toggle');
		}
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const transitionElements = document.querySelectorAll('.transition-on-scroll');
	const fadeElements = document.querySelectorAll('.fade-on-scroll');

	const handleScroll = () => {
		const windowHeight = window.innerHeight;

		transitionElements.forEach((element) => {
			const elementTop = element.getBoundingClientRect().top;
			if (elementTop < windowHeight * 0.8) {
				element.classList.add('visible');
			} else {
				element.classList.remove('visible');
			}
		});
		fadeElements.forEach((element) => {
			const elementTop = element.getBoundingClientRect().top;
			if (elementTop < windowHeight * 0.8) {
				element.classList.add('visible');
			} else {
				element.classList.remove('visible');
			}
		});
	};

	window.addEventListener('scroll', handleScroll);
	handleScroll(); // Initial call to handle elements already in view
});


document.getElementById('widgetSelector').addEventListener('change', function () {
	var generalWidget = document.getElementById('generalWidget');
	var detailedWidget = document.getElementById('detailedWidget');

	if (this.value === 'detailed') {
		generalWidget.classList.remove('show');
		detailedWidget.classList.add('show');
	} else {
		generalWidget.classList.add('show');
		detailedWidget.classList.remove('show');
	}
});

document.querySelector('.custom-dropdown').addEventListener('click', function() {
	this.querySelectorAll('.options-container').forEach(option => {
			option.classList.toggle('slideInDown');
	});
});