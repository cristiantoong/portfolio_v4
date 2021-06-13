
// get current year
// const currentDate = new Date;
// const year = document.getElementById('year');
// year.innerHTML = currentDate.getFullYear();


// change bg color when navbar scrolls
const navbar = document.querySelector('.navbar');
const mobileMenu = document.querySelector('.mobile-menu'); 
const navbarMobile = document.querySelector('.navbar-mobile');
const cancelBtn = document.querySelector('.cancel-btn') 

window.onscroll = function(){
    var scrollPos = window.scrollY;
    if (scrollPos > 100){
        navbar.classList.add('active');
    }
    else {
        navbar.classList.remove('active');
    }
}

mobileMenu.addEventListener('click', function(){
    navbarMobile.classList.add('show-navbar-mobile');
})

cancelBtn.addEventListener('click', function(){
    navbarMobile.classList.remove('show-navbar-mobile');
})

