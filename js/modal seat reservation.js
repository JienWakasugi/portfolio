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
            original.src=`./img/seat_reservation/${originalSrc}`;/*console.log(originalSrc);*/
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