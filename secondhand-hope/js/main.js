//
//
//
//
//This all was made for parallax scroll of my top image element. I made 'wscroll' which counts the pixels as the scroll goes down. I then used jQuery to make the top nav fade as the page scrolled down by doing . hide and .show once the opacity has hit 0. I also added the parallax and fading of words on the picture as the page scrolls down.
//

$(window).scroll(function(){
  parallax();
  // galleryResize();
});

function parallax(){
  var wScroll = $(window).scrollTop();
  var navDisable = $(".nav-elements").css("opacity")
// console.log(wScroll);
  $('.parallax--bg').css('background-position', 'center '+(wScroll*0.75) + 'px');
  $('#showSynopsis').css('opacity',1-(wScroll*0.002));
  $('.nav-elements').css('opacity',1-(wScroll*0.004));
  if (navDisable==0) {
    $(".nav-element-container").hide();
  }
  if (navDisable>0) {
    $(".nav-element-container").show();
  }
};

// This is the point I started using way points. I used this to slide in and out the show details section on the center of the page.
var waypoint = new Waypoint({
  element: document.getElementById('slide'),
  handler: function(direction) {
    if (direction=== 'down') {
      $('#slide').addClass('show-details-effects-active');
    }
    if (direction=== 'up') {
        $('#slide').removeClass('show-details-effects-active');
    }

  },
  offset: '50%'
});


// This is code to trigger Flickity Carousel. Contains wrap-around.

$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround:true
});

console.log("HI");
