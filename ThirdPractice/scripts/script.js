'use strict'
document.getElementById('main-action').onclick = function () {
    document.getElementById('cars').scrollIntoView({behavior: 'smooth'});
}
let buttons = document.getElementsByClassName('car-button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById('price').scrollIntoView({behavior: 'smooth'});
    }
}

document.getElementById('price-action').onclick = function () {
    if (document.getElementById('name').value === "") {
        alert('Введите имя!');
    } else if (document.getElementById('phone').value === "" || document.getElementById('phone').value.length < 6) {
        alert('Введите телефон!');
    } else if (document.getElementById('car').value === "") {
        alert('Введите название автомобиля!')
    } else {
        let i = document.getElementById('car').value;
        alert(`Мы сообщим вам о цене на ${i}`);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
    })
});