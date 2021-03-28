(()=>{

    //mobile menu
    let mobileMenu = document.querySelector('.menu-icon');
    let mobileMenuList = document.querySelector('.menus-list');
    mobileMenu.addEventListener('click', ()=>{
        if(mobileMenuList.classList.contains('active')){
            mobileMenuList.classList.remove('active');
        }else{
            mobileMenuList.classList.add('active');
        }
    });

})();