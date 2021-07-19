window.addEventListener('DOMContentLoaded',function(){

var menu = document.querySelector('nav div')
var mBtn = document.querySelector('nav a')

    
    mBtn.addEventListener('click',function(){
        if(menu.className !='active'){
            menu.className='active'
        }else{
            menu.className=''
        }
    })
});