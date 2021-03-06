(function ($) {
    "use strict";

    $(window).on("load", function () {
        $("#preloader").delay(1000).fadeOut();
    });

    $("body").scrollspy({ target: "#nav", offset: $(window).height() / 2 });
    $("#nav .main-nav a[href^='#']").on("click", function (e) {
        e.preventDefault();
        var hash = this.hash;
        $("html, body").animate({ scrollTop: $(this.hash).offset().top }, 600);
    });

    $("#back-to-top").on("click", function () {
        $("body,html").animate({ scrollTop: 0 }, 600);
    });

    $("#nav .nav-collapse").on("click", function () {
        $("#nav").toggleClass("open");
    });

    $(".has-dropdown a").on("click", function () {
        $(this).parent().toggleClass("open-drop");
    });

    $(window).on("scroll", function () {
        var wScroll = $(this).scrollTop();
        wScroll > 1 ? $("#nav").addClass("fixed-nav") : $("#nav").removeClass("fixed-nav");
        wScroll > 700 ? $("#back-to-top").fadeIn() : $("#back-to-top").fadeOut();
    });

    $(window).scroll(function() {
   var hT = $('.countersec').offset().top,
       hH = $('.countersec').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       const counters = document.querySelectorAll(".counter");

            counters.forEach((counter) => {

                const updateCounter = () => {
                    const target = +counter.getAttribute("data-target");
                    const count = +counter.innerText;

                    if (count < target) {
                        counter.innerText = count + 0.25;
                        setTimeout(updateCounter, 10);
                    } else counter.innerText = target;

                };

                updateCounter();

            });
   }
});

    $(".work").magnificPopup({ delegate: ".lightbox", type: "image" });
    $("#about-slider").owlCarousel({ items: 1, loop: true, margin: 15, nav: true, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], dots: true, autoplay: true, animateOut: "fadeOut" });
    $("#testimonial-slider").owlCarousel({ loop: true, margin: 15, dots: true, nav: false, autoplay: true, responsive: { 0: { items: 1 }, 992: { items: 2 } } });
})(jQuery);
