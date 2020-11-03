const containerSlider = document.querySelector(".main-slider");
const paginationSlider = containerSlider.querySelectorAll(".slider-pagination-item");
const itemSlider = containerSlider.querySelectorAll(".slider-item");

for(let index in paginationSlider){
   
    if(paginationSlider.hasOwnProperty(index)){
        paginationSlider[index].addEventListener("click", function (evt) {
           evt.preventDefault();

           for(let index in paginationSlider){
                if(paginationSlider.hasOwnProperty(index)){
                    paginationSlider[index].classList.remove("slider-pagination-item--active");
                }
            }

            for(let index in itemSlider){
                if(itemSlider.hasOwnProperty(index)){
                    itemSlider[index].classList.remove("slider-item--active");
                }
            }
            paginationSlider[index].classList.add("slider-pagination-item--active");
            itemSlider[index].classList.add("slider-item--active");
        });
    }
}