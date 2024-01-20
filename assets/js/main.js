/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close"); 
const navLInks = document.querySelectorAll(".nav__link"); 

navToggle.addEventListener("click", () =>{
  navMenu.classList.toggle("show-menu")
}); 

navClose.addEventListener("click", () =>{
  navMenu.classList.toggle("show-menu")
}); 



/*=============== REMOVE MENU MOBILE ===============*/
navLInks.forEach(nv =>{
  nv.addEventListener("click", () =>{
    navMenu.classList.toggle("show-menu")
  })
}); 

/*=============== ADD BLUR TO HEADER ===============*/
const head = document.getElementById("header");  

window.addEventListener("scroll", () =>{
  this.scrollY >= 50 ?  head.classList.add("scroll-header")
                     : head.classList.remove("scroll-header")
}); 

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.prevetdefault()

  emailjs.sendForm('service_trxiy7x', 'template_j9np639', '#contact-form', 'fhi4kt8ov3qAs7C_4')
  	.then(() =>{
          // Show sent message
          contactMessage.textContent = 'Message Sent Succesfully ✅'; 

          // Remove message after five seconds
          setTimeout(() =>{
            contactMessage.textContent = ''; 
          }, 3000)
         }), () =>{
         	// Show error message
           contactMessage.textContent = 'Message not sent (service error) ❌';
         }
}

contactForm.addEventListener("submit", sendEmail); 
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
};
window.addEventListener('scroll', scrollUp);  

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]'); 

const scrollActive = () => {
  const scroll = window.pageYOffset  

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if(scroll > sectionTop && scroll <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    } else{
      sectionsClass.classList.remove('active-link')
    }
  })
};   

window.addEventListener('scroll', scrollActive); 

/*=============== SCROLL REVEAL ANIMATION ===============*/
