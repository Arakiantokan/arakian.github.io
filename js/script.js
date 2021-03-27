$(document).ready(function () {
    var bottom = $("header").outerHeight();
    var header = $("header").offset().top + bottom;
    $(window).scroll(function () {
        // header fixed only when window width greater than 991px
        if ($(window).width() > 991) {
            if ($(window).scrollTop() >= header) {
                $("header").addClass("sticky")
            } else {
                $("header").removeClass("sticky")
            }
        }
    })

    // navbar active link

    $(".navbar ul li a").click(function () {
        $(".navbar ul li a").removeClass("active")
        $(this).addClass("active");
    })

    $(".ham-burger").click(function () {
        $(this).toggleClass("active")
        $(".navbar").toggleClass("open");
    })

})


// parallax
// 1. parallax image header
function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function () {
    parallax(".foto", window.scrollY, 0.6);
});



// clock
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    // mn.style.transform = `rotateZ(${mm+(ss/60)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})