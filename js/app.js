/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
 const list = document.getElementById('navbar__list');
 const sections = document.querySelectorAll('section');
 const fragment = document.createDocumentFragment();
 
 // create navbar
 sections.forEach((section) => {
     const li = document.createElement('li');
     const link = document.createElement('a');
     const title = section.getAttribute('data-nav');
     const id = section.getAttribute('id');
     link.href = `#${id}`;
     link.textContent = title;
     link.classList.add('menu__link');
     link.addEventListener('click', (e) => {
         e.preventDefault();
         section.scrollIntoView({
             behavior: 'smooth',
         });
     })
     li.appendChild(link);
     fragment.appendChild(li);
 })
 list.appendChild(fragment);

 //make active and highlight link
 window.addEventListener("scroll", () => {
     sections.forEach(section => {
        // use built in function to get bounding of element
         const top = section.getBoundingClientRect().top;
         const link = document.querySelector(`a[href="#${section.id}"]`);
         if (top > 0 && top < 250) {
             section.classList.add('your-active-class');
             link.classList.add('active');
         } else {
             section.classList.remove('your-active-class');
             link.classList.remove('active');
         }
     })
 })
 
 
 

 