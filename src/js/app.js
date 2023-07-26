console.log("Работает");

import * as functions from "./modules/functions.js";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";

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


Fancybox.bind("[data-fancybox]", {});

let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

let arrows = document.querySelectorAll('.menu__arrow');

if (isMobile.any()) {
  document.body.classList.add('_touch');

  let triggerSubmenu = document.querySelector('.menu__item--mobile');

  triggerSubmenu.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('click');
    document.querySelector('.submenu-mobile').classList.add('active');
    document.querySelector('.header__menu').classList.add('left');
  })

  let buttonBack = document.querySelectorAll('.back-menu');
  // Кнопка назад
  buttonBack.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      let parentSubmenu = e.target.parentElement;
      parentSubmenu.classList.remove('active');
      document.querySelector('.header__menu').classList.remove('left');
      document.querySelector('.submenu-mobile').classList.remove('left');
    })
  })

  let buttonSubmenuTwo = document.querySelector('.arrow-submenu');
  // открытие последнего меню
  buttonSubmenuTwo.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.sub-submenu-mobile').classList.add('active');
    document.querySelector('.submenu-mobile').classList.add('left');
    console.log('click-2');
  })

} else {
  document.body.classList.add('_pc');
}

let burger = document.querySelector('.header__burger');

if (burger) {
  burger.addEventListener('click', function (e) {
    document.querySelector('.menu').classList.add('menu__active');
    document.documentElement.classList.add('_lock');
  });
}

let close = document.querySelector('.close__menu');
if (close) {
  close.addEventListener('click', function (e) {
    document.querySelector('.menu').classList.remove('menu__active');
    document.documentElement.classList.remove('_lock');
  })
}



// Плавная прокрутка к элементу

const anchorLink = document.querySelectorAll('[data-goto]');

if (anchorLink.length > 0) {
  anchorLink.forEach(link => {
    link.addEventListener('click', onMenuLinkClick);
  })

  function onMenuLinkClick(e) {
    console.log(e.target);
    let menuLink = e.target;

    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      })

      e.preventDefault();
    }
  }
}

// Функция расчета ширины скролла

function getWidthScroll() {
  var documentWidth = parseInt(document.documentElement.clientWidth);
  var windowsWidth = parseInt(window.innerWidth);
  var scrollbarWidth = windowsWidth - documentWidth;
  document.querySelector('body').style.paddingRight = scrollbarWidth + 'px';
}

// Всплывающие окна
const popupBtn = document.querySelectorAll('[data-popup]');

if (popupBtn.length > 0) {
  popupBtn.forEach(btn => {
    btn.addEventListener('click', openPopup);
  })

  function openPopup(e) {
    getWidthScroll();
    let popupBtn = e.target;
    let popup = document.querySelector(popupBtn.dataset.popup);
    popup.classList.add('popup__show');
    document.documentElement.classList.add('_lock');
  }
}

const closeBtn = document.querySelector('.popup__close');

if (closeBtn) {
  closeBtn.addEventListener('click', closePopup);

  function closePopup(e) {
    let closeBtn = e.target.closest('.popup');
    closeBtn.classList.remove('popup__show');
    document.documentElement.classList.remove('_lock');
  }
}

let popupBody = document.querySelector('.popup');

if (popupBody) {
  popupBody.addEventListener('click', function (e) {
    let event = e.target.closest('.popup__content');
    if (!event) {
      e.target.closest('.popup').classList.remove('popup__show');
      document.documentElement.classList.remove('_lock');
    }
  })

}

window.addEventListener('keydown', function (e) {
  if (e.keyCode == 27) {
    document.querySelector('.popup').classList.remove('popup__show');
    document.documentElement.classList.remove('_lock');
  }
})


// маска
document.addEventListener("DOMContentLoaded", function () {
  var phoneInputs = document.querySelectorAll('input[data-tel-input]');

  var getInputNumbersValue = function (input) {
    // Return stripped input value — just numbers
    return input.value.replace(/\D/g, '');
  }

  var onPhonePaste = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    var pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      var pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
        // formatting will be in onPhoneInput handler
        input.value = inputNumbersValue;
        return;
      }
    }
  }

  var onPhoneInput = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      selectionStart = input.selectionStart,
      formattedInputValue = "";

    if (!inputNumbersValue) {
      return input.value = "";
    }

    if (input.value.length != selectionStart) {
      // Editing in the middle of input, not last symbol
      if (e.data && /\D/g.test(e.data)) {
        // Attempt to input non-numeric symbol
        input.value = inputNumbersValue;
      }
      return;
    }

    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
      var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
      formattedInputValue = input.value = firstSymbols + " ";
      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  }
  var onPhoneKeyDown = function (e) {
    // Clear input after remove last symbol
    var inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode == 8 && inputValue.length == 1) {
      e.target.value = "";
    }
  }
  for (var phoneInput of phoneInputs) {
    phoneInput.addEventListener('keydown', onPhoneKeyDown);
    phoneInput.addEventListener('input', onPhoneInput, false);
    phoneInput.addEventListener('paste', onPhonePaste, false);
  }
});
