const baseUrl = 'https://www.superheroapi.com/api.php/1942497392623335/';

const heroImage = document.getElementById('heroImage');

const randomBtn = document.getElementById('randomBtn');

randomBtn.addEventListener('click', function(){
    const urlID = Math.floor((Math.random() * 731) + 1);

    fetch(`${baseUrl}${urlID}`)
        .then(response => response.json())
        .then(response =>{
            console.log(response);

            const name = response.name;
            const img = response.image.url;
            heroImage.innerHTML = `
            <h2>Name: ${name}</h2>
            <img src="${img}" >`

        
        })
})

