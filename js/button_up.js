let buttonUp = document.querySelector('#myBtn');
buttonUp.addEventListener('click', backToTop);

let yStep = 5;
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    }

    if (document.documentElement.scrollTop < 20) {
        document.getElementById("myBtn").style.display = "none";
    }
}

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -yStep);
        yStep += 1;
        setTimeout(backToTop, 0.1);
    }
    if (window.pageYOffset === 0) {
        yStep = 5;
    }
}
