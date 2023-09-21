import { state, visualEndSort, barsContainer } from "./main.js";

function visualizeShellSort(arr, maxIndex, valueIndex, checkValue, switchFlag = false) {
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

async function shellSort(arr, preIteration) {
    let len = arr.length;
    let i

    state.stepShellSort == 0 && preIteration.toString() == [0, 0].toString() ? i = Math.floor(len / 2) : i = state.stepShellSort

    while (i > 0) {

        for (let j = 0; j < len; j++) {
            let k
            state.wasSorted == true ? j = preIteration[0] : j = j
            state.wasSorted == true ? k = preIteration[1] : k = j

            state.wasSorted = false

            let t = arr[j];

            while (k >= i && arr[k - i] > t) {
                arr[k] = arr[k - i];
                k -= i;

                visualizeShellSort(arr, j, k, t)

                await new Promise(resolve => {
                    setTimeout(resolve, state.delay);
                });
            }

            arr[k] = t;

            visualizeShellSort(arr, j, k, t, true)

            await new Promise(resolve => {
                setTimeout(resolve, state.delay);
            });

            if (!state.sorting) {
                if(j + 1 < len){
                    state.stepShellSort = i
                    return [j + 1, j + 1]
                }
            }
        }
        
        i == 2 ? i = 1 : i = Math.floor((i * 5) / 11);

        if (!state.sorting) {
            state.stepShellSort = i
            console.log(state.stepShellSort);
            return [0, 0]
        }
    }

    visualEndSort(arr)

    state.stepShellSort = 0

    return [0, 0]
}

export { shellSort };
