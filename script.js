const pub = document.querySelector('.pub');
window.addEventListener("scroll", ()=>{
    pub.style.display = "none";
})
const menu = document.querySelector('#menu');
const liste = document.querySelector('ul');
menu.addEventListener('click', ()=>{
    alert("Yeah");
    liste.style.display ="flex";
})
