import { mas } from "./index";
import { timer } from "./index";
import { numberClicks } from "./index";
import { numberOfRows } from "./index";
export default function ifLocalStorageLength() {
    let arr = {
        obgAll: {
            obgSave: [
                { save: '', masBomb: [], masValue: [], colorValue: [], masStyle: [], time: '', clicks: '', numberRous: '' }
            ],
            obgSaveRest: [
                { masBomb: [], masValue: [], colorValue: [], masStyle: [], time: '', clicks: '', numberRous: '' }
            ],
            masStatist: []
        }
    };
    let arr1 = [];
    let arr3 = [];
    let arr4 = [];
    let fild1 = document.querySelector('.fild')
    for (let i = 0; i < fild1.children.length; i++) {
        for (let j = 0; j < fild1.children[i].children.length; j++) {
            arr1.push(fild1.children[i].children[j].className)
            arr3.push(fild1.children[i].children[j].textContent)
            arr4.push(fild1.children[i].children[j].style.color)
        }
    }

    arr.obgAll.obgSaveRest[0].masBomb = mas;
    arr.obgAll.obgSaveRest[0].masStyle = arr1
    arr.obgAll.obgSaveRest[0].masValue = arr3
    arr.obgAll.obgSaveRest[0].colorValue = arr4
    arr.obgAll.obgSaveRest[0].time = timer.textContent
    arr.obgAll.obgSaveRest[0].clicks = numberClicks.textContent
    arr.obgAll.obgSaveRest[0].numberRous = numberOfRows;

    let objJson2 = JSON.stringify(localStorage);
    let objJson3 = JSON.parse(objJson2);

    localStorage.clear()
    for (let key in objJson3) {
        if (String(key).includes('Save') !== true) {
            localStorage.setItem(key, objJson3[key]);
        }
    }
    localStorage.setItem('Save', JSON.stringify(arr));
}