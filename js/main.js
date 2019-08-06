var swiper = new Swiper('.sw-introduce', {
  pagination: {
    el: '.pagi-introduce',
    clickable:true,
  },
});
var swiper = new Swiper('.sw-project', {
  pagination: {
    el: '.pagi-project',
    clickable:true,
  },
});

var swiper = new Swiper('.sw-deployed-2', {
  slidesPerView: 5,
  freeMode: true,
  navigation: {
    nextEl: '.next-deployed',
    prevEl: '.prev-deployed',
  },
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 1,
    },
    // when window width is <= 640px
    640: {
      slidesPerView: 2,
    }
  }
});

var swiper = new Swiper('.sw-deployed-1', {
  slidesPerView: 5,
  freeMode: true,
  navigation: {
    nextEl: '.next-deployed-lg',
    prevEl: '.prev-deployed-lg',
  },
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      freeMode: false,
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 1,
      freeMode: false,
    },
    // when window width is <= 640px
    640: {
      slidesPerView: 2,
      freeMode: false,
    }
  }
});

var swiper = new Swiper('.sw-list-brands', {
  slidesPerView: 3,
  slidesPerColumn: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      slidesPerColumn: 0,
      spaceBetween: 0,
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 1,
      slidesPerColumn: 0,
      spaceBetween: 0,
    },
    // when window width is <= 640px
    640: {
      slidesPerView: 2,
      slidesPerColumn: 1,
    }
  }
});

var swiper = new Swiper('.sw-gallery', {
  slidesPerView: 3,
  freeMode:true,
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      freeMode:false,
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 1,
      freeMode:false,
    },
    // when window width is <= 640px
    640: {
      slidesPerView: 2,
      freeMode:false,
    }
  }
});


$(document).ready(function(){
  // is-fixed-menu
$(function(){
  var isFixed = $('header').offset().top;
  $(window).on('scroll',function(){
    if($(window).scrollTop() > isFixed){
      $('header').addClass('is-fixed');
    }
    else{
      $('header').removeClass('is-fixed');
    }
  })
})

// scroll top solutions
$(function () {
  $('.list-advantage .item-advan a').click(function () {
      if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
      ) {
         var scrollTop = 0;
          var target = $(this.hash);
          scrollTop = target.offset().top - $('header').outerHeight();
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html,body').animate(
                  {
                      scrollTop: scrollTop ,
                  },
                  1000
              );
              return false;
          }
      }
  });
});

//scroll services
$(function () {
  $('.list-services .item-service a').click(function () {
      if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
      ) {
        var scrTop = 0;
          var target = $(this.hash);
          var scrTop = target.offset().top - $('header').outerHeight();
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html,body').animate(
                  {
                      scrollTop: scrTop ,
                  },
                  1000
              );
              return false;
          }
      }
  });
});

//click active icon_toggle menu
$('.icon_toggle').click(function(){
  $(this).toggleClass('on');
  $('.nav-menu-mobile').slideToggle(500);
});

})