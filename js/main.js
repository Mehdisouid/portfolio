const btn_menu = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menu_branding = document.querySelector('.menu-branding');
const menu_nav = document.querySelector('.menu-nav');
const menu_items = document.querySelectorAll('.nav-item')

let menu_showed = false;

btn_menu.addEventListener('click', toggleMenu);


function toggleMenu() {

    if (!menu_showed) {
        btn_menu.classList.add('close')
        menu.classList.add('show')

        menu_branding.classList.add('show')
        menu_nav.classList.add('show')
        menu_items.forEach(item => item.classList.add('close'));
        menu_showed = true ;
    } else {
        btn_menu.classList.remove('close')
        menu.classList.remove('show')

        menu_branding.classList.remove('show')
        menu_nav.classList.remove('show')
        menu_items.forEach(item => item.classList.remove('close'));
        menu_showed = false ;

    }

}