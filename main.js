const menu_bar = document.querySelector('#menu_bar');
const nav_list = document.querySelector('.nav_list');
const remove = document.querySelector('.fa-xmark');

menu_bar.addEventListener("click", () => {
    nav_list.classList.toggle('active');

});
remove.addEventListener("click", () => {
    nav_list.classList.remove('active');
});