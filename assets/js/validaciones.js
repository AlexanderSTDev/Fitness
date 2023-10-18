const formulario = document.getElementById('form');
const section = document.getElementById('section');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    validarFormulario();
});


function validarFormulario() {
    // Validar campo nombres
    const nombres = document.getElementById('name').value;
    if (nombres.length < 3) {
        alert('El campo nombres debe tener al menos 3 caracteres.');
        return false;
    }

    // Validar campo correo
    const correo = document.getElementById('email').value;
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexCorreo.test(correo)) {
        alert('El correo electrónico no es válido.');
        return false;
    }

    // Validar campo número
    const numero = document.getElementById('number').value;
    const regexNumero = /^0?[0-9]{1,9}$/;
    if (!regexNumero.test(numero)) {
        alert('El número de teléfono no es válido.');
        return false;
    }

    // Validar campo contraseña
    const contraseña = document.getElementById('password').value;
    const confirmarContraseña = document.getElementById('confirmpassword').value;
    if (contraseña.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return false;
    } else if (contraseña !== confirmarContraseña) {
        alert('Las contraseñas no coinciden.');
        return false;
    }
    // Si todos los campos son válidos, se envía el formulario
    alert("Gracias por registrarte.");
    section.classList.add('ocultar-registro');
    document.getElementById('form').reset();
    return true;
}
