import { mas } from "./index";
import { timer } from "./index";
import { numberClicks } from "./index";
export default function localStorageSave() {
    let today = new Date();
    let now = today.toLocaleString();
    let masStatistForSave = {
        save: '', time: '', clicks: ''
    }
    let obgSaveForRes = {
        masBomb: [], masValue: [], colorValue: [], masStyle: [], time: '', clicks: '', numberRous: '', levelThis: '', masArt: []
    }
    let arr = {
        obgAll: {
            obgSaveRest: [
                { masBomb: [], masValue: [], colorValue: [], masStyle: [], time: '', clicks: '', numberRous: '', levelThis: '', masArt: [] }
            ],
            masStatist: [
                { save: '', time: '', clicks: '' }
            ]
        }
    };
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
                arr3.push('')
            }
            else if (fild1.children[i].children[j].textContent !== ' ') {
                arr3.push(fild1.children[i].children[j].textContent)
            }
            arr4.push(fild1.children[i].children[j].style.color)
        }
    }

    arr.obgAll.masStatist[0].save = now;
    arr.obgAll.masStatist[0].time = timer.textContent
    arr.obgAll.masStatist[0].clicks = numberClicks.textContent

    masStatistForSave.save = now;
    masStatistForSave.time = timer.textContent
    masStatistForSave.clicks = numberClicks.textContent

    obgSaveForRes.masBomb = mas;
    obgSaveForRes.masStyle = arr1
    obgSaveForRes.masValue = arr3
    obgSaveForRes.colorValue = arr4
    obgSaveForRes.time = timer.textContent
    obgSaveForRes.clicks = numberClicks.textContent
    obgSaveForRes.numberRous = fild1.children.length;
    obgSaveForRes.levelThis = level.textContent;
    obgSaveForRes.masArt = arr2;

    arr.obgAll.obgSaveRest[0].masBomb = mas;
    arr.obgAll.obgSaveRest[0].masStyle = arr1
    arr.obgAll.obgSaveRest[0].masValue = arr3
    arr.obgAll.obgSaveRest[0].colorValue = arr4
    arr.obgAll.obgSaveRest[0].time = timer.textContent
    arr.obgAll.obgSaveRest[0].clicks = numberClicks.textContent
    arr.obgAll.obgSaveRest[0].numberRous = fild1.children.length;
    arr.obgAll.obgSaveRest[0].levelThis = level.textContent;
    arr.obgAll.obgSaveRest[0].masArt = arr2;

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
            if (object2.obgAll.masStatist.length == 10) {
                object2.obgAll.masStatist.sort(function (a, b) {
                    if (a.save > b.save) {
                        return 1;
                    }
                    if (a.save < b.save) {
                        return -1;
                    }
                    return 0;
                });
                object2.obgAll.masStatist.splice(0, 1, masStatistForSave)
                object2.obgAll.obgSaveRest.splice(0, 1, obgSaveForRes)
                objJson1 = JSON.stringify(object2);
                localStorage.setItem('Save', objJson1);
                return
            }
            object2.obgAll.masStatist.splice(0, 0, masStatistForSave)
            object2.obgAll.obgSaveRest.splice(0, 1, obgSaveForRes)
            objJson1 = JSON.stringify(object2);
            localStorage.setItem('Save', objJson1);
            return
        }
    }
    localStorage.setItem('Save', JSON.stringify(arr));
}