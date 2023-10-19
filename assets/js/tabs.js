const tabs = document.querySelectorAll('.btn-tab');
const pestanas = document.querySelectorAll('.pestana');

tabs.forEach((tab, index) => {

    tab.addEventListener('click', (e) => {

        tabs.forEach(tab => {
            tab.classList.remove('active-tab');
        });
        tab.classList.add('active-tab');

        const linea = document.querySelector('.linea');
        linea.style.width = e.target.offsetWidth + 'px';
        linea.style.left = e.target.offsetLeft + 'px';

        pestanas.forEach(pestana => {
            pestana.classList.remove('active-pestanas');
        });
        pestanas[index].classList.add('active-pestanas');
    });
});