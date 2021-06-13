// projects
const projects = [
    {
        id: 1, 
        img: "./images/beautiful escape stylescape.jpg",
        alt: "beautiful escape resort",
        category: "frontend",
    },
    {
        id: 2, 
        img: "./images/chatisfy mockup.png",
        alt: "chatisfy",
        category: "designs",
    },
    {
        id: 3, 
        img: "./images/feelthewavessurf.png",
        alt: "feel the waves surf",
        category: "frontend",
    },
    {
        id: 4, 
        img: "./images/html-email.PNG",
        alt: "html email",
        category: "frontend",
    },
    {
        id: 5, 
        img: "./images/cat_steel.PNG",
        alt: "cat steel corp",
        category: "frontend",
    },
    {
        id: 6, 
        img: "./images/shevi cafe desktop.png",
        alt: "shevi cafe",
        category: "frontend",
    },

]

const projectsModal = [
    {
        id: 1,
        img: "./images/beautiful escape stylescape.jpg",
        title: "Beautiful Escape Private Resort",
        title1: "TECHNOLOGIES",
        technologies: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma"],
        github: "https://github.com/cristiantoong/beautifulescaperesort",
        website:"https://cristiantoong.github.io/beautifulescaperesort/",
        imgMockup: "images/Beautiful Escape Resort Device Mockup.png",
        
    },
    {
        id: 1,
        img: "./images/chatisfy mockup.png",
        title: "Chatisfy",
        title1: "TECHNOLOGIES",
        technologies: ["Webflow", "Figma"],
        github: "https://github.com/cristiantoong/beautifulescaperesort",
        website:"https://cristiantoong.github.io/beautifulescaperesort/",
        imgMockup: "images/Beautiful Escape Resort Device Mockup.png",
        
    },
]

const cards = document.getElementById('cards');
const btnContainer = document.querySelector("#filter-btns");
const filterBtns = document.querySelectorAll('#filter-btn');
// console.log(filterBtns);

// load items
window.addEventListener('DOMContentLoaded', function(){

    //displayProjects(projects);

    //displayProjects2(projects);

    //modal();

    // const categories = projects.map(function(project){
    //     return project.category
    // });
    // console.log(categories);

    //displayMenuButtons();
    

});



function displayProjects(menuItems){
    let i = 0;
    while (i < menuItems.length){
            cards.innerHTML += `
            <div class="projects__card" id="card">
            <img src="${projects[i].img}" alt="${projects[i].alt}">
            </div> 
        `;
        i++;
    }
}

//another way to display objects in html
function displayProjects2(menuItems){
    let displayProject = menuItems.map(function(project, index){
        return `
        <div class="projects__card p${index+1}" id="card">
        <img src="${project.img}" alt="${project.alt}">
        </div> 
    `;
    });

    displayProject = displayProject.join("");
    cards.innerHTML = displayProject;
}
filterItems();


function displayMenuButtons(){
    //Unique categories
    const categories = projects.reduce(function(values,project){
        //console.log(values, item)

        //if values/["all"] does not equal to project category
        if(!values.includes(project.category)){
            values.push(project.category);
        }
        return values

    }, ["all"]);
    
    console.log(categories);

    //Dynamic filter Buttons
    const categoryBtns = categories.map(function(category){
        return `<button class="projects__filter-btn" id="filter-btn" type="button" data-id="${category}">${category}</button>`;
    }).join("");
    console.log(categoryBtns);
    btnContainer.innerHTML = categoryBtns;
    
    filterItems();
    
}


function filterItems(){
    const filterBtns = document.querySelectorAll('#filter-btn');
    // Filter Items
    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e){
            // cards.style.transition = "transform 0.3s ease-in";

            //displays the value of data-id attribute
            console.log(e.currentTarget.dataset.id);

            //triggers dataset id of a button when click
            const category = e.currentTarget.dataset.id;

            const projectCategory = projects.filter(function(project){

                //console.log(project.category)
                if(project.category === category){
                    return project;
                }
                
            });

            //console.log(projectCategory);
            if(category === "all") {
                displayProjects2(projects);
            } else {
                displayProjects2(projectCategory);
            }

            //Display Modal When click
            modal();
            
        });

        
    });

    
}


// MODAL
function modal(){
    const modalExitBtn = document.getElementById('modal-exit-btn');
    const modal = document.getElementById('modal');
    const modals = document.querySelectorAll('.modal');
    const cards1 = document.querySelectorAll('#card');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let modalContent = document.querySelector('.modal-content');
    let modalList = [];
    let counter = 0;
    console.log(cards1)

    // Exit button
    modalExitBtn.addEventListener('click', function(){
        modal.style.display = 'none';
    });


    // Hide modal on outside click
    window.addEventListener('click', function(e){
        if (e.target == modal){
            modal.style.display = 'none'
        } else {
            return false
        }
        modal.classList.toggle('animateShow');

        
    });



    cards1.forEach(function(project, index){
        project.addEventListener('click', function(e){
            //show modal
            modal.style.display = 'block';
            modal.style.transition = 'all 0.5s ease-in;';
            modalContent.style.transition = 'all 0.5s ease-in;';
            modal.classList.toggle('animateShow');
            // console.log(e.target.parentElement, index)

            
            
            // display each project image content when click
            if(e.target.parentElement.classList.contains(`p${index+1}`)){
                modalContent.innerHTML = modals[index].innerHTML;
            }

        });  
    });



    // next and prev buttons for Modal slider
    prevBtn.addEventListener('click', function(){
        counter--;

        if(counter < 0){
            counter = modals.length - 1;
        }

        modalContent.innerHTML = modals[counter].innerHTML;

    })

    nextBtn.addEventListener('click', function(){
        counter++;
        if (counter > modals.length - 1) {
        counter = 0;
        }
        modalContent.innerHTML = modals[counter].innerHTML;
    })
}

//modal();