const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const sideBar = document.querySelector(".sidebar");
const menuLinks = document.querySelectorAll(".menulinks a")

menu.addEventListener("click",()=>{
    sideBar.classList.add("show")
    sideBar.classList.remove("hide")
})
close.addEventListener("click",()=>{
    sideBar.classList.add("hide")
})

menuLinks.forEach((item)=>{
    item.addEventListener("click",()=>{
        sideBar.classList.add("hide")
    })
})




// document.addEventListener("DOMContentLoaded", function () {
//     const logoContainer = document.querySelector(
//       ".animate-infinite-scroll"
//     );
//     const logos = logoContainer.querySelectorAll("div");
//     const totalWidth = Array.from(logos).reduce(
//       (acc, logo) => acc + logo.offsetWidth,
//       0
//     );
//     logoContainer.style.width = `${totalWidth}px`;
//   });