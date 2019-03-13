/*============= NAVBAR TRANSPARENT TO SOLID =============*/

$(document).ready(function()  {
  $(window).scroll(function() {
    if($(this).scrollTop()  > 300)  {
      $('.navbar').addClass('solid');
    } else {
      $('.navbar').removeClass('solid');
    }
  });
});

/*============= CLOSE MOBILE NAV ON CLICK =============*/

$(document).ready(function()  {
  $(document).click(function  (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
      $(".navbar-toggler").click();
    }
  });
});

/*============= SMOOTH SCROLLING TO LINKS =============*/

$(document).ready(function()  {
    $("a").on('click', function(event)  {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate(  {
          scrollTop: $(hash).offset().top 
        }, 800, function()  {
          window.location.hash = hash;
        });
      } //End if
    });
  });

/*============= BOUNCING DOWN ARROW =============*/

$(document).ready(function()  {
  $(window).scroll(function() {
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 500);
  });
});

/*============= ABOUT PICTURES =============*/

$(document).ready(function(){ 
  $("#team-slider").owlCarousel({ 
        items:3, 
        autoplay:true,
        smartSpeed:700, 
        loop:true, 
        autoplayHoverPause:true, 
        responsive : {
            // min-width: 0px
            0 : {
                items: 1 
            },
            // min-width: 579px
            576 : {
                items: 2 
            },
            // min-width: 768px
            768 : {
                items: 3 
            }
        }
  }
  );
});

/*========== TOP SCROLL BUTTON ==========*/

$(document).ready(function() {
  $(window).scroll(function() { 
    if ($(this).scrollTop() > 500) { 
      $('.top-scroll').fadeIn(); 
    } else { 
      $('.top-scroll').fadeOut(); 
    }
  });
});

