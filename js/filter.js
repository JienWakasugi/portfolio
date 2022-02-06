const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio_nav").children;
  
for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-filter")
  
        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
            }
            if (target == "all") {
                items[k].style.display = "block";
            }
        }
  
    })
}

//selecting ul
//const gallery = document.querySelector(".gallery");

//select imagbox
//const itemboxes = document.querySelectorAll(".portfolio_content")
//console.log(itemboxes)

/*
gallery.addEventListener("click", (e)=>{
    console.log(e)



    if(e.target.classList.contains("filter")){
        //
        gallery.querySelector(".active").classList.remove("active");

        e.target.classList.add("active");

        const filterValue = e.target.getAttribute("data-filter");
        console.log(filterValue)

        itemboxes.forEach(item =>{

            if(item.classList.contains(filterValue) || filterValue === "all"){
                item.classList.add("show");

                item.classList.remove("hide");
               
            }
            else {
                item.classList.add("hide")
            }


        })
    }
})*/