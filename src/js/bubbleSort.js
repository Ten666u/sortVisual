import {state, visualEndSort, barsContainer} from "./main.js"

function visualizeBubbleSort(arr, highlightIndex1, highlightIndex2, switchFlag = true) {
    barsContainer.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        let barFill = document.createElement("div");
        barFill.classList.add("bar_fill");
        
        if ((i == highlightIndex2) && switchFlag == true) {
            barFill.classList.add("switch");
        }

        if ((i == highlightIndex1 || i == highlightIndex2) && switchFlag == false) {
            barFill.classList.add("check");
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

async function bubbleSort(arr, preIteration) {
    let len = arr.length;

    for (let i = preIteration[0]; i < len - 1; i++) {
        for (let j = preIteration[1]; j < len - i - 1; j++) {
            if ( arr[j] >  arr[j + 1]) {
                // Обмен элементов
                let temp =  arr[j];
                arr[j] =  arr[j + 1];
                arr[j + 1] = temp;

                // Визуализация обмена
                visualizeBubbleSort(arr, j, j + 1);

                // Ждем некоторое время, чтобы увидеть визуализацию
                await new Promise(resolve => {
                    setTimeout(resolve, state.delay);
                });

                if (!state.sorting) {
                    return [i, j+1]
                }
                continue
            }

            visualizeBubbleSort(arr, j, j + 1, false)

            await new Promise(resolve => {
                setTimeout(resolve, state.delay);
            });

            if (!state.sorting) {
                return [i, j+1]
            }
        }

        if(preIteration[1] !== 0){
            preIteration[1] = 0
        }
    }

    visualEndSort(arr)
    
    return [0, 0]
}

export {bubbleSort}