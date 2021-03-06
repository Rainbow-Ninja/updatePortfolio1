const open = document.getElementById('open');
const close = document.getElementById('close');
const homePage = document.querySelector('#home');
const aboutPage = document.querySelector('#about');
const projPage = document.querySelector('#projects');
const contPage = document.querySelector('#contact');


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
        el.classList.add('hidden');
        // el.style.display = "none";
        // el.style.transform = "translateX(100vw)"
        el.classList.remove('show-nav');
    });
    // document.getElementById('home').classList.remove('hidden');
    homePage.classList.remove('hidden');
    homePage.classList.add('undo');
    homePage.setAttribute("style", "zIndex: 100; opacity: 1;");
}

function focusAbout(){
    const sectIdx = document.querySelectorAll("section");
    sectIdx.forEach(el => {
        el.style.zIndex = -1;
        el.style.opacity = 0;
        el.classList.add('hidden');
        el.classList.remove('show-nav');
    });
    aboutPage.classList.remove('hidden');
    aboutPage.classList.add('show-nav');
    aboutPage.classList.add('undo');
    aboutPage.setAttribute("style", "zIndex: 100; opacity: 1; display: ;")
}

function focusProjects(){
    const sectIdx = document.querySelectorAll("section");
    sectIdx.forEach(el => {
        el.style.zIndex = -1;
        el.style.opacity = 0;
        el.classList.add('hidden');
        el.classList.remove('show-nav');
    });
    projPage.classList.remove('hidden');
    projPage.setAttribute("style", "zIndex: 100; opacity: 1;");
}

function focusContact(){
    const sectIdx = document.querySelectorAll("section");
    sectIdx.forEach(el => {
        el.style.zIndex = -1;
        el.style.opacity = 0;
        el.classList.add('hidden');
        el.classList.remove('show-nav');
    });
    contPage.classList.remove('hidden');
    contPage.setAttribute("style", "zIndex: 100; opacity: 1;");
}

// scrollypics ----------------------------------------------
var scrollDuration = 300;
// paddles
var leftPaddle = document.getElementsByClassName('left-paddle');
var rightPaddle = document.getElementsByClassName('right-paddle');
// get items dimensions
var itemsLength = $('.blip').length;
var itemSize = $('.blip').outerWidth(true);
// get some relevant size for the paddle triggering point
var paddleMargin = 20;

// get wrapper width
var getMenuWrapperSize = function() {
	return $('.menu-wrapper').outerWidth();
}
var menuWrapperSize = getMenuWrapperSize();
// the wrapper is responsive
$(window).on('resize', function() {
	menuWrapperSize = getMenuWrapperSize();
});
// size of the visible part of the menu is equal as the wrapper size 
var menuVisibleSize = menuWrapperSize;

// get total width of all menu items
var getMenuSize = function() {
	return itemsLength * itemSize;
};
var menuSize = getMenuSize();
// get how much of menu is invisible
var menuInvisibleSize = menuSize - menuWrapperSize;

// get how much have we scrolled to the left
var getMenuPosition = function() {
	return $('.carousel').scrollLeft();
};

// finally, what happens when we are actually scrolling the menu
$('.carousel').on('scroll', function() {

	// get how much of menu is invisible
	menuInvisibleSize = menuSize - menuWrapperSize;
	// get how much have we scrolled so far
	var menuPosition = getMenuPosition();

	var menuEndOffset = menuInvisibleSize - paddleMargin;

	// show & hide the paddles 
	// depending on scroll position
	if (menuPosition <= paddleMargin) {
		$(leftPaddle).addClass('hidden');
		$(rightPaddle).removeClass('hidden');
	} else if (menuPosition < menuEndOffset) {
		// show both paddles in the middle
		$(leftPaddle).removeClass('hidden');
		$(rightPaddle).removeClass('hidden');
	} else if (menuPosition >= menuEndOffset) {
		$(leftPaddle).removeClass('hidden');
		$(rightPaddle).addClass('hidden');
    }
});


// scroll to left
$(rightPaddle).on('click', function() {
	$('.carousel').animate( { scrollLeft: menuInvisibleSize}, scrollDuration);
});

// scroll to right
$(leftPaddle).on('click', function() {
	$('.carousel').animate( { scrollLeft: '0' }, scrollDuration);
});
// ---------------------------------------------------------------
// duration of scroll animation
var scrollDuration = 300;
// paddles
var leftPaddle = document.getElementsByClassName('left-paddle');
var rightPaddle = document.getElementsByClassName('right-paddle');
// get items dimensions
var itemsLength = $('.item').length;
var itemSize = $('.item').outerWidth(true);
// get some relevant size for the paddle triggering point
var paddleMargin = 20;

// get wrapper width
var getMenuWrapperSize = function() {
	return $('.menu-wrapper').outerWidth();
}
var menuWrapperSize = getMenuWrapperSize();
// the wrapper is responsive
$(window).on('resize', function() {
	menuWrapperSize = getMenuWrapperSize();
});
// size of the visible part of the menu is equal as the wrapper size 
var menuVisibleSize = menuWrapperSize;

// get total width of all menu items
var getMenuSize = function() {
	return itemsLength * itemSize;
};
var menuSize = getMenuSize();
// get how much of menu is invisible
var menuInvisibleSize = menuSize - menuWrapperSize;

// get how much have we scrolled to the left
var getMenuPosition = function() {
	return $('.menu').scrollLeft();
};

// finally, what happens when we are actually scrolling the menu
$('.menu').on('scroll', function() {

	// get how much of menu is invisible
	menuInvisibleSize = menuSize - menuWrapperSize;
	// get how much have we scrolled so far
	var menuPosition = getMenuPosition();

	var menuEndOffset = menuInvisibleSize - paddleMargin;

	// show & hide the paddles 
	// depending on scroll position
	if (menuPosition <= paddleMargin) {
		$(leftPaddle).addClass('hidden');
		$(rightPaddle).removeClass('hidden');
	} else if (menuPosition < menuEndOffset) {
		// show both paddles in the middle
		$(leftPaddle).removeClass('hidden');
		$(rightPaddle).removeClass('hidden');
	} else if (menuPosition >= menuEndOffset) {
		$(leftPaddle).removeClass('hidden');
		$(rightPaddle).addClass('hidden');
}

	// print important values
	$('#print-wrapper-size span').text(menuWrapperSize);
	$('#print-menu-size span').text(menuSize);
	$('#print-menu-invisible-size span').text(menuInvisibleSize);
	$('#print-menu-position span').text(menuPosition);

});

// scroll to left
$(rightPaddle).on('click', function() {
	$('.menu').animate( { scrollLeft: menuInvisibleSize}, scrollDuration);
});

// scroll to right
$(leftPaddle).on('click', function() {
	$('.menu').animate( { scrollLeft: '0' }, scrollDuration);
});