
// get current year
// const currentDate = new Date;
// const year = document.getElementById('year');
// year.innerHTML = currentDate.getFullYear();


// change bg color when navbar scrolls
const navbar = document.querySelector('.navbar'); 

window.onscroll = function(){
    var scrollPos = window.scrollY;
    if (scrollPos > 100){
        navbar.classList.add('active');
    }
    else {
        navbar.classList.remove('active');
    }
}