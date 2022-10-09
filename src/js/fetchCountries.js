
function fetchCountries(e) {
          const name = e.target.value.trim()
    fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,languages,flags`).then(response => response.json())
    
}

export { fetchCountries}