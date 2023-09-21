import {bubbleSort} from "./bubbleSort.js"
import {selectionSort} from "./selectionSort.js"
import { insertSort } from "./insertSort.js"
import { shellSort } from "./shellSort.js"
import { coctailSort } from "./coctaileSort.js"

import '../assets/styles/bootstrap-reboot.min.css'
import '../assets/styles/style.css'

const randomGenerationButton = document.getElementById("randomGenerationButton")
const inputGenerationButton = document.getElementById("inputGenerationButton")
const countRandom = document.getElementById("countRandom")
const inputArr = document.getElementById("inputArr")
const generationArrayButton = document.getElementById("generationArrayButton")

const menuControl = document.getElementById("menuControl")
const startSortingButton = document.getElementById("startSortingButton")
const stopSortingButton = document.getElementById("stopSortingButton");
const barsContainer = document.getElementById("bars");
const choiseSortType = document.getElementById("choiseSortType")
const inputDelayMS = document.getElementById("inputDelayMS")

let state = {
    sorting: false,
    iteration: [0,0],
    wasSorted: false,
    inputGen: false,
    arrayToSort: [],
    maxValue: 0,
    minIndexSelectionSort: 0,
    minValueChoiceSort: 0,
    stepShellSort: 0,
    flagCoctailSort: false,
    inIterarionCoctailSort: 0,
    sortType: bubbleSort,
    delay: 200,
}

function visualEndSort(arr){
    barsContainer.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = Math.floor((arr[i] / state.maxValue) * 100) + "%";

        let barFill = document.createElement("div");
        barFill.classList.add("bar_fill");
        barFill.classList.add("end");
        

        const barText = document.createElement("div");
        barText.className = "bar-text";
        barText.innerText = arr[i];

        bar.appendChild(barText);
        bar.appendChild(barFill)

        barsContainer.appendChild(bar);
    }

    state.sorting = false;
    startSortingButton.disabled = false
    stopSortingButton.disabled = true;
    state.wasSorted = false
    generationArrayButton.disabled = false
    choiseSortType.disabled = false
}

function visualArray(arr){
    barsContainer.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = Math.floor((arr[i] / state.maxValue) * 100) + "%";

        let barFill = document.createElement("div");
        barFill.classList.add("bar_fill");

        const barText = document.createElement("div");
        barText.className = "bar-text";
        barText.innerText = arr[i];

        bar.appendChild(barText);
        bar.appendChild(barFill)

        barsContainer.appendChild(bar);
    }

    generationArrayButton.disabled = false
}

async function startSorting() {
    generationArrayButton.disabled = true
    startSortingButton.disabled = true
    choiseSortType.disabled = true
    stopSortingButton.disabled = false;

    state.wasSorted = true
    state.sorting = true;

    console.log(state.arrayToSort);

    state.iteration = await state.sortType(state.arrayToSort, state.iteration); // Ожидаем завершения сортировки
    console.log(state.iteration, state.flagCoctailSort, state.inIterarionCoctailSort);
    return
}

// Функция для остановки сортировки
const stopSorting = () =>{
    state.sorting = false;
    stopSortingButton.disabled = true;
    startSortingButton.disabled = false
}

const changeSortType = (e) =>{
    let elem = e.target

    switch (elem.value) {
        case "bubbles":
            console.log("Пузырьковая");
            state.sortType = bubbleSort
            break;

        case "selective":
            console.log("Выбором");
            state.sortType = selectionSort
            break;

        case "insert":
            console.log("Вставками");
            state.sortType = insertSort
            break;

        case "shell":
            console.log("Шелла");
            state.sortType = shellSort
            break;

        case "coctail":
            console.log("Шейкерная");
            state.sortType = coctailSort
            break;
    }
}

const changeDelayMS = (e) =>{
    let elem = e.target
    let delay = elem.value

    delay.match(/\d/g) == null ? elem.value = "" : elem.value = delay.match(/\d/g).join("")
}

const checkDelayMs = (e) =>{
    let elem = e.target
    let delay = Number(elem.value)

    if(elem.value == ""){
        elem.value = 0
        delay = 0
    }

    state.delay = Number(delay)
}

function throttle(callee, timeout) {
    let timer = null;

    return function perform(...args) {
        if (timer) return;

        timer = setTimeout(() => {
            callee(...args);

            clearTimeout(timer);
            timer = null;
        }, timeout);
    };
}

const randomGeneration = () =>{
    if(randomGenerationButton.classList.contains("choiced")){
        return
    }

    state.inputGen = false

    countRandom.value = ""

    inputGenerationButton.classList.remove("choiced")
    randomGenerationButton.classList.add("choiced")

    countRandom.parentElement.classList.remove("hide")
    inputArr.parentElement.classList.add("hide")
}

const inputGeneration = () =>{
    if(inputGenerationButton.classList.contains("choiced")){
        return
    }

    state.inputGen = true

    inputArr.value = ""

    randomGenerationButton.classList.remove("choiced")
    inputGenerationButton.classList.add("choiced")

    inputArr.parentElement.classList.remove("hide")
    countRandom.parentElement.classList.add("hide")
}

// Генерация случайного массива для сортировки
const generateRandomArray = (length)=>{
    let arr = []
    let min = 0
    let max = 150

    for (let i = 0; i <= length - 1; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }

    return arr
}

// Генерация произвольного массива для сортировки
const generateInputArray = (arrStr)=>{
    let arr = arrStr.split(",").map(elem => Number(elem))
    return arr
}

const generationArray = () =>{

    if(state.inputGen == false){
        if(countRandom.value == ""){
            alert("Введите количество случайных элементов")
            return
        }

        menuControl.classList.remove("hide")

        state.arrayToSort = generateRandomArray(countRandom.value)
        state.maxValue = Math.max.apply(null, state.arrayToSort)
        visualArray(state.arrayToSort)

        return
    }

    if(inputArr.value == ""){
        alert("Введите массив элементов")
        return
    }

    let arr = generateInputArray(inputArr.value)

    if(arr.length == 0){
        alert("Введите массив")
        return
    }

    for(let i = 0; i <= arr.length - 1; i++){
        if(isNaN(arr[i])){
            alert("Провереть введенный массив")
            console.log("jopa");
            return
        }
    }

    console.log(state.arrayToSort);
    state.arrayToSort = arr
    state.maxValue = Math.max.apply(null, state.arrayToSort)
    visualArray(state.arrayToSort)
    menuControl.classList.remove("hide")

    return
}

const digitInputOnly = (e) =>{
    let elem = e.target
    let str = elem.value

    if(str == ""){
        return
    }

    str = str.match(/\d+/g).join("")
    elem.value = str
}

randomGenerationButton.addEventListener("click", randomGeneration)
inputGenerationButton.addEventListener("click", inputGeneration)
countRandom.addEventListener("input", digitInputOnly)

generationArrayButton.addEventListener("click", generationArray)
startSortingButton.addEventListener("click", startSorting)
stopSortingButton.addEventListener("click", stopSorting);
choiseSortType.addEventListener("change", changeSortType)
inputDelayMS.addEventListener("input", throttle(changeDelayMS, 100))
inputDelayMS.addEventListener("blur", checkDelayMs)

export {state, visualEndSort, barsContainer}