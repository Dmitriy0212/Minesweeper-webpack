import toDoList from "./select-save";
import restart from "./restart";
import start from "./start-game";
import localStorageSave from "./local-storage-save";
import localStorageGetSave from "./local-storage-get-save";
import startFromSave from "./start-game-from-save";
import clearSaveRest from "./clear-the-history";
import newGame from "./new-game";
import closeWimd from "./close-wind";
export let numberOfRows = 10;
export let numberOfBomb = 10;
export let mas = [];

let arr = {
    'lou': 4,
    'Easy': 10,
    'Difficult': 15,
    'Advanced': 25
};

export let arr2 = []

let objJson2 = JSON.stringify(localStorage);
let objJson3 = JSON.parse(objJson2);

for (let key in objJson3) {
    if (String(key).includes('Save') !== true) {
        continue
    }
    else if (String(key).includes('Save') == true) {
        let object1 = JSON.parse(objJson3[key]);
        for (let key1 in object1.obgAll.obgSave) {
            let item = object1.obgAll.obgSave[key1]
            arr2.push(item)
        }
    }
}

arr2.sort(function (a, b) {
    if (a.save > b.save) {
        return 1;
    }
    if (a.save < b.save) {
        return -1;
    }
    return 0;
});

let body = document.querySelector('body');
let conteiner = document.createElement('div');
conteiner.className = 'conteiner';
body.appendChild(conteiner);

export let conteinerGame = document.createElement('div');
conteinerGame.className = 'conteiner__game';
conteiner.appendChild(conteinerGame);

let menu = document.createElement('div')
menu.className = 'menu';
conteinerGame.appendChild(menu)

let spunLevel = document.createElement('spun');
spunLevel.className = 'box';
spunLevel.textContent = 'Level'
menu.appendChild(spunLevel)

export let spunLevelThis = document.createElement('spun');
spunLevelThis.textContent = 'Easy'
spunLevelThis.id = 'level';
spunLevel.appendChild(spunLevelThis)

export let spunLevelList = document.createElement('ul');
spunLevelList.className = 'menu__list';
spunLevel.appendChild(spunLevelList)

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
buttonRest.textContent = String('Restart')
buttonRest.className = 'box';
buttonRest.addEventListener("click", () => { clearInterval(timerId); restart() })
menu.appendChild(buttonRest)

let buttonNew = document.createElement('button')
buttonNew.textContent = String('New game')
buttonNew.className = 'box';
buttonNew.addEventListener("click", () => { clearInterval(timerId); return mas = newGame() })
menu.appendChild(buttonNew)

let buttonSave = document.createElement('button')
buttonSave.textContent = String('Save')
buttonSave.className = 'box';
buttonSave.addEventListener("click", localStorageSave)
menu.appendChild(buttonSave)

let spunSave = document.createElement('spun');
spunSave.textContent = 'Win statistics'
spunSave.className = 'box';
menu.appendChild(spunSave)

export let spunSaveList = document.createElement('ul');
spunSaveList.className = 'menu__list__save';
spunSave.appendChild(spunSaveList)

spunLevel.addEventListener('click', function () {
    if (spunLevelList.children.length == 0) {
        closeWimd(spunSaveList)
        for (let index in arr) {
            let spunLeveItem = document.createElement('li');
            spunLeveItem.textContent = index;
            spunLeveItem.className = 'menu__item';
            spunLeveItem.addEventListener('click', function () {
                if (conteinerGame.children.length > 2) {
                    let nested = document.getElementById("restart");
                    conteinerGame.removeChild(nested);
                }
                clearSaveRest()
                clearInterval(timerId);
                numberClicks.textContent = 0;
                timer.textContent = 0;
                spunLevelThis.textContent = this.textContent
                for (let i = 0; i < fild.children.length;) {
                    fild.removeChild(fild.children[i]);
                }
                numberOfRows = arr[this.textContent]
                mas = start(arr[this.textContent], numberOfBomb)
                localStorageGetSave()
            });
            spunLevelList.appendChild(spunLeveItem);
        }
    }
    else if (spunLevelList.children.length > 0) {
        for (let i = 0; i < spunLevelList.children.length;) {
            spunLevelList.removeChild(spunLevelList.children[i]);
        }
    }
    spunLevelList.classList.toggle('active');
})

spunSave.addEventListener('click', function () {
    closeWimd(spunLevelList)
    let masItem = []
    let objItem1 = JSON.stringify(localStorage);
    let objItem2 = JSON.parse(objItem1);

    for (let key in objItem2) {
        if (String(key).includes('Save') !== true) {
            continue
        }
        else if (String(key).includes('Save') == true) {
            let objItem3 = JSON.parse(objItem2[key]);
            for (let key1 in objItem3.obgAll.masStatist) {
                let item = objItem3.obgAll.masStatist[key1]
                masItem.push(item)
            }
        }
    }
    if (spunSaveList.classList.length == 1) {
        for (let index in masItem) {
            let spunSaveItem = document.createElement('li');
            spunSaveItem.textContent = 'Time ' + masItem[index].time + ' clicks ' + masItem[index].clicks;
            spunSaveItem.className = 'menu__save__item';
            spunSaveItem.addEventListener('click', toDoList);
            spunSaveList.appendChild(spunSaveItem);
        }
    }
    else if (spunSaveList.classList.length > 1) {
        for (let i = 0; i < spunSaveList.children.length;) {
            spunSaveList.removeChild(spunSaveList.children[i]);
        }
    }
    spunSaveList.classList.toggle('active');
})

export let fild = document.createElement('div');
fild.className = 'fild'
conteinerGame.appendChild(fild)

let buttonDeleteSave = document.createElement('button')
buttonDeleteSave.textContent = String('Delete save')
buttonDeleteSave.className = 'box';
buttonDeleteSave.addEventListener("click", () => {
    localStorage.clear();
})
menu.appendChild(buttonDeleteSave)

export let timerId;
export function timerGame() {
    timer.textContent = Number(timer.textContent) + Number(1);
    timerId = setTimeout(() => {
        return timerGame()
    }, 1000)
}

/*body.addEventListener("click",closeWimd(spunSaveList))
body.addEventListener("click",closeWimd(spunLevelList))*/
let obj1 = JSON.stringify(localStorage);
let obj2 = JSON.parse(obj1);
for (let key in obj2) {
    debugger
    if (String(key).includes('Save') !== true) {
        continue
    }
    else if (String(key).includes('Save') == true) {
        let obj = JSON.parse(objJson3[key]);
        if (obj.obgAll.obgSaveRest[0].masBomb.length == 0) {
            mas = start(numberOfRows, numberOfBomb)
            break;
        }
        console.log(obj.obgAll.obgSaveRest[0].masArt)
        spunLevelThis.textContent = obj.obgAll.obgSaveRest[0].levelThis
        timer.textContent = obj.obgAll.obgSaveRest[0].time
        numberClicks.textContent = obj.obgAll.obgSaveRest[0].clicks
        for (let key2 in obj.obgAll.obgSaveRest[0].masBomb) {
            mas.splice(key2, 1, obj.obgAll.obgSaveRest[0].masBomb[key2])
        }
        /*mas = obj.obgAll.obgSaveRest[0].masBomb*/
        startFromSave(obj.obgAll.obgSaveRest[0].masValue, obj.obgAll.obgSaveRest[0].masStyle, obj.obgAll.obgSaveRest[0].colorValue, obj.obgAll.obgSaveRest[0].numberRous, obj.obgAll.obgSaveRest[0].masArt)
    }
}
if (objJson3.Save == undefined) {
    console.log('1')
    debugger
    mas = start(numberOfRows, numberOfBomb)
}
