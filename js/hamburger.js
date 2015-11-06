// Original Hamburger I created
/*$('.menu-btn').click(function () {
    $('.responsive-menu').toggleClass('expand');
    $('.menu-btn').addClass('btn-none');
    document.querySelector( ".menu-btn" ).addEventListener( "click", function() {
    this.classList.toggle( "selected" );
  });
});

  $('.close-btn').click(function () {
      $('.responsive-menu').removeClass('expand');
      $('.menu-btn').removeClass('btn-none');
});

//$('.menu-btn').click(function () {
//    $('.responsive-menu').toggleClass('expand');
//});*/

$(function() {
$('.burger-box').click(function(e) {
  $('.responsive-menu').toggleClass('expand');
  $('responsive-menu').toggleClass('collapse');
});
});
