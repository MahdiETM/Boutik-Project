
let banner = document.getElementById("bannerImage");


let images = [
    "images/TopBanner.png",
    "images/TopBanner2.png",
    "images/TopBanner3.png",
];


let currentIndex = 0;


setInterval(function() {

    banner.classList.add("fade-out");

    setTimeout(function() {

        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        banner.src = images[currentIndex];

        banner.classList.remove("fade-out");

    }, 800);

}, 5000);