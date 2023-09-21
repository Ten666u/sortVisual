import { state, visualEndSort, barsContainer } from "./main.js";

function visualizeCoctailSort(arr, highlightIndex1, highlightIndex2, switchFlag = true) {
    barsContainer.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        let barFill = document.createElement("div");
        barFill.classList.add("bar_fill");

        if (i == highlightIndex2 && switchFlag == true) {
            barFill.classList.add("switch");
        }

        if (
            (i == highlightIndex1 || i == highlightIndex2) &&
            switchFlag == false
        ) {
            barFill.classList.add("check");
        }

        bar.style.height = Math.floor((arr[i] / state.maxValue) * 100) + "%";

        const barText = document.createElement("div");
        barText.className = "bar-text";
        barText.innerText = arr[i];
        bar.appendChild(barText);
        bar.appendChild(barFill);

        barsContainer.appendChild(bar);
    }
}

async function coctailSort(arr, preIteration) {
    let i = 0;
    let j = 0;

    preIteration[0] < preIteration[1] ? i = preIteration[0] : i =  0;
    preIteration[0] < preIteration[1] ? j = preIteration[1] : j =  arr.length - 1;

    let s = true;
    let t;

    while (i < j && s) {
        s = false;

        // preIteration[0] < preIteration[1] ? s = state.flagCoctailSort : s = false

        for (let k = i; k < j; k++) {

            if(state.flagCoctailSort == true && state.wasSorted){
                s = true
                break
            }

            state.flagCoctailSort == false && state.wasSorted ? k = state.inIterarionCoctailSort : k = k
            state.wasSorted = false

            if (arr[k] > arr[k + 1]) {
                t = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = t;
                s = true;

                visualizeCoctailSort(arr, k, k + 1);
                await new Promise(resolve => {
                    setTimeout(resolve, state.delay);
                });

                if (!state.sorting) {
                    state.inIterarionCoctailSort = k + 1
                    state.flagCoctailSort = false

                    if(k + 1 >= j){
                        state.inIterarionCoctailSort = j - 1
                        state.flagCoctailSort = true
                    }

                    return [i, j]
                }

                continue  
            }

            s = true;
            
            visualizeCoctailSort(arr, k, k + 1, false);
            await new Promise(resolve => {
                setTimeout(resolve, state.delay);
            });

            if (!state.sorting) {
                state.inIterarionCoctailSort = k + 1
                state.flagCoctailSort = false

                if(k + 1 >= j){
                    state.inIterarionCoctailSort = j - 1
                    state.flagCoctailSort = true
                }
                

                return [i, j]
            }

        }
        j--;

        if (!state.sorting) {
            state.flagCoctailSort = true
            return [i, j + 1]
        }

        if (s) {
            s = false;

            for (let k = j; k > i; k--) {
                
                state.flagCoctailSort == true && state.wasSorted ? k = state.inIterarionCoctailSort : k = k
                state.wasSorted = false

                if (arr[k] < arr[k - 1]) {
                    t = arr[k];
                    arr[k] = arr[k - 1];
                    arr[k - 1] = t;
                    s = true;

                    visualizeCoctailSort(arr, k, k - 1);
                    await new Promise(resolve => {
                        setTimeout(resolve, state.delay);
                    });

                    if (!state.sorting) {
                        state.inIterarionCoctailSort = k - 1
                        j = j + 1
                        state.flagCoctailSort = true
    
                        if(k - 1 <= i){
                            state.flagCoctailSort = false
                            i++
                            j--
                            state.inIterarionCoctailSort = i
                        }
    
                        return [i, j]
                    }

                    continue
                }

                s = true
                visualizeCoctailSort(arr, k, k - 1, false);
                await new Promise(resolve => {
                    setTimeout(resolve, state.delay);
                });

                if (!state.sorting) {
                    state.inIterarionCoctailSort = k - 1
                    j = j + 1
                    state.flagCoctailSort = true

                    if(k - 1 <= i){
                        state.flagCoctailSort = false
                        i++
                        j--
                        state.inIterarionCoctailSort = i
                    }

                    return [i, j]
                }
            }

        }
        i++;

        if (!state.sorting) {
            state.flagCoctailSort = false
            state.inIterarionCoctailSort = i
            return [i, j]
        }
    }

    visualEndSort(arr);

    state.flagCoctailSort = false;
    state.inIterarionCoctailSort = 0

    return [0, 0];
}

export { coctailSort };
