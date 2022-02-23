$(document).on('ready', function () {
    $('.slider').slick({
        dots: true,
        nextArrow: $(".fas.fa-chevron-right"),
        prevArrow: $(".fas.fa-chevron-left"),
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


$(document).ready(function () {
    $('.accordion-tabs').children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
    $('.accordion-tabs').on('click', 'li > a', function (event) {
        if (!$(this).hasClass('is-active')) {
            event.preventDefault();
            $('.accordion-tabs .is-open').removeClass('is-open').hide();
            $(this).next().toggleClass('is-open').toggle();
            $('.accordion-tabs').find('.is-active').removeClass('is-active');
            $(this).addClass('is-active');
        } else {
            event.preventDefault();
        }
    });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

var wordStates = document.querySelectorAll(".list-of-states li");
var svgStates = document.querySelectorAll("#states > *");

function removeAllOn() {
    wordStates.forEach(function(el) {
        el.classList.remove("on");
    });
    svgStates.forEach(function(el) {
        el.classList.remove("on");
    });
}

function addOnFromList(el) {
    var stateCode = el.getAttribute("data-state");
    var svgState = document.querySelector("#" + stateCode);
    el.classList.add("on");
    svgState.classList.add("on");
}

function addOnFromState(el) {
    var stateId = el.getAttribute("id");
    var wordState = document.querySelector("[data-state='" + stateId + "']");
    el.classList.add("on");
    wordState.classList.add("on");
}

wordStates.forEach(function(el) {
    el.addEventListener("mouseenter", function() {
        addOnFromList(el);
    });
    el.addEventListener("mouseleave", function() {
        removeAllOn();
    });

    el.addEventListener("touchstart", function() {
        removeAllOn();
        addOnFromList(el);
    });
});

svgStates.forEach(function(el) {
    el.addEventListener("mouseenter", function() {
        addOnFromState(el);
    });
    el.addEventListener("mouseleave", function() {
        removeAllOn();
    });

    el.addEventListener("touchstart", function() {
        removeAllOn();
        addOnFromState(el);
    });
});


