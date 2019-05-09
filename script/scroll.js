// Changes the background color of the nav using inView.js plugin
inView.offset(500);
var $nav = $('.nav');

// Changes the styling of the active link/section
function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.length) {
          if (inView.is(document.querySelector(currLink.attr("href")))) {
            if (currLink.attr("href") != "#intro") {
              $('.nav ul li a').attr("id", "");
              $(currLink).attr("id", "highlight");
              $(currLink).css("transition-duration", "0.3s");
            }
          }
        }
    });
}

inView('.white-section').on('enter', function() {
  $nav.css('opacity', '1');
  $nav.css('transition-duration', '0.5s');
  $nav.css('background-color', 'black');
  $nav.css('color', 'white');
});

inView('.black-section').on('enter', function() {
  $nav.css('opacity', '1');
  $nav.css('background-color', 'white');
  $nav.css('color', 'black');
});

inView('#intro').on('enter', function() {
  $nav.css('opacity', '0');
});

inView('#contact').on('enter', function() {
  $nav.css('opacity', '0');
});
