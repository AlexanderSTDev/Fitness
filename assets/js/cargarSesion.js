const contenedorSesion = document.getElementById('section-iniciar');
const btnIniciar = document.querySelectorAll('.iniciar');

btnIniciar.forEach((item) => {
    item.addEventListener('click', iniciar);
});

function iniciar() {

    const plantilla = `
        <div id="overlay" class="bg-[#0000006b] fixed inset-0 z-[100] grid place-items-center">
                <div
                    class="relative w-[90%] md:w-[70%] mx-auto h-[500px] md:h-[550px] md:flex md:justify-between overflow-auto bg-white rounded-lg">
                    <img src="./assets/img/fitness/img4.jpg" alt="" class="w-full md:w-[40%] md:h-full object-cover">
                    <div class="p-5 text-center md:pb- md:mr-28 md:w-[40%]">
                        <h1 class="text-4xl font-bold text-center">Iniciar Sesión</h1>
                        <p class="text-slate-500 [text-wrap:balance] my-4 md:my-8">Ingresa tus credenciales</p>
                        <form action="" id="form" class="flex flex-col gap-8 text-left">
                            <div>
                                <label for="correo" class="block mb-2">Correo Electronico <span
                                        class="text-red-600">*</span></label>
                                <input type="email" id="correo" placeholder="Ingrese un correo electronico"
                                    class="border outline-none md:border-0 md:border-b-2 border-black p-2 w-full" required>
                            </div>
                            <div>
                                <label for="contraseña" class="block mb-2">Contraseña <span
                                        class="text-red-600">*</span></label>
                                <input type="password" id="contraseña" placeholder="Ingresar una contraseña"
                                    class="border outline-none md:border-0 md:border-b-2 border-black p-2 w-full" required>

                            </div>
                            <div id="mensaje-error" class="text-red-500 text-sm"></div>
                            <button type="submit"
                                class="py-3 px-7 md:py-3 md:px-7 border-2 border-black rounded-full font-bold hover:text-white hover:bg-black duration-500 md:w-[60%] mx-auto mb-7">Iniciar
                                sesión</button>
                        </form>
                    </div>
                    <div
                        class="inline-block float-right pb-5 pr-5 text-lg cursor-pointer text-black font-bold md:hidden cerrar">
                        <button>Cerrar</button>
                    </div>
                    <div class="hidden md:block absolute top-5 right-6 cursor-pointer text-black cerrar" id="">
                        <i class="bx bx-x bx-lg"></i>
                    </div>
                </div>
            </div>
    `;

    contenedorSesion.classList.remove('ocultar-registro');
    contenedorSesion.innerHTML = plantilla;

    const formulario = document.getElementById('form');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        validarUsuario();
    });

    function validarUsuario() {
        const correo = document.getElementById('correo').value;
        const contrasena = document.getElementById('contraseña').value;
        const mensajeError = document.getElementById('mensaje-error');
        const nombreUsuarioElement = document.getElementById('nombre-usuario');
        // Limpiar mensajes de error previos
        mensajeError.textContent = '';
        nombreUsuarioElement.textContent = '';

        const usuariosDB = [
            { nombre: 'Steven', correo: 'admin@example.com', password: '123456789', },
            { nombre: 'user', correo: 'user@example.com', password: '123456789', },
            { nombre: 'user', correo: 'user2@example.com', password: '123456789', },
        ];

        const usuarioEncontrado = usuariosDB.find(user => user.correo === correo && user.password === contrasena);

        if (!correo || !contrasena) {
            mensajeError.textContent = 'Por favor, completa todos los campos.';
        } else if (usuarioEncontrado) {
            nombreUsuarioElement.textContent = `Bienvenido, ${usuarioEncontrado.nombre}!`;
            contenedorSesion.classList.add('ocultar-registro');
        } else {
            mensajeError.textContent = 'Credenciales incorrectas. Por favor, intenta nuevamente.';
        }

        /* if (correo === 'usuarioEjemplo@gmail.com' && contrasena === 'contrasenaEjemplo') {
            alert('Inicio de sesión exitoso!');
            contenedorSesion.classList.add('ocultar-registro');
        } else {
            alert('Credenciales incorrectas. Por favor, intenta nuevamente.');
        } */
    };

    const cerrarSesion = document.querySelectorAll('.cerrar');

    cerrarSesion.forEach((item) => {
        item.addEventListener('click', () => {
            contenedorSesion.classList.add('ocultar-registro');
        });
    });
};