function changeBg(){
    const images = [
        'url("image/7.jpg")',
        'url("image/3.jpg")',
        'url("image/6.jpg")',
        'url("image/2.jpg")',
    ]

    const home = document.getElementById("home")
    const bg = images[Math.floor(Math.random()*images.length)];
    home.style.background = bg;
}

setInterval(changeBg, 1000)


document.addEventListener("DOMContentLoaded", function() {
    var message = document.getElementById("message");

    function isInViewport(element) {
        var bounding = element.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function showOnScroll() {
        if (isInViewport(message)) {
            message.style.opacity = "1";
            message.style.transform = "translateY(0)";
            window.removeEventListener("scroll", showOnScroll);
        }
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll(); // Check on initial load
});

