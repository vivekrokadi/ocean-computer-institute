document.addEventListener("DOMContentLoaded", () => {
    // Sidebar menu functionality
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menu-item"); // Ensure correct class name
    const close = document.querySelector(".close");
    const sidebar = document.querySelector(".sidebar");

    menu.addEventListener("click", () => {
        sidebar.classList.add("show");
        sidebar.classList.remove("hide");
    });

    close.addEventListener("click", () => {
        sidebar.classList.add("hide");
    });

    // Close sidebar when menu items are clicked
    menuItems.forEach((item) => {
        item.addEventListener("click", () => {
            sidebar.classList.add("hide");
        });
    });

    // Carousel functionality
    const carousel = document.getElementById("carousel");
    if (carousel) { // Ensure carousel exists before running script
        const slides = carousel.children; 
        const slideWidth = slides[0].offsetWidth; 
        let scrollAmount = 0;
        const interval = 2000;

        setInterval(() => {
            if (scrollAmount >= carousel.scrollWidth - carousel.offsetWidth) {
                scrollAmount = 0; 
            } else {
                scrollAmount += slideWidth;
            }

            carousel.scrollTo({
                left: scrollAmount,
                behavior: "smooth",
            });
        }, interval);
    }
});
