//selecting ul
const gallery = document.querySelector(".gallery");

//select imagbox
const itemboxes = document.querySelectorAll(".portfolio_content")
console.log(itemboxes)


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
})