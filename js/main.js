//
//
//
//
//This all was made for parallax scroll of my top image element. I made 'wscroll' which counts the pixels as the scroll goes down. I then used jQuery to make the top nav fade as the page scrolled down by doing . hide and .show once the opacity has hit 0. I also added the parallax and fading of words on the picture as the page scrolls down.
//


var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy"
});

// // This is the point I started using way points. I used this to slide in and out the show details section on the center of the page.

var waypoint = new Waypoint({
  element: document.getElementById('galleryContainer'),
  handler: function(direction) {
    if (direction=== 'down') {
      $('#mainLogo').addClass('logo-fade-out-active');
    }
    if (direction=== 'up') {
        $('#mainLogo').removeClass('logo-fade-out-active');
    }

  },
  offset: '50%'
});

var waypoint = new Waypoint({
  element: document.getElementById('fadeInLD'),
  handler: function(direction) {
    if (direction=== 'down') {
      $('#fadeInLD').addClass('gallery-effect-active');
    }
    if (direction=== 'up') {
        $('#fadeInLD').removeClass('gallery-effect-active');
    }

  },
  offset: '60%'
});

var waypoint = new Waypoint({
  element: document.getElementById('fadeInALD'),
  handler: function(direction) {
    if (direction=== 'down') {
      $('#fadeInALD').addClass('gallery-effect-active');
    }
    if (direction=== 'up') {
        $('#fadeInALD').removeClass('gallery-effect-active');
    }

  },
  offset: '60%'
});

// function galleryResize(){
//   var wScroll = $(window).scrollTop();
//   if (wScroll>=1151) {
//     $(".gallery-container").css("height", 97-(wScroll*0.5)+"vh");
//   };
// };



$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround:true,
  autoPlay:true,
  autoPlay: 7000,
  draggable: false
});

console.log("HI");
