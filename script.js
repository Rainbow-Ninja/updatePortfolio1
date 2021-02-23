const open = document.getElementById('open');
const close = document.getElementById('close');
const homePage = document.querySelector('#home');
const aboutPage = document.querySelector('#about');
const projectPage = document.querySelector('#projects');
const contactPage = document.querySelector('#contact');


open.addEventListener('click', () => {
    const sectOpen = document.querySelectorAll("section");
    sectOpen.forEach(el => el.classList.add('show-nav'));
})

close.addEventListener('click', () => {
    const sectClose = document.querySelectorAll("section");
    sectClose.forEach(el => el.classList.remove('show-nav'));
});

function focusHome(){
    const sectIdx = document.querySelectorAll("section");
    sectIdx.forEach(el => {
        el.style.zIndex = -1;
        el.style.opacity = 0;
        // el.style.display = "none";
        el.classList.remove('show-nav');
    });
    document.getElementById('home').setAttribute(
        "style", "zIndex: 100; opacity: 1;");
    let blip = document.getElementById('home');
}

function focusAbout(){
    const sectIdx = document.querySelectorAll("section");
    sectIdx.forEach(el => {
        el.style.zIndex = -1;
        el.style.opacity = 0;
        // el.style.display = "none";
        el.classList.remove('show-nav');
    });
    document.getElementById('about').setAttribute(
        "style", "zIndex: 100; opacity: 1;");
}

function focusEd(){
    const sectIdx = document.querySelectorAll("section");
    sectIdx.forEach(el => {
        el.style.zIndex = -1;
        el.style.opacity = 0;
        // el.style.display = "none";
        el.classList.remove('show-nav');
    });
    document.getElementById('edu').setAttribute(
        "style", "zIndex: 100; opacity: 1;");
}

function focusProjects(){
    const sectIdx = document.querySelectorAll("section");
    sectIdx.forEach(el => {
        el.style.zIndex = -1;
        el.style.opacity = 0;
        // el.style.display = "none";
        el.classList.remove('show-nav');
    });
    document.getElementById('projects').setAttribute(
        "style", "zIndex: 100; opacity: 1;");
}

function focusContact(){
    const sectIdx = document.querySelectorAll("section");
    sectIdx.forEach(el => {
        el.style.zIndex = -1;
        el.style.opacity = 0;
        // el.style.display = "none";
        el.classList.remove('show-nav');
    });
    document.getElementById('contact').setAttribute(
        "style", "zIndex: 100; opacity: 1;");
}


// expanding cards
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

