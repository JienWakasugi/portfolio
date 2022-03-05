//Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY > 0);
});

menu.onclick = () =>{
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
}

//Dark Mode
let darkMode = localStorage.getItem('darkmode');
const darkModeSwitch = document.querySelector('#darkmode_switch');

const enableDarkMode = () => {
    // 1. Add the class to the body
    document.body.classList.add('darkmode');
    // 2. Update darkMode in localStorage
    localStorage.setItem('darkmode', 'enabled');
  }
  
  const disableDarkMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove('darkmode');
    // 2. Update darkMode in localStorage 
    localStorage.setItem('darkmode', null);
  }
   
  // If the user already visited and enabled darkMode
  // start things off with it on
  if (darkMode === 'enabled') {
    enableDarkMode();
  }
  
  // When someone clicks the button
  darkModeSwitch.addEventListener('click', () => {
    // get their darkMode setting
    darkMode = localStorage.getItem('darkmode'); 
    
    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
      enableDarkMode();
    // if it has been enabled, turn it off  
    } else {  
      disableDarkMode(); 
    }
  });

/*
let darkmode = document.querySelector('#darkmode');
darkmode.onclick =() =>{
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}
*/