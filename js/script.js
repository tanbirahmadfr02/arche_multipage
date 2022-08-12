// ======banner part start =====


$('.banner_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// ======banner part end =====

// ====service part start =====

$('.service_slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

// ====service part end =====

$('.venobox').venobox()


// ====project bottom part start =====

$('.slider_main').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  prevArrow: false,
  nextArrow: '<i class="fa-solid fa-angle-right nextarrow"></i>',
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// ====project bottom part end =====


// ====testimonial part start =====

$('.testimonial_slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  arrows: false,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// ====testimonial bottom part end =====

// ====team bottom part start =====

$('.team_bottom_slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  prevArrow: false,
  nextArrow: '<i class="fa-solid fa-angle-right nextarrow"></i>',
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// ====team bottom part end =====

// ========back to top part ======
var back_to_top = document.querySelector(".back_to_top")

window.addEventListener("scroll", function () {

  back_to_top.classList.toggle("bottom_to_top", window.scrollY > 150)
})
// ========back to top part ======

// =========sticky menu part ========
var main_menu = document.getElementById("main_menu");
window.addEventListener("scroll", function () {
  main_menu.classList.toggle("sticky", window.scrollY > 100);
})
// =========sticky menu part ========

// ========active page part start ======

navbar = document.querySelector(".navbar").querySelectorAll("a")
console.log(navbar);

navbar.forEach(element => {
  element.addEventListener("click", function () {
    navbar.forEach(nav => nav.classList.remove("active"))
    this.classList.add("active");
  })
});

// ========active page part end ======