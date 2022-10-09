import Notiflix from 'notiflix';

function fetchCountries(e) {
          const name = e.target.value.trim()
    fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,languages,flags`).then(response => response.json()).then(data => {
        if (data.length > 10) {
           return Notiflix.Notify.info("Too many matches found. Please enter a more specific name."); 
        }
    })
    
}

export { fetchCountries}