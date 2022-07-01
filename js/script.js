//AOS
AOS.init();

//Tanggal Footer
var d = new Date();
document.getElementById("tanggal").innerHTML = d.getFullYear();

//Slider Projects
  $('.slider-projects').slick({
      dots: true,
      arrow: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      prevArrow:"<img class='slick-arrow slick-prev' src='images/left.png'>",
      nextArrow:"<img class='slick-arrow slick-next' src='images/right.png'>",
      infinite: false,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: true,
          centerMode: true,
          slidesToShow: 1,
          autoplay: false,
          autoplaySpeed: 5000,
        }
      },
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          autoplay: false,
          autoplaySpeed: 5000,
        }
      }
    ]
  });

//Album
$(document).ready(function(){
$('.venobox').venobox({
  numeratio  : true,                          
  infinigall : false,
  share      : ['facebook', 'twitter', 'linkedin', 'pinterest', 'download'],
  spinner    : 'wave',
}); 
});

//Scroll Top
$(function(){
  $('.to_top').hide().on('click', function(){
      $('body,html').animate({scrollTop : 0}, 800);
  });
  $(window).on('scroll', function(){
      if($(this).scrollTop() > 50){
          $('.to_top').fadeIn().show();
      }else{
          $('.to_top').fadeOut();
      }
  });
});

//Scroll Header, Navbar, dll
ScrollTrigger.create({
  start: 'top -850',
  end: 99999,
  toggleClass: {className: 'cd-header--scrolled', targets: '.cd-header'}
});
ScrollTrigger.create({
  start: 'top -80',
  end: 99999,
  toggleClass: {className: 'hamburger', targets: '.navbar-dark .navbar-toggler span'}
});