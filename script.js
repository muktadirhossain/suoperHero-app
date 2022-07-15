const baseUrl = 'https://www.superheroapi.com/api.php/1942497392623335/';

const heroImage = document.getElementById('heroImage');

const randomBtn = document.getElementById('randomBtn');

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
// });
