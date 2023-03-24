import * as functions from "./modules/functions.js";

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