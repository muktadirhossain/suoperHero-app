const baseUrl = 'https://www.superheroapi.com/api.php/1942497392623335/';

const heroImage = document.getElementById('heroImage');

const randomBtn = document.getElementById('randomBtn');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');


searchBtn.addEventListener('click', function(){
    let searchValue = searchInput.value;
    console.log(searchValue ,);
    fetch(`${baseUrl}search/${searchValue}`)
        .then(res => res.json())
        .then(data =>{
            
    const dataObject = data.results[0];
    const img = dataObject.image.url;
    const name = dataObject.name;


    const intelligence = dataObject.powerstats.intelligence;
    const durability = dataObject.powerstats.durability;
    const speed = dataObject.powerstats.speed;
    const strength = dataObject.powerstats.strength;

    heroImage.innerHTML = `
    <h2>Name: ${name}</h2>
    <p>intelligence: ${intelligence};</p>
    <p>durability: ${durability};</p>
    <p>speed: ${speed};</p>
    <p>strength: ${strength};</p>
    <img src="${img}" >`

        })
        searchInput.value = '';     
})




randomBtn.addEventListener('click', function(){
    const urlID = Math.floor((Math.random() * 731) + 1);

    fetch(`${baseUrl}${urlID}`)
        .then(response => response.json())
        .then(data =>{
            const name = data.name;
            const intelligence = data.powerstats.intelligence;
            const durability = data.powerstats.durability;
            const speed = data.powerstats.speed;
            const strength = data.powerstats.strength;
            const img = data.image.url;

            heroImage.innerHTML = `
            <h2>Name: ${name}</h2>
            <p>intelligence: ${intelligence};</p>
            <p>durability: ${durability};</p>
            <p>speed: ${speed};</p>
            <p>strength: ${strength};</p>
            <img src="${img}" >`
        
        })
})







// // learning object maping 
// let  object = {
//     combat: "56",
//     durability: "28",
//     intelligence: "50",
//     power: "11",
//     speed: "23",
//     strength: "75"
// }

// console.log(object.combat);
    
// let objectArr = Object.keys(object).map(i =>{
//     console.log(`<p>${i} : ${object[i]}</p>`);
// })