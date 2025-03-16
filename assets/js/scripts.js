$(document).ready(function () {
    // Existing gallery slider code
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

    // Existing reviews slider code
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

    // Lightbox setup
    const $lightbox = $('<div class="lightbox"><img src="" alt="Expanded Image"><span class="lightbox-close">×</span></div>');
    $('body').append($lightbox);

    // Function to open lightbox with a specific image and update URL
    function openLightbox(imageSrc, urlParam) {
        const $img = $lightbox.find('img');
        $img.attr('src', imageSrc);
        $lightbox.addClass('fadeIn').fadeIn(300);
        // Update URL without reloading the page
        window.history.pushState({}, document.title, urlParam ? `?layout=${urlParam}` : window.location.pathname);
    }

    // Existing gallery card click handler
    $('.gallery__card').on('click', function (e) {
        e.preventDefault();
        const bgImage = $(this).css('background-image');
        const imageUrl = bgImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
        openLightbox(imageUrl, null); // No URL param for gallery images
    });

    // Layout button click handler with URL update
    $('.layout-btn').on('click', function (e) {
        e.preventDefault();
        openLightbox('./assets/images/prosopsi.png', 'prosopsi');
    });

    // Lightbox close handler with URL reset
    $('.lightbox-close, .lightbox').on('click', function () {
        $lightbox.removeClass('fadeIn').fadeOut(300);
        // Reset URL to original page without reloading
        window.history.pushState({}, document.title, window.location.pathname);
    });

    $('.lightbox img').on('click', function (e) {
        e.stopPropagation();
    });

    // Check URL on page load and open lightbox if ?layout=prosopsi is present
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('layout') === 'prosopsi') {
        openLightbox('./assets/images/prosopsi.png', 'prosopsi');
    }

    // Existing burger menu code
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });

    // Existing scroll animation code
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
        handleScroll();
    });

    // Existing widget selector code
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

    // Existing dropdown code
    document.querySelector('.custom-dropdown').addEventListener('click', function () {
        this.querySelectorAll('.options-container').forEach(option => {
            option.classList.toggle('slideInDown');
        });
    });
});