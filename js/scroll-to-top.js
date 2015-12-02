// Back to top scroll button

$(document).ready(function) {
  // Check to see if the window is at the top and if not then display the button

  $(window).scroll(function) {
    if ($(window).scrollToTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

// Click event to scroll to top
$('.scrollToTop').click(function() {
  $('html, body').animate({scrollToTop: 0}, 600);
  return false;
  });

});

