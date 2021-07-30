window.addEventListener('DOMContentLoaded',function(){
    
const toggleBtn = document.querySelector('.navbar_tool');
const menu = document.querySelector('.navbar__menu');

toggleBtn.addEventListener('click',function(){
    menu.classList.toggle('active');
});

})