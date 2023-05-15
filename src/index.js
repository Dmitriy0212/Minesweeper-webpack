
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

let menu = document.createElement('div')
menu.className = 'menu';
conteiner.appendChild(menu)

let select = document.createElement('select');
select.className = 'box';
menu.appendChild(select);
select.id = 'select'
let selectSelector = document.querySelector('#select');
for (let value1 in arr) {
    let option = document.createElement('option');
    option.text = value1;
    option.value = value1;
    option.selected = false
    selectSelector.appendChild(option);
}

let boxForNumberClicks = document.createElement('div')
boxForNumberClicks.className = 'box';
menu.appendChild(boxForNumberClicks)

export let numberClicks = document.createElement('p');
numberClicks.textContent = 0;
boxForNumberClicks.appendChild(numberClicks)

let boxForTimer = document.createElement('div')
boxForTimer.className = 'box';
menu.appendChild(boxForTimer)

export let timer = document.createElement('p');
timer.textContent = 0;
boxForTimer.appendChild(timer)

let buttonRest = document.createElement('button')
buttonRest.textContent = String('RESTART')
buttonRest.className = 'box';
buttonRest.addEventListener("click", () => {return mas = start(fild, clickButton,numberOfRows,numberOfBomb) })
menu.appendChild(buttonRest)

let fild = document.createElement('div');
fild.className = 'fild'
conteiner.appendChild(fild)

select.addEventListener('change', function () {
    numberClicks.textContent = 0;
    timer.textContent = 0;
    for (let i = 0; i < fild.children.length;) {
        fild.removeChild(fild.children[i]);
    }
    this.selected = true
    numberOfRows = arr[this.value]
   mas = start(fild, clickButton,numberOfRows,numberOfBomb)
});
export let mas =start(fild, clickButton,numberOfRows,numberOfBomb)

export let timerId;

export function timerGame() {
	timer.textContent = Number(timer.textContent) + Number(1);
	timerId =setTimeout(() => {
		return timerGame()
	}, 1000)
}
