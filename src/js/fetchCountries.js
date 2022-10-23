import Notiflix from 'notiflix';
  const ulEl = document.querySelector(".ul-js")
function fetchCountries(e) {
  
          const name = e.target.value.trim()
  return  fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,languages,flags`).then(response => response.json()).then(data => {
        if (data.length > 10) {
           return Notiflix.Notify.info("Too many matches found. Please enter a more specific name."); }
           if (data.length > 1) {
            ulEl.insertAdjacentHTML('afterbegin',createCountres(data))
           }
        if (data.length === 1) {
              ulEl.insertAdjacentHTML('afterbegin',createCountry(data))  
        }

    })
    
}
        




  function createCountres(data) {
      return data.map((  { flags,name } ) => { 
          return `<li class ="element"> <img src="${flags.svg}" width="20" height="20"><p class="text">${name.official}</p></li>`}).join("")
}
  

function createCountry(data) {
     
      return data.map((  { flags,name, capital,population,languages} ) => { 
          return ` <li>
          <img src="${flags.svg}" width="40" height="40"> 
    <p>${name.official}</p>
    <p>Capital:${capital}</p>
    <p>Population:${population}</p>
    <p>languages${languages}</p>
    </li>
`}).join("")

}
export { fetchCountries}