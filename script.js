const pub = document.querySelector('.pub');
window.addEventListener("scroll", ()=>{
    pub.style.display = "none";
})
const menu = document.querySelector('#menu');
const liste = document.querySelector('ul');
menu.addEventListener('click', ()=>{
    if(liste.style.display == "none"){
        liste.style.display ="flex";
    } else {
        liste.style.display = "none";
    }
})
