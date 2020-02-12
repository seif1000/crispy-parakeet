const nav  = document.querySelector('nav')
const bars = document.querySelector('.bars')
let show  = false;

bars.addEventListener('click',()=>{
    if(show){
        nav.style.height = '50px' ;
        show = false;
    }else{
        nav.style.height = '150px' ;
        show=true;
    }
    
})