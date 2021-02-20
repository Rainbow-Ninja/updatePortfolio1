const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));



function focusHome(){
    document.getElementById('home').style.zIndex=10;
    document.getElementById('about').style.zIndex=1;
    document.getElementById('projects').style.zIndex=1;
    document.getElementById('contact').style.zIndex=1;
}

function focusAbout(){
    document.getElementById('home').style.zIndex=1;
    document.getElementById('about').style.zIndex=10;
    document.getElementById('projects').style.zIndex=1;
    document.getElementById('contact').style.zIndex=1;
}

function focusProjects(){
    document.getElementById('home').style.zIndex=1;
    document.getElementById('about').style.zIndex=1;
    document.getElementById('projects').style.zIndex=10;
    document.getElementById('contact').style.zIndex=1;
}

function focusContact(){
    document.getElementById('home').style.zIndex=1;
    document.getElementById('about').style.zIndex=1;
    document.getElementById('projects').style.zIndex=1;
    document.getElementById('contact').style.zIndex=10;
}