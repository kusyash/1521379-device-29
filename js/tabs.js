const containerTabs = document.querySelector(".main-information-tabs");
const menuTabs = containerTabs.querySelectorAll(".tabs-menu-item");
const contentTabs = containerTabs.querySelectorAll(".tabs-item");

for(let index in menuTabs){
   
    if(menuTabs.hasOwnProperty(index)){
        menuTabs[index].addEventListener("click", function (evt) {
           evt.preventDefault();

           for(let index in menuTabs){
                if(menuTabs.hasOwnProperty(index)){
                    menuTabs[index].classList.remove("tabs-menu-item--active");
                }
            }

            for(let index in contentTabs){
                if(contentTabs.hasOwnProperty(index)){
                    contentTabs[index].classList.remove("tabs-item--active");
                }
            }
            menuTabs[index].classList.add("tabs-menu-item--active");
            contentTabs[index].classList.add("tabs-item--active");
        });
    }
}