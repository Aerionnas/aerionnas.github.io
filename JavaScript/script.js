$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    dots: false,
    nav: false,
    autoHeight: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1400: {
            items: 4
        }
    }
})



// this allows the page to load fully before showing the content on the projects page.
var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
})

