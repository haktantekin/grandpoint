
var mobileslider;
var swiper;
function mobSlider() {
  if ($(window).width() < 992) {
    $('.mobile-slider').addClass("swiper-container");
    $('.mobile-slider .mobile-item').addClass("swiper-slide");
    $('.mobile-slider .mobile-wrapper').addClass("swiper-wrapper");
    mobileslider = new Swiper('.mobile-slider', {
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      },
      breakpoints: {
        310: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        // when window width is >= 480px
        767: {
          slidesPerView: 2,
          spaceBetween: 30
        },
      }
    });
  }
  else if ($(window).width() > 992) {
    mobileslider = undefined;
    $('.mobile-slider .swiper-wrapper').removeAttr('style');
    $('.mobile-slider .swiper-slide').removeAttr('style');
    $('.mobile-slider').removeClass("swiper-container");
    $('.mobile-slider .mobile-item').removeClass("swiper-slide");
    $('.mobile-slider .mobile-wrapper').removeClass("swiper-wrapper");
  }
}
function sliders() {
  /*default main slider*/

  swiper = new Swiper('.main-slider', {
    cubeEffect: {
      slideShadows: false,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: { crossFade: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  });

  /*default latest inventory slider*/

  swiper = new Swiper('.li-slider', {
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      310: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 30
      },
    }
  });

  /*default news slider*/

  swiper = new Swiper('.news-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      310: {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,

      }
    }
  });
  /*default testimonials slider*/
  swiper = new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      310: {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true,
        },
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
          }
        },
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 30,
      }
    }
  });
}

function headerfixed() {
  if ($(window).width() > 992) {
    var navbarTop = document.querySelector('.fixed-top');
    var headroomTop = new Headroom(navbarTop, {
      offset: navbarTop.offsetHeight,
      tolerance: {
        up: 10,
        down: 0
      },
      onUnpin: function () {
        $('.navbar').find('.show').removeClass('show');
      }
    });
    headroomTop.init();
  }
}
function parallax() {
  if ($(window).width() > 992) {
    var scrolled = $(window).scrollTop();
    $('#main-slider').css('top', -(scrolled * 0.0315) + 'rem');
    $('#main-slider .slider-text').css('opacity', 1 - (scrolled * .00350));
    if (scrolled > 1000) {
      $('#main-slider').css('display', 'none');
    }
    else {
      $('#main-slider').css('display', 'block');
    }
  }
};
function mobileMenu() {
  $(".side-panel").slideReveal({
    trigger: $(".side-panel-trigger"),
    position: "left",
    overlay: true
  });

  $(".side-panel-close").click(function () {
    $(".side-panel-trigger").click();
  });

  $(".mobile-main-menu li, .footer-menu li").each(function () {
    if ($(this).find("ul").length > 0) {
      $(this).append("<div class=\"sub-menu-trigger\"><span class=\"material-icons\">arrow_drop_down</span></div>");
    }
  });

  $('.sub-menu-trigger').click(function () {
    $(this).parent().find("ul").slideToggle();
    $(this).toggleClass('rotate');
  });
}
function readMore() {
  $('.readMore').readmore({ collapsedHeight: 15, speed: 15, moreLink: '<div class="read-more-arrow"><span class=\"material-icons\">arrow_drop_down</span></div>', lessLink: '<div class="read-more-arrow down"><span class="material-icons">arrow_drop_down</span></div>' });
}
function news() {
  /* social share */
  $(".nl-social").on({
    mouseenter: function () {
      $('.nl-social-list', $(this)).stop().fadeIn();
    },
    mouseleave: function () {
      $('.nl-social-list').hide();
    }
  });
  /* social share */
  /* Filter */
  $(".filter-select").click(function () {
    $(".filter-list").slideToggle();
  });
  $(".filter-list li").click(function () {
    $(".filter-list li").removeClass("active");
    $(this).addClass("active");
  });
  /* Filter */
}
function sticky() {
  if ($(window).width() > 992) {
    {
      $('.sidebar').stickySidebar({
        topSpacing: 100,
        bottomSpacing: 60
      });
      $('.scrollPercent').stickySidebar({
        topSpacing: 100,
        bottomSpacing: 60
      });
    }
  }
}
function scrollPercent(){
  var wintop = $(window).scrollTop(), 
  docheight = $(document).height(), 
  winheight = $(window).height();
  var scrollPercent = 0;
  scrollPercent = (wintop/(docheight-winheight))*100;
  scrollPercent = Math.round(scrollPercent)


  
  $(".scrollPercentIn").html("%" + scrollPercent);
}
  $(document).ready(function () {
    mobSlider();
    headerfixed();
    sliders();
    mobileMenu();
    readMore();
    news();
    sticky()
    $(window).scroll(function (e) {
      parallax();
       sticky();
       scrollPercent();
    });
  });
  $(window).resize(function () {
    mobSlider();
    headerfixed();
    parallax();
    sticky();
  });