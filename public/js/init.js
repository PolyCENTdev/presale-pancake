jQuery(document).ready(function($) {
  var time = 380;
  setTimeout(function() {
    // $("h1.responsive-headline").fitText(1, { minFontSize: "40px", maxFontSize: "90px" });

    $(".smoothscroll").on("click", function(e) {
      e.preventDefault();
      var target = this.hash,
        $target = $(target);

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top
          },
          800,
          "swing",
          function() {
            window.location.hash = target;
          }
        );
    });

    var sections = $("section");
    var navigation_links = $("#nav-wrap a");

    sections.waypoint({
      handler: function(event, direction) {
        var active_section;

        active_section = $(this);
        if (direction === "up") active_section = active_section.prev();

        var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

        navigation_links.parent().removeClass("current");
        active_link.parent().addClass("current");
      },
      offset: "35%"
    });

   
    $(window).on("scroll", function() {
      var h = $("header").height();
      var y = $(window).scrollTop();
      var nav = $("#nav-wrap");
      
      var logoHeader = $(".logo-header");
      var textoHeader = $(".title-logo");
      var connect = $(".stylednav");

      if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
        nav.fadeOut("fast");
      } else {
        if (y < h * 0.2) {
          nav.removeClass("opaque").fadeIn("fast");
          logoHeader.removeClass("opaquelogo").fadeIn("fast");
          textoHeader.removeClass("opaquetexto").fadeIn("fast");
          connect.removeClass("topnav").fadeIn("fast");
        } else {
          nav.addClass("opaque").fadeIn("fast");
          logoHeader.addClass("opaquelogo").fadeIn("fast");
          textoHeader.addClass("opaquetexto").fadeIn("fast");
          connect.addClass("topnav").fadeIn("fast");
        }
      }
    });
    
    var baseUrl = "https://widgets.cryptocompare.com/";
    var scripts = document.getElementsByTagName("script");
    var embedder = scripts[ scripts.length - 1 ];
    var cccTheme = {"General":{"enableMarquee":true}};
    (function (){
    var appName = encodeURIComponent(window.location.hostname);
    if(appName==""){appName="local";}
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    var theUrl = baseUrl+'serve/v3/coin/header?fsyms=BTC,ETH,MATIC,XRP,LTC,DOT,BNB,ADA&tsyms=USD';
    s.src = theUrl + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;
    embedder.parentNode.appendChild(s);
    })();
    particlesJS("particles-js", 
    {"particles":{"number":{"value":241,"density":{"enable":true,"value_area":8418}},
    "color":{"value":"#ffffff"},
    "shape":{"type":"polygon","stroke":{"width":0,"color":"#000000"},
    "polygon":{"nb_sides":9},"image":{"src":"img/github.svg","width":100,"height":100}},
    "opacity":{"value":0.5,"random":false,
    "anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
    "size":{"value":3,"random":true,
    "anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
    "line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
    "move":{"enable":true,"speed":6.4,"direction":"none","random":false,"straight":false,
    "out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
    "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},
    "onclick":{"enable":true,"mode":"push"},"resize":true},
    "modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
    "bubble":{"distance":925.7680220235335,"size":40,"duration":2,"opacity":8,"speed":3},
    "repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},
    "remove":{"particles_nb":2}}},"retina_detect":true});
    var count_particles, stats, update; 
  }, time);
  setTimeout(function(){
    new scrollIfNeeded(embedableCoin);
    var clock = $('.clock').FlipClock({
      clockFace: 'DailyCounter',
      autoStart: false,
      callbacks: {
        stop: function() {
          $('.message').html('The clock has stopped!')
        }
      }
    });
    // set time
    clock.setTime(220880);

    // countdown mode
    clock.setCountdown(true);

    // start the clock
    clock.start();
    
    $(document).on('keyup', '#matictxt', function(){
      var result = parseFloat($(this).val()) * relationPenMatic;
      $('#pentxt').val(result);

    });
    $(document).on('keyup', '#pentxt', function(){
      var result = parseFloat($(this).val()) / relationPenMatic;
      $('#matictxt').val(result);

    });
  }, 3000);
    
});