const form = document.getElementById('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const error = document.getElementById('error');


function processFormData(e){
    

    let errorMessages = [];
    
    //Validate Form
    if(fullName.value == "" || fullName.value == null){
        errorMessages.push('Name is required');
        fullName.style.border = "2px solid #ed1a52";
    } else {
        fullName.style.border = "2px solid #ffffff";
    }
    if (email.value == "" || email.value == null) {
        errorMessages.push('Email is required');
        email.style.border = "2px solid #ed1a52";
    } else {
        email.style.border = "2px solid #ffffff";
    }

    if (message.value == "" || message.value == null) {
        errorMessages.push('Message is required');
        message.style.border = "2px solid #ed1a52";
    } else {
        message.style.border = "2px solid #ffffff";
    }

    // if messages array length has an item
    if(errorMessages.length > 0) {
        e.preventDefault();
        error.innerText = errorMessages.join('\n')
    }

}

// Event Listener
form.addEventListener('submit', processFormData);