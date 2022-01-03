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
const modal = document.querySelector(".modal");
const preview = document.querySelectorAll(".explain-photos img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");
preview.forEach(preview => {
    preview.addEventListener('click', () =>{
            modal.classList.add('open');
            original.classList.add('open');

            const originalSrc = preview.getAttribute("data-original");
            original.src=`./img/${originalSrc}`;/*console.log(originalSrc);*/
            const altText = preview.alt;
            caption.textContent = altText;
    });
});

modal.addEventListener("click", (e) =>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove('open');
        original.classList.remove('open');
    }
});


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