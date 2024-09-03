//js for responsive navigation sidebar menu
var menu = document.querySelector('ul');
var menuBtn = document.querySelector('#menu-btn');
var closeBtn = document.querySelector('#cross');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});
closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
});