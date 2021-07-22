'use strict'
//Меняю двойные кавычки на одинарные
const $buttonEl = document.querySelector('.buttonSubscribe');
const $nameEl = document.querySelector('.nameInput');
const $phoneEl = document.querySelector('.namePhone');
const emailEl = document.querySelector('.nameEmail');


let myText =
    `
The teacher said, 'I'll be free tomorrow and can meet with you'.
'Tell me about your education' the manager said.
Sean said, 'Don't smoke, Lisa!'.
`

$buttonEl.addEventListener('click', function() {
    let regExp = / '/g;
    myText = myText.replace(regExp, ' "');
    regExp = /'\./g;
    myText = myText.replace(regExp, '".');
    regExp = /' /g;
    myText = myText.replace(regExp, '" ');
    regExp = /\s'/g;
    myText = myText.replace(regExp, '\n"');
    console.log(myText);
    let nameStr = $nameEl.value;

    let regExpName = /.*\W.*/g;
    console.log(!regExpName.test(nameStr));
    if (regExpName.test(nameStr)) {
        console.log($nameEl);
        $nameEl.style.border = "solid red";
        let a;
        a++;
    }
});

$nameEl.addEventListener('input', function() {
    if ($nameEl.value === "") {
        $nameEl.style.border = "";
        console.log("HI");
    }
});