var accordions = document.querySelectorAll(".accordion");


accordions.forEach(function(accordion){
    accordion.addEventListener('click', function(){

        //sibling of accordion element w/c is the accordion-content
        let content = this.nextElementSibling;

       if(content.style.maxHeight){
        // accordion is open, we need to close it
        content.style.maxHeight = null;
       } else {
        // accordion is closed,  so open it
        content.style.maxHeight = content.scrollHeight + "px";
        
       }
    });
});


