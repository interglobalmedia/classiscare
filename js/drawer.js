// Call The Drawer

$(document).ready(function() {
  $(".drawer").drawer();
});

// API Methods

// Option
// I had trouble following instructions here. But what I finally figured out was if I wanted to add an option, 
// all I had to do was to call the option here with the .drawer() method. I didn't need an api method because
// I am not linking to social media like Blevista does on their site. All the other unncessary code I put in
// here previously was blocking the X from working. If I have time, I will play around with the other options
// to see what they do. Maybe we'll do it as a group!
$('.drawer').drawer({
  apiToggleClass: "drawer-toggle"
  mastaClass: "drawer-main",
  upperClass: "drawer-overlay-upper",
  openClass:  "drawer-open",
  closeClass: "drawer-close",
  responsiveClass: "drawer-responsive"
});