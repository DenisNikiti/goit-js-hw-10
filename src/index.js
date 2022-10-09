import { fetchCountries } from "./js/fetchCountries";
import Notiflix from 'notiflix';
var debounce = require('lodash.debounce');

const inputEl = document.querySelector(".input-js")
   
inputEl.addEventListener("input", debounce(fetchCountries,300))
  




//   Notiflix.Notify.info("фвфыв");