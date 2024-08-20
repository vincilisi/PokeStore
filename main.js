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
