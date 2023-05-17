export default function clearSaveRest() {
    let obgSaveForRes = {
        masBomb: [], masValue: [], colorValue: [], masStyle: [], time: '', clicks: '', numberRous: ''
    }

    let objJson2 = JSON.stringify(localStorage);
    let objJson3 = JSON.parse(objJson2);

    localStorage.clear()
    debugger
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
}