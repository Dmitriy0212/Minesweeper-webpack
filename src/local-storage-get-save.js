import { mas } from "./index";
import { timer } from "./index";
import { numberClicks } from "./index";
import ifLocalStorageLength from "./if-local-storage-length-0";
export default function localStorageGetSave() {
    let obgSaveForRes = {
        masBomb: [], masValue: [], colorValue: [], masStyle: [], time: '', clicks: '', numberRous: '', levelThis: '', masArt: []
    }
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];
    let level = document.querySelector('#level')
    let fild1 = document.querySelector('.fild')
    for (let i = 0; i < fild1.children.length; i++) {
        for (let j = 0; j < fild1.children[i].children.length; j++) {
            arr1.push(fild1.children[i].children[j].className)
            if (fild1.children[i].children[j].children[0] !== undefined) {
                arr2.push(fild1.children[i].children[j].children[0].outerHTML)
            }
            else if (fild1.children[i].children[j].children[0] == undefined) {
                arr2.push('')
            }
            if (fild1.children[i].children[j].textContent == ' ') {
                arr3.push(' ')
            }
            else if (fild1.children[i].children[j].textContent !== ' ') {
                arr3.push(fild1.children[i].children[j].textContent)
            }
            arr4.push(fild1.children[i].children[j].style.color)
        }
    }

    obgSaveForRes.masBomb = mas;
    obgSaveForRes.masStyle = arr1
    obgSaveForRes.masValue = arr3
    obgSaveForRes.colorValue = arr4
    obgSaveForRes.time = timer.textContent
    obgSaveForRes.clicks = numberClicks.textContent
    obgSaveForRes.numberRous = fild1.children.length;
    obgSaveForRes.levelThis = level.textContent;
    obgSaveForRes.masArt = arr2;



    let objJson2 = JSON.stringify(localStorage);
    let objJson3 = JSON.parse(objJson2);
    localStorage.clear()
    for (let key in objJson3) {
        if (String(key).includes('Save') !== true) {
            localStorage.setItem(key, objJson3[key]);
        }
    }
    let objJson1;
    for (let key in objJson3) {
        if (String(key).includes('Save') == true) {
            let object2 = JSON.parse(objJson3[key]);
            object2.obgAll.obgSaveRest.splice(0, 1, obgSaveForRes)
            objJson1 = JSON.stringify(object2);
            localStorage.setItem('Save', objJson1);
            return
        }
    }
    if (objJson3.Save == undefined) {
        ifLocalStorageLength()
    }
}