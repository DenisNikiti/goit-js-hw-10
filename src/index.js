import { fetchCountries } from "./js/fetchCountries";
import Notiflix from 'notiflix';
var debounce = require('lodash.debounce');

const inputEl = document.querySelector(".input-js")
    const ulEl = document.querySelector(".ul-js")
inputEl.addEventListener("input", debounce(fetchCountries,300))
  




inputEl.addEventListener("input", inputClear)


function inputClear() {
    
    
    if (inputEl.textContent === "") {
        ulEl.innerHTML = " "
        
    }
}