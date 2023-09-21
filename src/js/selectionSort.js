import {state, visualEndSort, barsContainer} from "./main.js"

function visualizeSelectSort(arr, minIndex, otherIndex, sortedIndex, switchFlag = true) {
    barsContainer.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        let barFill = document.createElement("div");
        barFill.classList.add("bar_fill");
        
        if(i < sortedIndex){
            barFill.classList.add("check")
        }

        if ((i == minIndex || i == otherIndex) && switchFlag == true) {
            barFill.classList.add("switch");
        }

        if (switchFlag == false) {
            if(i == minIndex){
                barFill.classList.add("switch");
            }
            if(i == otherIndex){
                barFill.classList.add("check");
            }
        }


        bar.style.height = Math.floor((arr[i] / state.maxValue) * 100) + "%";

        const barText = document.createElement("div");
        barText.className = "bar-text";
        barText.innerText = arr[i];
        bar.appendChild(barText);
        bar.appendChild(barFill)

        barsContainer.appendChild(bar);
    }
}

async function selectionSort(arr, preIteration){
    let len = arr.length;
    let minIndex

    for(let i = preIteration[0]; i < len - 1; i++){
        state.wasSorted !== true ? minIndex = i :  minIndex = state.minIndexSelectionSort 
        state.wasSorted !== true ? preIteration[1] = i + 1 : state.wasSorted = false

        for(let j =  preIteration[1]; j < len; j++){
            if(arr[j] < arr[minIndex]){     
                minIndex = j
                visualizeSelectSort(arr, minIndex, null, i, false)
                await new Promise(resolve => {
                    setTimeout(resolve, state.delay);
                });

                if (!state.sorting) {
                    state.minIndexSelectionSort = minIndex
                    return [i, j]
                }

                continue
            }
            visualizeSelectSort(arr, minIndex, j, i, false)

            await new Promise(resolve => {
                setTimeout(resolve, state.delay);
            });

            if (!state.sorting) {
                state.minIndexSelectionSort = minIndex
                return [i, j]
            }

        }

        let temp =  arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;

        visualizeSelectSort(arr, minIndex, i, i)

        await new Promise(resolve => {
            setTimeout(resolve, state.delay);
        });

        if (!state.sorting) {
            state.minIndexSelectionSort = i+1
            return [i + 1, i + 2]
        }
    }

    visualEndSort(arr)

    state.minIndexSelectionSort = 0

    return [0, 0]
}

export {selectionSort, visualizeSelectSort}