function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

let offset = 0;
const sliderLine = document.querySelector('.slider_line');

document.querySelector('.next').addEventListener('click', function(){
    offset = offset + 70;
    if (offset > 170) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.prev').addEventListener('click', function () {
    offset = offset - 70;
    if (offset < 0) {
        offset = 140;
    }
    sliderLine.style.left = -offset + 'px';
});