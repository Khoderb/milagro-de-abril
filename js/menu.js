(function(){

    const openBottom = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__ul');
    const closeMenu = document.querySelector('.nav__close');
    openBottom.addEventListener('click',()=>{
        menu.classList.add('nav__link--show');
    })

    closeMenu.addEventListener('click',()=>{
        menu.classList.remove('nav__link--show');
    })
    
})()