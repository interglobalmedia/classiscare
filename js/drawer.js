
// attach our plug-in to the toggle button when the document is ready

$(document).ready(function(){
    $('.slide-trigger').collapsable();
});

// Call The Drawer

$(document).ready(function() {
  $(".drawer").drawer();
});

// API Methods

// Option
$(".drawer").drawer({
  apiToggleClass: "element"
});

// Open
$('.element').on(function)() {
  $('.drawer').drawer('open');
});

// close
$('.element').on(function)() {
  $('.drawer').drawer('close');
});

// toggle
$('.element').on(function)() {
  $('.drawer').drawer('toggle');
});

// destroy
$('.element').on(function)() {
  $('.drawer').drawer('destroy');
});

// Events

// Opened
$('#element').on('drawer.opened');

// Closed
$('#element').on('drawer.closed');

// Configuring the iScroll

var drawerScroll = new IScroll("."+options.mastaClass, {
  mouseWheel:true,
  preventDefault: false
});

// Dropdown seletor

var nav = '.drawer-nav';

// Dropdown hover

$('.drawer-dropdown-hover').hover(function(){ 
  $('[data-toggle="dropdown"]', this).trigger('click'); 
});



  

