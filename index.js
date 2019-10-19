

function home(){
    $('.navBarObjects').on('click','.nameNav', function() {
        $('.introBox').show();
        $('.aboutMeBox').hide();
        $('.contactBox').hide();
        $('.projectBox').hide();
        $('.toggleCls').removeClass("toggleCls");
    });
}


function aboutMeAppear(){
    $('.navBarObjects').on('click','.aboutNav', function() {
        $('.aboutMeBox').show();
        $('.introBox').hide();
        $('.contactBox').hide();
        $('.projectBox').hide();
        $('.toggleCls').removeClass("toggleCls");
    });
}


function contactMeAppear(){
    $('.navBarObjects').on('click','.contactNav', function() {
        $('.contactBox').show();
        $('.introBox').hide();
        $('.projectBox').hide();
        $('.aboutMeBox').hide();
        $('.toggleCls').removeClass("toggleCls");
    });
}


function projectsAppear(){
    $('.navBarObjects').on('click','.projectsNav', function() {
        $('.projectBox').show();
        $('.introBox').hide();
        $('.contactBox').hide();
        $('.aboutMeBox').hide();
        $('.toggleCls').removeClass("toggleCls");
    });
}


function toggleClass() {
    $('.navBarObjects').on('click', '.hamIcon', function () {
        $('.toggleCls').show();
        let menu = document.querySelector(".menuItems");
        menu.classList.toggle("toggleCls");
        console.log('Hamburger toggle ran');
    });
}


function initializeStart(){
    $('.aboutMeBox').hide();
    $('.projectBox').hide();
    $('.contactBox').hide();
    home();
    aboutMeAppear();
    contactMeAppear();
    toggleClass();
    projectsAppear();
}


initializeStart();


