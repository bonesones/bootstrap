window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 500px)").matches) {
        var a = document.getElementsByClassName("noactive");
        a.classList.toggle("active");
    } else {
        console.log("Screen less than 500px");
    }
});