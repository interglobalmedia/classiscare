// Code For The Amimation I added Around the Site
$( 'nav li' ).on({
  click: function() {
    $( this ).toggleClass( "selected" );
  }, mouseenter: function() {
    $( this ).addClass( "inside" );
  }, mouseleave: function() {
    $( this ).removeClass( "inside" );
  }
});

$('.burger-box').on({
  click: function() {
    $(this).toggleClass()
  }
})