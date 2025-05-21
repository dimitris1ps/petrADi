$(function () {
    /* -------------------------------------------------------------
       1. Sliders, light‑box, widgets, dropdown  (unchanged)
    ----------------------------------------------------------------*/
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
            arrows: true,
            centerMode: true,
          },
        },
      ],
    });
  
    $('.reviews__texts').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
    });
  
    /* ------- light‑box (unchanged) ------- */
    const $lightbox = $(
      '<div class="lightbox"><img src="" alt="Expanded Image"><span class="lightbox-close">×</span></div>'
    );
    $('body').append($lightbox);
  
    function openLightbox(src, urlParam) {
      $lightbox.find('img').attr('src', src);
      $lightbox.fadeIn(300);
      history.pushState(
        {},
        document.title,
        urlParam ? `?layout=${urlParam}` : location.pathname
      );
    }
  
    $('.gallery__card').on('click', function (e) {
      e.preventDefault();
      const bg = $(this).css('background-image');
      const url = bg.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
      openLightbox(url);
    });
  
    $('.layout-btn').on('click', (e) => {
      e.preventDefault();
      openLightbox('./assets/images/prosopsi.png', 'prosopsi');
    });
  
    $('.lightbox, .lightbox-close').on('click', () => {
      $lightbox.fadeOut(300);
      history.pushState({}, document.title, location.pathname);
    });
    $('.lightbox img').on('click', (e) => e.stopPropagation());
  
    if (new URLSearchParams(location.search).get('layout') === 'prosopsi') {
      openLightbox('./assets/images/prosopsi.png', 'prosopsi');
    }
  
    /* ------- burger & dropdown (unchanged) ------- */
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    });
    navLinks.forEach((link) =>
      link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
      })
    );
  
    document
      .querySelector('.custom-dropdown')
      .addEventListener('click', function () {
        this.querySelector('.options-container').classList.toggle('slideInDown');
      });
  
    /* -------------------------------------------------------------
       2.   SCROLL‑IN ANIMATIONS
            – run only on DESKTOP (≥ 1025 px)
            – phone/tablet: show everything immediately
    ----------------------------------------------------------------*/
    const transitionEls = document.querySelectorAll('.transition-on-scroll');
    const fadeEls = document.querySelectorAll('.fade-on-scroll');
  
    function showAll() {
      transitionEls.forEach((el) => el.classList.add('visible'));
      fadeEls.forEach((el) => el.classList.add('visible'));
    }
  
    if (window.matchMedia('(min-width: 1025px)').matches) {
      const revealOnScroll = () => {
        const winH = window.innerHeight;
        transitionEls.forEach((el) => {
          if (el.getBoundingClientRect().top < winH * 0.8) {
            el.classList.add('visible');
          }
        });
        fadeEls.forEach((el) => {
          if (el.getBoundingClientRect().top < winH * 0.8) {
            el.classList.add('visible');
          }
        });
      };
      window.addEventListener('scroll', revealOnScroll);
      revealOnScroll(); // initial check
    } else {
      showAll(); // phones & tablets – no fancy animation, just visible
    }
  
    /* ------- widget selector (unchanged) ------- */
    $('#widgetSelector').on('change', function () {
      $('#generalWidget').toggleClass('show', this.value === 'general');
      $('#detailedWidget').toggleClass('show', this.value === 'detailed');
    });
  });
  