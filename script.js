'use strict'

let shadow = document.querySelector('.shadow');
let rightMenuTop = document.querySelector('.rightMenuTop_img');
let menuClose = document.querySelector('.closeIndex_img');

function open_close_menu() {
    shadow.classList.toggle('hidden');
}

rightMenuTop.addEventListener('click', open_close_menu);
menuClose.addEventListener('click', open_close_menu);