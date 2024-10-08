let logo2 = document.querySelector('.logo2')

let logo=false

logo2.addEventListener('click',()=>{
    if (logo==false) {
        logo2.style.transform='rotateX(180deg)'
        logo=true
    }else{
        logo=false
        logo2.style.transform='rotateX(0deg)'
    }
})


// swiper
    
let reviw=[
    {user: 'Fatima', descrizione: `Ottimi Prodotti`, rank:5},
     {user: 'Vincenzo', descrizione: `prodotti rovinati e arrivati in ritardo`, rank:1},
    {user: 'Antonella', descrizione: `Qualità prezzo`, rank:3},
]


let Wrap = document.querySelector('.swiper-wrapper')

reviw.forEach( (recensione)=>{
    let div = document.createElement('div');
    div.classList.add('swiper-slide')
    div.innerHTML= ` 
                    <div class="card-rec">
                            <p class="lead le text-center">
                               ${recensione.descrizione}
                            </p>
                            <p class="h4p text-center">${recensione.user}</p>
                            <div class="d-flex justify-content-center star">
                              
                            </div>
                      </div>`;
      Wrap.appendChild(div);
});


let stelle = document.querySelectorAll('.star');

stelle.forEach((star, index)=>{
    for(let i = 1; i <= reviw[index].rank; i++ ){
        let icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-star');
        star.appendChild(icon)
    }

    let diff = 5 - reviw[index].rank;

    for(let i = 1; i <= diff; i++ ){
        let icon = document.createElement('i');
        icon.classList.add('fa-regular', 'fa-star');
        star.appendChild(icon)
    }

});



const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: "coverflow",
    grabCursor: true,
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });