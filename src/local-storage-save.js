import { mas } from "./index";
import { timer } from "./index";
import { numberClicks } from "./index";
import { numberOfRows } from "./index";
export default function localStorageSave() {
    let today = new Date();
    let now = today.toLocaleString();
    let obgSaveForSave = {
        save: '', masBomb: [], masValue: [], colorValue: [], masStyle: [], time: '', clicks: '', numberRous: ''
    }
    let obgSaveForRes = {
        masBomb: [], masValue: [], colorValue: [], masStyle: [], time: '', clicks: '', numberRous: ''
    }
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

    arr.obgAll.obgSave[0].save = now;
    arr.obgAll.obgSave[0].masBomb = mas;
    arr.obgAll.obgSave[0].masStyle = arr1
    arr.obgAll.obgSave[0].masValue = arr3
    arr.obgAll.obgSave[0].colorValue = arr4
    arr.obgAll.obgSave[0].time = timer.textContent
    arr.obgAll.obgSave[0].clicks = numberClicks.textContent
    arr.obgAll.obgSave[0].numberRous = numberOfRows;

    obgSaveForSave.save = now;
    obgSaveForSave.masBomb = mas;
    obgSaveForSave.masStyle = arr1
    obgSaveForSave.masValue = arr3
    obgSaveForSave.colorValue = arr4
    obgSaveForSave.time = timer.textContent
    obgSaveForSave.clicks = numberClicks.textContent
    obgSaveForSave.numberRous = numberOfRows;

    obgSaveForRes.masBomb = mas;
    obgSaveForRes.masStyle = arr1
    obgSaveForRes.masValue = arr3
    obgSaveForRes.colorValue = arr4
    obgSaveForRes.time = timer.textContent
    obgSaveForRes.clicks = numberClicks.textContent
    obgSaveForRes.numberRous = numberOfRows;

    arr.obgAll.obgSaveRest[0].masBomb = mas;
    arr.obgAll.obgSaveRest[0].masStyle = arr1
    arr.obgAll.obgSaveRest[0].masValue = arr3
    arr.obgAll.obgSaveRest[0].colorValue = arr4
    arr.obgAll.obgSaveRest[0].time = timer.textContent
    arr.obgAll.obgSaveRest[0].clicks = numberClicks.textContent
    arr.obgAll.obgSaveRest[0].numberRous = numberOfRows;

    let arr2 = [];
    /*localStorage.clear();*/
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
            if (object2.obgAll.obgSave.length == 10) {
                object2.obgAll.obgSave.sort(function (a, b) {
                    if (a.save > b.save) {
                        return 1;
                    }
                    if (a.save < b.save) {
                        return -1;
                    }
                    return 0;
                });
                object2.obgAll.obgSave.splice(0, 1, obgSaveForSave)
                object2.obgAll.obgSaveRest.splice(0, 1, obgSaveForRes)
                objJson1 = JSON.stringify(object2);
                masTo = object2.obgAll.obgSave
                localStorage.setItem('Save', objJson1);
                return
            }

            object2.obgAll.obgSave.splice(0, 0, obgSaveForSave)
            object2.obgAll.obgSaveRest.splice(0, 1, obgSaveForRes)
            objJson1 = JSON.stringify(object2);
            masTo = object2.obgAll.obgSave
            localStorage.setItem('Save', objJson1);
            return
        }
    }
    localStorage.setItem('Save', JSON.stringify(arr));
    masTo = arr2
}
export let masTo = [];