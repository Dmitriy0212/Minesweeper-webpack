import { mas } from "./index";
import { timer } from "./index";
import { numberClicks } from "./index";
import { selecttSaveSelector } from "./index";
import { selectSave } from "./index";
import toDoList from "./select-save";
export let masTo = [];
export default function localStorageSave() {
    let arr = { save: '', masBomb: [], masValue: [], colorValue: [], masStyle: [], time: '', clicks: '' };
    let arr1 = [];
    let arr3 = [];
    let arr4 = [];
    let fild1 = document.querySelector('.fild')
    for (let i = 0; i < fild1.children.length; i++) {
        for (let j = 0; j < fild1.children[i].children.length; j++) {
            debugger
            arr1.push(fild1.children[i].children[j].className)
            arr3.push(fild1.children[i].children[j].textContent)
            arr4.push(fild1.children[i].children[j].style.color)
        }
    }
    arr.masBomb = mas;
    arr.masStyle = arr1
    arr.masValue = arr3
    arr.colorValue = arr4
    arr.time = timer.textContent
    if (localStorage.length == 0) {
        arr.save = 'Save 1'
    }
    else if (localStorage.length > 0) {
        arr.save = 'Save ' + (Number(localStorage.length) + Number(1))
    }
    arr.clicks = numberClicks.textContent
    let objJson1 = JSON.stringify(arr);
    if (localStorage.length == 0) {
        localStorage.setItem('Save 1', objJson1);
    }
    else if (localStorage.length > 0) {
        localStorage.setItem('Save ' + (Number(localStorage.length) + Number(1)), objJson1);
    }
    let arr2 = [];
    /*localStorage.clear();*/
    let objJson2 = JSON.stringify(localStorage);
    let objJson3 = JSON.parse(objJson2);
    for (let key in objJson3) {
        if (JSON.parse(objJson3[key]).save) {
            arr2.push(JSON.parse(objJson3[key]))
        }
    }

    for (let h = 0; h < selecttSaveSelector.children.length;) {
        selecttSaveSelector.removeChild(selecttSaveSelector.children[h]);
    }
    debugger
    arr2.sort(function (a, b) {
        if (a.save.split(' ')[1] > b.save.split(' ')[1]) {
            return 1;
        }
        if (a.save.split(' ')[1] < b.save.split(' ')[1]) {
            return -1;
        }
        // a должно быть равным b
        return 0;
    });
    debugger
    for (let value1 in arr2) {
        let option = document.createElement('option');
        option.text = arr2[value1].save
        option.value = arr2[value1].save;
        option.selected = false
        selecttSaveSelector.appendChild(option);
    }
    masTo = arr2
    selectSave.addEventListener('change', toDoList);

}