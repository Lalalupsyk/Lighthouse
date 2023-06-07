function anim(duration) {
    let temp;
    return function(sel) {
        cancelAnimationFrame(temp);
        let start = performance.now();
        let from = window.pageYOffset || document.documentElement.scrollTop,
            to = document.querySelector(sel).getBoundingClientRect().top;
        requestAnimationFrame(function step(timestamp) {
            let progress = (timestamp - start) / duration;
            1 <= progress && (progress = 1);
            window.scrollTo(0, from + to * progress | 0);
            1 > progress && (temp = requestAnimationFrame(step))
        })
    }
};
let scrollMenu = anim(700);


const anchor = document.querySelector('#arrow_link');

anchor.addEventListener('click', function (e) {
    e.preventDefault();
    scrollMenu('#page__description');
});
