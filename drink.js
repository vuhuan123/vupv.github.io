
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const drink = $('.drinkList__drink-water')



drink.onclick = function() {
    $('.List-1').classList.add('active');
    $('.List-2').classList.remove('active')
    drink.classList.add('active')
    drinkAncol.classList.remove('active')



}

const drinkAncol = $('.drinkList__drink-beer');

drinkAncol.onclick = function () {

    $('.List-2').classList.add('active')

    $('.List-1').classList.remove('active');
    drinkAncol.classList.add('active')
    drink.classList.remove('active')

}

