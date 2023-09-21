(()=>{"use strict";var e={d:(t,a)=>{for(var l in a)e.o(a,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:a[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t,a,l=!0){v.innerHTML="";for(let i=0;i<e.length;i++){let n=document.createElement("div");n.classList.add("bar");let o=document.createElement("div");o.classList.add("bar_fill"),i==a&&1==l&&o.classList.add("switch"),i!=t&&i!=a||0!=l||o.classList.add("check"),n.style.height=Math.floor(e[i]/w.maxValue*100)+"%";const r=document.createElement("div");r.className="bar-text",r.innerText=e[i],n.appendChild(r),n.appendChild(o),v.appendChild(n)}}async function a(e,a){let l=e.length;for(let i=a[0];i<l-1;i++){for(let n=a[1];n<l-i-1;n++)if(e[n]>e[n+1]){let a=e[n];if(e[n]=e[n+1],e[n+1]=a,t(e,n,n+1),await new Promise((e=>{setTimeout(e,w.delay)})),!w.sorting)return[i,n+1]}else if(t(e,n,n+1,!1),await new Promise((e=>{setTimeout(e,w.delay)})),!w.sorting)return[i,n+1];0!==a[1]&&(a[1]=0)}return b(e),[0,0]}function l(e,t,a,l,i=!0){v.innerHTML="";for(let n=0;n<e.length;n++){let o=document.createElement("div");o.classList.add("bar");let r=document.createElement("div");r.classList.add("bar_fill"),n<l&&r.classList.add("check"),n!=t&&n!=a||1!=i||r.classList.add("switch"),0==i&&(n==t&&r.classList.add("switch"),n==a&&r.classList.add("check")),o.style.height=Math.floor(e[n]/w.maxValue*100)+"%";const s=document.createElement("div");s.className="bar-text",s.innerText=e[n],o.appendChild(s),o.appendChild(r),v.appendChild(o)}}async function i(e,t){let a,i=e.length;for(let n=t[0];n<i-1;n++){a=!0!==w.wasSorted?n:w.minIndexSelectionSort,!0!==w.wasSorted?t[1]=n+1:w.wasSorted=!1;for(let o=t[1];o<i;o++)if(e[o]<e[a]){if(a=o,l(e,a,null,n,!1),await new Promise((e=>{setTimeout(e,w.delay)})),!w.sorting)return w.minIndexSelectionSort=a,[n,o]}else if(l(e,a,o,n,!1),await new Promise((e=>{setTimeout(e,w.delay)})),!w.sorting)return w.minIndexSelectionSort=a,[n,o];let o=e[a];if(e[a]=e[n],e[n]=o,l(e,a,n,n),await new Promise((e=>{setTimeout(e,w.delay)})),!w.sorting)return w.minIndexSelectionSort=n+1,[n+1,n+2]}return b(e),w.minIndexSelectionSort=0,[0,0]}function n(e,t,a,l,i=!1){v.innerHTML="";for(let n=0;n<e.length;n++){let o=document.createElement("div");o.classList.add("bar");let r=document.createElement("div");if(r.classList.add("bar_fill"),n==t&&r.classList.add("check"),n==a&&0==i){r.classList.add("switch");let e=document.createElement("div");e.className="bar-text_choice",e.innerHTML=l,o.appendChild(e)}n==a&&1==i&&r.classList.add("check"),o.style.height=Math.floor(e[n]/w.maxValue*100)+"%";let s=document.createElement("div");s.className="bar-text",s.innerText=e[n],o.appendChild(s),o.appendChild(r),v.appendChild(o)}}async function o(e,t){let a,l,i=e.length;for(let o=t[0];o<i;o++){for(a=1==w.wasSorted&&0!==t[0]?w.minValueChoiceSort:e[o],l=1==w.wasSorted&&0!==t[0]?t[1]:o-1,w.wasSorted=!1;l>=0&&e[l]>a;)if(e[l+1]=e[l],n(e,o,l,a),l--,await new Promise((e=>{setTimeout(e,w.delay)})),!w.sorting)return w.minValueChoiceSort=a,[o,l];if(e[l+1]=a,n(e,o,l+1,a,!0),await new Promise((e=>{setTimeout(e,w.delay)})),!w.sorting)return w.minValueChoiceSort=e[o+1],[o+1,o]}return b(e),w.minValueChoiceSort=0,[0,0]}function r(e,t,a,l,i=!1){v.innerHTML="";for(let n=0;n<e.length;n++){let o=document.createElement("div");o.classList.add("bar");let r=document.createElement("div");if(r.classList.add("bar_fill"),n==t&&r.classList.add("check"),n==a&&0==i){r.classList.add("switch");let e=document.createElement("div");e.className="bar-text_choice",e.innerHTML=l,o.appendChild(e)}n==a&&1==i&&r.classList.add("check"),o.style.height=Math.floor(e[n]/w.maxValue*100)+"%";let s=document.createElement("div");s.className="bar-text",s.innerText=e[n],o.appendChild(s),o.appendChild(r),v.appendChild(o)}}async function s(e,t){let a,l=e.length;for(a=0==w.stepShellSort&&t.toString()==[0,0].toString()?Math.floor(l/2):w.stepShellSort;a>0;){for(let i=0;i<l;i++){let n;1==w.wasSorted&&(i=t[0]),n=1==w.wasSorted?t[1]:i,w.wasSorted=!1;let o=e[i];for(;n>=a&&e[n-a]>o;)e[n]=e[n-a],n-=a,r(e,i,n,o),await new Promise((e=>{setTimeout(e,w.delay)}));if(e[n]=o,r(e,i,n,o,!0),await new Promise((e=>{setTimeout(e,w.delay)})),!w.sorting&&i+1<l)return w.stepShellSort=a,[i+1,i+1]}if(a=2==a?1:Math.floor(5*a/11),!w.sorting)return w.stepShellSort=a,console.log(w.stepShellSort),[0,0]}return b(e),w.stepShellSort=0,[0,0]}function d(e,t,a,l=!0){v.innerHTML="";for(let i=0;i<e.length;i++){let n=document.createElement("div");n.classList.add("bar");let o=document.createElement("div");o.classList.add("bar_fill"),i==a&&1==l&&o.classList.add("switch"),i!=t&&i!=a||0!=l||o.classList.add("check"),n.style.height=Math.floor(e[i]/w.maxValue*100)+"%";const r=document.createElement("div");r.className="bar-text",r.innerText=e[i],n.appendChild(r),n.appendChild(o),v.appendChild(n)}}async function c(e,t){let a=0,l=0;a=t[0]<t[1]?t[0]:0,l=t[0]<t[1]?t[1]:e.length-1;let i,n=!0;for(;a<l&&n;){n=!1;for(let t=a;t<l;t++){if(1==w.flagCoctailSort&&w.wasSorted){n=!0;break}if(0==w.flagCoctailSort&&w.wasSorted&&(t=w.inIterarionCoctailSort),w.wasSorted=!1,e[t]>e[t+1]){if(i=e[t],e[t]=e[t+1],e[t+1]=i,n=!0,d(e,t,t+1),await new Promise((e=>{setTimeout(e,w.delay)})),!w.sorting)return w.inIterarionCoctailSort=t+1,w.flagCoctailSort=!1,t+1>=l&&(w.inIterarionCoctailSort=l-1,w.flagCoctailSort=!0),[a,l]}else if(n=!0,d(e,t,t+1,!1),await new Promise((e=>{setTimeout(e,w.delay)})),!w.sorting)return w.inIterarionCoctailSort=t+1,w.flagCoctailSort=!1,t+1>=l&&(w.inIterarionCoctailSort=l-1,w.flagCoctailSort=!0),[a,l]}if(l--,!w.sorting)return w.flagCoctailSort=!0,[a,l+1];if(n){n=!1;for(let t=l;t>a;t--)if(1==w.flagCoctailSort&&w.wasSorted&&(t=w.inIterarionCoctailSort),w.wasSorted=!1,e[t]<e[t-1]){if(i=e[t],e[t]=e[t-1],e[t-1]=i,n=!0,d(e,t,t-1),await new Promise((e=>{setTimeout(e,w.delay)})),!w.sorting)return w.inIterarionCoctailSort=t-1,l+=1,w.flagCoctailSort=!0,t-1<=a&&(w.flagCoctailSort=!1,a++,l--,w.inIterarionCoctailSort=a),[a,l]}else if(n=!0,d(e,t,t-1,!1),await new Promise((e=>{setTimeout(e,w.delay)})),!w.sorting)return w.inIterarionCoctailSort=t-1,l+=1,w.flagCoctailSort=!0,t-1<=a&&(w.flagCoctailSort=!1,a++,l--,w.inIterarionCoctailSort=a),[a,l]}if(a++,!w.sorting)return w.flagCoctailSort=!1,w.inIterarionCoctailSort=a,[a,l]}return b(e),w.flagCoctailSort=!1,w.inIterarionCoctailSort=0,[0,0]}e.d({},{XZ:()=>v,SB:()=>w,NA:()=>b});const m=document.getElementById("randomGenerationButton"),u=document.getElementById("inputGenerationButton"),h=document.getElementById("countRandom"),f=document.getElementById("inputArr"),S=document.getElementById("generationArrayButton"),g=document.getElementById("menuControl"),p=document.getElementById("startSortingButton"),y=document.getElementById("stopSortingButton"),v=document.getElementById("bars"),C=document.getElementById("choiseSortType"),L=document.getElementById("inputDelayMS");let w={sorting:!1,iteration:[0,0],wasSorted:!1,inputGen:!1,arrayToSort:[],maxValue:0,minIndexSelectionSort:0,minValueChoiceSort:0,stepShellSort:0,flagCoctailSort:!1,inIterarionCoctailSort:0,sortType:a,delay:200};function b(e){v.innerHTML="";for(let t=0;t<e.length;t++){let a=document.createElement("div");a.classList.add("bar"),a.style.height=Math.floor(e[t]/w.maxValue*100)+"%";let l=document.createElement("div");l.classList.add("bar_fill"),l.classList.add("end");const i=document.createElement("div");i.className="bar-text",i.innerText=e[t],a.appendChild(i),a.appendChild(l),v.appendChild(a)}w.sorting=!1,p.disabled=!1,y.disabled=!0,w.wasSorted=!1,S.disabled=!1,C.disabled=!1}function T(e){v.innerHTML="";for(let t=0;t<e.length;t++){let a=document.createElement("div");a.classList.add("bar"),a.style.height=Math.floor(e[t]/w.maxValue*100)+"%";let l=document.createElement("div");l.classList.add("bar_fill");const i=document.createElement("div");i.className="bar-text",i.innerText=e[t],a.appendChild(i),a.appendChild(l),v.appendChild(a)}S.disabled=!1}m.addEventListener("click",(()=>{m.classList.contains("choiced")||(w.inputGen=!1,h.value="",u.classList.remove("choiced"),m.classList.add("choiced"),h.parentElement.classList.remove("hide"),f.parentElement.classList.add("hide"))})),u.addEventListener("click",(()=>{u.classList.contains("choiced")||(w.inputGen=!0,f.value="",m.classList.remove("choiced"),u.classList.add("choiced"),f.parentElement.classList.remove("hide"),h.parentElement.classList.add("hide"))})),h.addEventListener("input",(e=>{let t=e.target,a=t.value;""!=a&&(a=a.match(/\d+/g).join(""),t.value=a)})),S.addEventListener("click",(()=>{if(0==w.inputGen)return""==h.value?void alert("Введите количество случайных элементов"):(g.classList.remove("hide"),w.arrayToSort=(e=>{let t=[];for(let a=0;a<=e-1;a++)t.push(Math.floor(151*Math.random())+0);return t})(h.value),w.maxValue=Math.max.apply(null,w.arrayToSort),void T(w.arrayToSort));if(""==f.value)return void alert("Введите массив элементов");let e=f.value.split(",").map((e=>Number(e)));if(0!=e.length){for(let t=0;t<=e.length-1;t++)if(isNaN(e[t]))return alert("Провереть введенный массив"),void console.log("jopa");console.log(w.arrayToSort),w.arrayToSort=e,w.maxValue=Math.max.apply(null,w.arrayToSort),T(w.arrayToSort),g.classList.remove("hide")}else alert("Введите массив")})),p.addEventListener("click",(async function(){S.disabled=!0,p.disabled=!0,C.disabled=!0,y.disabled=!1,w.wasSorted=!0,w.sorting=!0,console.log(w.arrayToSort),w.iteration=await w.sortType(w.arrayToSort,w.iteration),console.log(w.iteration,w.flagCoctailSort,w.inIterarionCoctailSort)})),y.addEventListener("click",(()=>{w.sorting=!1,y.disabled=!0,p.disabled=!1})),C.addEventListener("change",(e=>{switch(e.target.value){case"bubbles":console.log("Пузырьковая"),w.sortType=a;break;case"selective":console.log("Выбором"),w.sortType=i;break;case"insert":console.log("Вставками"),w.sortType=o;break;case"shell":console.log("Шелла"),w.sortType=s;break;case"coctail":console.log("Шейкерная"),w.sortType=c}})),L.addEventListener("input",function(e,t){let a=null;return function(...e){a||(a=setTimeout((()=>{(e=>{let t=e.target,a=t.value;null==a.match(/\d/g)?t.value="":t.value=a.match(/\d/g).join("")})(...e),clearTimeout(a),a=null}),100))}}()),L.addEventListener("blur",(e=>{let t=e.target,a=Number(t.value);""==t.value&&(t.value=0,a=0),w.delay=Number(a)}))})();