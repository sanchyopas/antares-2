console.log("Работает");

import * as functions from "./modules/functions.js";

import './libs/slider.js'

functions.isWebp();

const spollers_item = document.querySelectorAll(".spollers__item");

spollers_item.forEach(function (item) {
    item.addEventListener("click", openSpollers);
});

function openSpollers() {
    if (!this.classList.contains('_init')) {
        this.classList.add('_init');
    } else {
        this.classList.remove('_init');
    }
}

AOS.init({
    duration: 800,
    offset: 0,
    // easing: 'ease-in-quad'
});

let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');

}


let itemMenuList = document.querySelectorAll('.menu-bottom__item');

if (itemMenuList.length > 0) {
    itemMenuList.forEach(item => {

        let child = item.querySelector('.submenu');

        if (child) {
            item.innerHTML += `
            <span class="menu-bottom__arrow" style="background-image: url(../img/icons/arrow-down.svg);"></span>
            `;
        }


    })
}