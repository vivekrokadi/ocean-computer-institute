const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-items");
const close = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

menu.addEventListener("click",()=>{
    sidebar.classList.add("show");
    sidebar.classList.remove("hide");  
})
close.addEventListener("click",()=>{
    sidebar.classList.add("hide");
})

menuItems.forEach((item) => {
    console.log(item);
    item.addEventListener("click",()=>{
    sidebar.classList.add("hide");
    });
});
