const navOpen = document.getElementById('navopen');
const navClose = document.getElementById('navclose');
const navMenu = document.getElementById('nav-menu');

if (navOpen) {
    navOpen.addEventListener('click', () => {
        navMenu.classList.remove('ocultar-menu');
        navMenu.classList.add('scale-in-tr');
        navMenu.classList.remove('scale-out-tr');
    });
};

if (navClose) {
    navClose.addEventListener('click', () => {
        // navMenu.classList.add('ocultar-menu');
        navMenu.classList.remove('scale-in-tr');
        navMenu.classList.add('scale-out-tr');
    });
};

window.addEventListener('scroll', () => {
    if (window.innerWidth >= 375 && window.innerWidth <= 768) {
        const scrollY = window.scrollY;
        if (scrollY > 100) {
            navOpen.style.color = '#000';
        } else {
            navOpen.style.color = '#fff';
        }
    } else {
        navOpen.style.color = '#000';
    }
});


const submenu = document.querySelectorAll('.sub-menu');

submenu.forEach(submenu => {
    submenu.addEventListener('click', () => {
        submenu.classList.toggle('arrow');

        let height = 0;
        let menu = submenu.nextElementSibling;

        if (menu.clientHeight === 0) {
            height = menu.scrollHeight;
        }
        menu.style.height = `${height}px`;
        console.log(submenu.style.height);
    });
})