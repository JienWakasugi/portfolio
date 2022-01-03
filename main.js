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

//modal
/*const modalWrapper = document.querySelector('.modal-wrapper');
const images = document.querySelectorAll('.image');
const modalImage = document.querySelector('.modal-image');

images.forEach(function(image) {
    image.addEventListener('click', function() {
         modalWrapper.classList.add('show');
         modalImage.classList.add('show');

         var imageSrc = image.getAttribute('data-src');
         modalImage.src = imageSrc;
    });
});

modalWrapper.addEventListener('click', function() {
    if (this.classList.contains('show')) {
         this.classList.remove('show');
         modalImage.classList.remove('show');
    }
});*/