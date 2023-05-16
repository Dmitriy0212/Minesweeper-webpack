import toDoList2 from "./select-save-from";
import clickButton from "./click-button";
import start from "./start-game";
import localStorageSave from "./local-storage-save";
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

let spunLevel = document.createElement('spun');
spunLevel.textContent='Level'
spunLevel.className = 'box';
menu.appendChild(spunLevel)

let select = document.createElement('select');
select.className = 'select';
spunLevel.appendChild(select);
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
buttonRest.addEventListener("click", () => { clearInterval(timerId); return mas = start(fild, clickButton, numberOfRows, numberOfBomb) })
menu.appendChild(buttonRest)

let buttonSave = document.createElement('button')
buttonSave.textContent = String('SAVE')
buttonSave.className = 'box';
buttonSave.addEventListener("click", localStorageSave)
menu.appendChild(buttonSave)

let spunSave = document.createElement('spun');
spunSave.textContent='Save'
spunSave.className = 'box';
menu.appendChild(spunSave)

export let selectSave = document.createElement('select');
selectSave.className = 'select';
spunSave.appendChild(selectSave);
selectSave.id = 'selectsave'
export let selecttSaveSelector = document.querySelector('#selectsave');

export let arr2 = []

let objJson2 = JSON.stringify(localStorage);
let objJson3 = JSON.parse(objJson2);

for (let key in objJson3) {
    if (String(key).includes('Save ') !== true) {
        continue
    }
    else if (String(key).includes('Save ') == true) {
        arr2.push(JSON.parse(objJson3[key]))
    }
}

for (let h = 0; h < selecttSaveSelector.children.length;) {
    selecttSaveSelector.removeChild(selecttSaveSelector.children[h]);
}

arr2.sort(function (a, b) {
    if (a.save.split(' ')[1] > b.save.split(' ')[1]) {
        return 1;
    }
    if (a.save.split(' ')[1] < b.save.split(' ')[1]) {
        return -1;
    }
    return 0;
});

for (let value1 in arr2) {
    let option = document.createElement('option');
    option.text = arr2[value1].save
    option.value = arr2[value1].save;
    option.selected = false
    selecttSaveSelector.appendChild(option);
}
selectSave.addEventListener('change', toDoList2);
selectSave.value = ''
export let fild = document.createElement('div');
fild.className = 'fild'
conteiner.appendChild(fild)

select.addEventListener('change', function () {
    clearInterval(timerId);
    numberClicks.textContent = 0;
    timer.textContent = 0;
    for (let i = 0; i < fild.children.length;) {
        fild.removeChild(fild.children[i]);
    }
    this.selected = true
    numberOfRows = arr[this.value]
    mas = start(fild, clickButton, numberOfRows, numberOfBomb)
    select.value = ''
});
select.value = ''
export let mas = start(fild, clickButton, numberOfRows, numberOfBomb)
export let timerId;
export function timerGame() {
    timer.textContent = Number(timer.textContent) + Number(1);
    timerId = setTimeout(() => {
        return timerGame()
    }, 1000)
}