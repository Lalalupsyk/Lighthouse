// const images = document.querySelectorAll('.slider img');
const inner_sliders = document.querySelectorAll('.slider');

for (let i = 0; i < inner_sliders.length; i++) {
    init_slider(i);
}

function init_slider(counter) {
    let slider = inner_sliders[counter];
    let prevBtn = document.getElementsByClassName('leftBtn')[counter];
    let nextBtn = document.getElementsByClassName('rightBtn')[counter];
    const images = slider.querySelectorAll('.slider img');
    console.log(images);

    let current = 1;
    const imgSize = images[0].clientWidth;
    slider.style.transform = `translateX(${-imgSize}px)`;
    denyOpacity();

    prevBtn.addEventListener('click', () => {
        if (current <= 0) return;
        slider.style.transition = '200ms ease-in-out transform';
        current--;
        slider.style.transform = `translateX(${-imgSize * current}px)`;
        denyOpacity();
        addOpacityToRightImage();
    });
    nextBtn.addEventListener('click', () => {
        if (current >= images.length - 1) return;
        slider.style.transition = '200ms ease-in-out transform';
        current++;
        slider.style.transform = `translateX(${-imgSize * current}px)`;
        denyOpacity();
        addOpacityToLeftImage();
    });

    slider.addEventListener('transitionend', () => {
        if (images[current].classList.contains('first_img')) {
            slider.style.transition = 'none';
            current = images.length - 2;
            slider.style.transform = `translateX(${-imgSize * current}px)`;
        }
        if (images[current].classList.contains('last_img')) {
            slider.style.transition = 'none';
            current = images.length - current;
            slider.style.transform = `translateX(${-imgSize * current}px)`;
        }
    });

    function denyOpacity() {

        if (images[current].classList.contains('first_img')) {
            images[images.length - 2].style.opacity = '100%';
        } else if (images[current].classList.contains('last_img')) {
            images[images.length - current].style.opacity = '100%';
        } else {
            images[current].style.opacity = '100%';
        }
    }

    function addOpacityToLeftImage() {
        if (images[current - 1].classList.contains('first_img')) {
            images[current - 2].style.opacity = '35%';
        } else {
            images[current - 1].style.opacity = '35%';
        }
    }

    function addOpacityToRightImage() {
        images[current + 1].style.opacity = '35%';
    }
}


