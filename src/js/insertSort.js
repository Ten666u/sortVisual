import {state, visualEndSort, barsContainer} from "./main.js"

function visualizeInsertSort(arr, maxIndex, valueIndex, checkValue, switchFlag = false) {
    barsContainer.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        let barFill = document.createElement("div");
        barFill.classList.add("bar_fill");
        

        if ((i ==  maxIndex)) {
            barFill.classList.add("check");
        }

        if ((i ==  valueIndex) && switchFlag == false) {
            barFill.classList.add("switch");
            let barTextValue = document.createElement("div");
            barTextValue.className = "bar-text_choice";
            barTextValue.innerHTML = checkValue
            bar.appendChild(barTextValue)
        }
        if ((i ==  valueIndex) && switchFlag == true) {
            barFill.classList.add("check");
        }

        bar.style.height = Math.floor((arr[i] / state.maxValue) * 100) + "%";

        let barText = document.createElement("div");
        barText.className = "bar-text";
        barText.innerText = arr[i];
        bar.appendChild(barText);
        bar.appendChild(barFill)

        barsContainer.appendChild(bar);
    }
}

async function insertSort(arr, preIteration){
    let len = arr.length;
    let v
    let j

    for(let i = preIteration[0]; i < len; i++){
        state.wasSorted == true && preIteration[0] !== 0 ? v = state.minValueChoiceSort : v = arr[i]
        state.wasSorted == true && preIteration[0] !== 0 ? j = preIteration[1] : j = i - 1
        state.wasSorted = false

        while(j >= 0 && arr[j] > v){
            arr[j+1] = arr[j]

            visualizeInsertSort(arr, i, j, v)
            j--

            await new Promise(resolve => {
                setTimeout(resolve, state.delay);
            });

            if (!state.sorting) {
                state.minValueChoiceSort = v
                return [i, j]
            }
        }
        
        arr[j+1] = v

        visualizeInsertSort(arr, i, j + 1, v, true)

        await new Promise(resolve => {
            setTimeout(resolve, state.delay);
        });

        if (!state.sorting) {
            state.minValueChoiceSort = arr[i+1]
            return [i + 1, i]
        }
    }

    visualEndSort(arr)

    state.minValueChoiceSort = 0

    return [0, 0]
}

export {insertSort}