// =====================================
// SmartBus Bus Reservation System
// Common JavaScript File
// =====================================



// =====================================
// Footer Year Update
// =====================================


const footerYear = document.querySelector(".footer-year");


if(footerYear){

    footerYear.innerHTML = new Date().getFullYear();

}




// =====================================
// Page Load Animation
// =====================================


window.addEventListener("load",()=>{


    document.body.classList.add("fade");


});




// =====================================
// Smooth Scroll Function
// =====================================


function scrollToSection(id){


    const section = document.getElementById(id);


    if(section){

        section.scrollIntoView({

            behavior:"smooth"

        });

    }


}





// =====================================
// Show Message Function
// =====================================


function showMessage(message){


    alert(message);


}





// =====================================
// Mobile Menu Support
// =====================================


const menuLinks = document.querySelectorAll(".nav-menu a");


menuLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        const menu = document.querySelector(".nav-menu");


        if(menu){

            menu.classList.remove("active");

        }


    });


});