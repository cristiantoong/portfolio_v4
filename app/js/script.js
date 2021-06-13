
// get current year
// const currentDate = new Date;
// const year = document.getElementById('year');
// year.innerHTML = currentDate.getFullYear();


// change bg color when navbar scrolls
const navbar = document.querySelector('.navbar');
const mobileMenu = document.querySelector('.mobile-menu'); 
const navbarMobile = document.querySelector('.navbar-mobile');
const cancelBtn = document.querySelector('.cancel-btn') 
const navbarMobileBtns = document.querySelectorAll('.navbar-mobile__links')

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
    navbarMobile.classList.toggle('show-navbar-mobile');
    console.log('ss')
})

// cancelBtn.addEventListener('click', function(){
//     navbarMobile.classList.remove('show-navbar-mobile');
// })


//closes the navbar when the link clicked
navbarMobileBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
        navbarMobile.classList.remove('show-navbar-mobile');
    })
})