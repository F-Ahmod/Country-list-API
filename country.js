
// load countries

const loadCountries=()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>displayCountries(data));

}
loadCountries();

const displayCountries= countries =>{
    // console.log(country);
    // for( const county of countries)
    // console.log(county);
    const countiesDiv=document.getElementById('countries')
    countries.forEach(country =>{
        // console.log(country)
        const div=document.createElement('div')
        div.classList.add('country')
        div.classList.add('col-md-4')
        div.innerHTML=`
        
        <div class="card">
            <img width=200px src="${country.flag}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${country.name}</h5>
              <p class="card-text">${country.capital}</p>
            </div>
          </div>
        </br>

        <button onclick="loadcountryName('${country.name}')">show details</button>
        `;
        // const h3 =document.createElement('h3');
        // h3.innerText=country.name;
        // div.appendChild(h3)
        // const p=document.createElement('p')
        // p.innerText=country.capital;
        // div.appendChild(p);
        countiesDiv.appendChild(div);
        
    });
}
const loadcountryName = name =>{
    // console.log(name)
    const url=`https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res =>res.json())
    .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail= country=>{
    const countryDiv=document.getElementById('country-detail')
    countryDiv.innerHTML=`
           <h5>${country.name}</h4>
           <p>population: ${country.population}</p>
         
           <img width=200px src="${country.flag}">
    `;

};





// search option start 

const but=()=>{
    const searchField=document.getElementById('search-input')
        const searchText=searchField.value;
        searchField.value='';
        fetch(`https://restcountries.eu/rest/v2/name/${searchText}`)
        .then(res =>res.json())
        .then(data =>displayDetails(data)) 
        
};
// search button onother style or system


// document.getElementById('button').addEventListener('click',function(){
//     const searchInput=document.getElementById('search-input');
//     const searchText=searchInput.value;
    
//     fetch(`https://restcountries.eu/rest/v2/name/${searchText}`)
//     .then(res => res.json())
//     .then(data =>displayDetails(data))
//     searchInput.value='';
// });

const displayDetails= results=>{
   
    const searchDelails=document.getElementById('country-details');
    results.forEach(result =>{
        searchDelails.innerHTML='';
        const div1=document.createElement('div')
        div1.classList.add('country')
        div1.innerHTML=`
        <h3>${result.name}</h3>
        <p>${result.capital}</p>
        <img width=200px  src="${result.flag}">
        `;
        searchDelails.appendChild(div1);
       
    })
};


// search option use onclick



// const buttonClick=()=>{
//     const searchField=document.getElementById('search-field')
//     const searchText=searchField.value;
//     // console.log(searchText)
//     searchField.value='';
//     const url =`https://restcountries.eu/rest/v2/name/${name}`
//     // console.log(url);
//     fetch(url)
//     .then(res =>res.json())
//     .then(data =>console.log(data))
// }


{/* <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <img width=200px  src="${country.capital}"> */}