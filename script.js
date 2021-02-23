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
// const panels = document.querySelectorAll('.panel')

// panels.forEach(panel => {
//     panel.addEventListener('click', () => {
//         removeActiveClasses();
//         panel.classList.add('active');
//     })
// })

// function removeActiveClasses() {
//     panels.forEach(panel => {
//         panel.classList.remove('active');
//     })
// }

/*
  creates a closure that does not pollute global space
*/
(function(el) {
    // so this variable is available only within here
    var minDeltaY;
    // not the recommended way to add events, but the easiest
    el.onwheel = function(e) {
      // we want to eliminate vertical scrolling
      if (e.deltaY) {
        // normalize
        if (minDeltaY > Math.abs(e.deltaY) || !minDeltaY) {
          minDeltaY = Math.abs(e.deltaY);
        }
        // scroll a decent amount
        el.scrollLeft += (e.deltaY / minDeltaY)
          * ((el.scrollWidth - el.clientWidth) * 0.05);
        // do not let other wheel events to fire
        e.stopPropagation();
        e.cancelBubble = true; // same for old IE
        // and we don't want the default action either
        e.preventDefault();
        e.returnValue = false; // same for old IE
      }
    }
    // support browsers that do not support DOM Level 3 wheel
    el.onmousewheel = function(e) {
      // old Internet Explorer
      if (!e) e = window.event;
      // we normalize the value so no need to guess how to convert
      e.deltaY = -e.wheelDelta;
      // we have done enough
      el.onwheel(e);
    }
  })(document.getElementById('carousel'));
  // ^----- we pass "el" to the above function down here!
