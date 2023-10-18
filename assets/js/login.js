const btnRegistrar = document.querySelectorAll('.registrar');
const registro = document.querySelector('#section');

btnRegistrar.forEach((item) => {
    item.addEventListener('click', registrar);
})


/**
 * The function "registrar" removes the class "ocultar-registro" from the element with the id
 * "registro" and adds an event listener to each element with the class "cerrar" that adds the class
 * "ocultar-registro" to the element with the id "registro" when clicked.
 */
function registrar() {
    const cerrar = document.querySelectorAll('.cerrar');
    registro.classList.remove('ocultar-registro');

    cerrar.forEach((item) => {
        item.addEventListener('click', () => {
            registro.classList.add('ocultar-registro');
        });
    });
};