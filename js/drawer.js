// Call The Drawer

$(document).ready(function() {
  $(".drawer").drawer();
});

// API Methods

// Option
$(".drawer").drawer({
  apiToggleClass: "drawer-toggle"
});

// Open
$('.drawer').on("click", function() {
  $('.drawer').drawer('open');
});

// close
$('.drawer').on(function() {
  $('.drawer').drawer('close');
});

// toggle
$('.drawer-toggle').on(function() {
  $('.drawer').drawer('toggle');
});

// destroy
$('.drawer').on(function() {
  $('.drawer').drawer('destroy');
});

// Events

// Opened
$('#drawer').on('drawer.opened');

// Closed
$('#drawer').on('drawer.closed');