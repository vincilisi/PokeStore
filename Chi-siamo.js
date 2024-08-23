let opener = document.querySelector('.opener');
let circle= document.querySelector('.circle');
let flipCard = document.querySelector('.flipC');

let pokemon =[
    {name:'Eevee', descriptions: 'Presidente e fondatore di PokeStore', url:'https://cdn-icons-png.flaticon.com/512/14079/14079448.png' },
    {name:'Snoelax', descriptions: 'Dipendente sempre con la testa tra le nuvole ma molto coccolone', url:'https://cdn-icons-png.flaticon.com/512/189/189001.png' },
    {name:'Dratini', descriptions: 'Dipendente sempre puntuale e ordianta un po troppo severa con se e Snorlax', url:'https://cdn-icons-png.flaticon.com/512/188/188996.png' },
    {name:'Mew', descriptions: 'Capo area molto socievole e solare, molte volte rimane anche dopo il fine turno per cercare far i che ia tutto perffetto', url:'https://cdn-icons-png.flaticon.com/512/188/188997.png' },
]


pokemon.forEach((poke)=>{
    let div = document.createElement('div');
    div.classList.add('moved')
    div.style.backgroundImage = `url(${pokemon.url})`;
    circle.appendChild(div);
});

let MoveP = document.querySelectorAll('.movved');
let check = false;
opener.addEventListener('click',()=>{
    if (check == false){
        opener.style.transform = `rotate(45deg)`;
        MoveP.forEach((moved, i)=>{
            let angle = (360*i)/MoveP.length;
            moved.style.transform =`rotate(${angle}deg) translate(250px) rotate(-${angle}deg)`;
        });
        check = true;

    }else{
        check= false 
        opener.style.transform = `rotate(0deg)`;
        MoveP.forEach((moved, i )=>{
            moved.style.transform = `rotate(0deg) translate(0px)`;
        });
        flipCard.classList.add('d-none')
    }
});

let innerFace = document.querySelector('#inner-face');
let cardName = document.querySelector('#card-name');
let descript = document.querySelector('#description');

MoveP.forEach((moved , i )=>{
    moved.addEventListener('click',()=>{
        flipCard.classList.remove('d-none');
        let pok = pokemon[i];
        innerFace.style.backgroundImage = `url (${pokemon.url})`;
        cardName.innerHTML = pokemon.name;
        descript.innerHTML = pokemon.descriptions;
    })
})
