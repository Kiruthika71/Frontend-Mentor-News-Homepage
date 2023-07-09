const openMenu = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close")
const navUL = document.querySelector(".nav-ul");

openMenu.addEventListener('click', () => {
    navUL.classList.add("open");
});

closeMenu.addEventListener('click', () => {
    navUL.classList.remove("open");
});

