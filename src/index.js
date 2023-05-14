
import clickButton from "./click-button";
import start from "./start-game";

export let numberOfRows = 8;
export let numberOfBomb = 10;

let arr = {
    'easy': 8,
    'difficult': 10,
    'advanced': 12
};

let body = document.querySelector('body');
let conteiner = document.createElement('div');
conteiner.className = 'conteiner';
body.appendChild(conteiner);

export let numberClicks = document.createElement('p');
numberClicks.textContent = 0;
conteiner.appendChild(numberClicks)

let select = document.createElement('select');
conteiner.appendChild(select);
select.id = 'select'
let selectSelector = document.querySelector('#select');
for (let value1 in arr) {
    let option = document.createElement('option');
    option.text = value1;
    option.value = value1;
    option.selected = true
    selectSelector.appendChild(option);
}
selectSelector.value = '';

let buttonRest = document.createElement('button')
buttonRest.textContent = String('RESTART')
buttonRest.addEventListener("click", () => {return mas = start(fild, clickButton,numberOfRows,numberOfBomb) })
conteiner.appendChild(buttonRest)

let fild = document.createElement('div');
fild.className = 'fild'
conteiner.appendChild(fild)

select.addEventListener('change', function () {
    numberClicks.textContent = 0;
    for (let i = 0; i < fild.children.length;) {
        fild.removeChild(fild.children[i]);
    }
    this.selected = true
    numberOfRows = arr[this.value]
   mas = start(fild, clickButton,numberOfRows,numberOfBomb)
});
export let mas =start(fild, clickButton,numberOfRows,numberOfBomb)
