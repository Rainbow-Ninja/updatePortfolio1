const open = document.getElementById('open');
const close = document.getElementById('close');
const homePage = document.querySelector('#home');
const aboutPage = document.querySelector('#about');
const projectPage = document.querySelector('#projects');
const contactPage = document.querySelector('#contact');

open.addEventListener('click', () => {
    homePage.classList.add('show-nav');
    aboutPage.classList.add('show-nav');
    projectPage.classList.add('show-nav');
    contactPage.classList.add('show-nav');
})
// close.addEventListener('click', () => container.classList.remove('show-nav'));
close.addEventListener('click', () => {
    homePage.classList.remove('show-nav');
    aboutPage.classList.remove('show-nav');
    projectPage.classList.remove('show-nav');
    contactPage.classList.remove('show-nav');
});


function focusHome(){
    const sectIdx = document.querySelectorAll("section");
    sectIdx.forEach(el => {
        el.style.zIndex = -1;
        el.classList.remove('show-nav');
    });
    document.getElementById('home').style.zIndex=1;
    document.querySelector('.circle-container').style.zIndex=100;

}

function focusAbout(){
    const sectIdx = document.querySelectorAll("section");
    sectIdx.forEach(el => {
        el.style.zIndex = -1;
        el.classList.remove('show-nav');
    });
    document.getElementById('about').style.zIndex=1;

    document.querySelector('.circle-container').style.zIndex=100;
    homePage.classList.remove('show-nav');
}

function focusProjects(){
    const sectIdx = document.querySelectorAll("section");
    sectIdx.forEach(el => {
        el.style.zIndex = -1;
        el.classList.remove('show-nav');
    });
    document.getElementById('projects').style.zIndex=1;
    document.querySelector('.circle-container').style.zIndex=100;

    // homePage.classList.remove('show-nav');
}

function focusContact(){
    // document.getElementById('home').setAttribute(
    //     "style", "zIndex: -1; opacity: 0;"
    // );
    // document.getElementById('about').setAttribute(
    //     "style", "zIndex: -1; opacity: 0;"
    // );
    // document.getElementById('projects').setAttribute(
    //     "style", "zIndex: -1; opacity: 0;"
    // );
    // document.getElementById('contact').setAttribute(
    //     "style", "zIndex: 10; opacity: 1;"
    // );
    const sectIdx = document.querySelectorAll("section");
    sectIdx.forEach(el => {
        el.style.zIndex = -1;
        el.classList.remove('show-nav');
    });
    document.getElementById('contact').style.zIndex=1;
    document.querySelector('.circle-container').style.zIndex=100;
    homePage.classList.remove('show-nav');
}