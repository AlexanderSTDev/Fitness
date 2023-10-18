const contenedorRegistro = document.getElementById('section');
const btnRegistrar = document.querySelectorAll('.registrar');

btnRegistrar.forEach((item) => {
    item.addEventListener('click', registrar);
})

function registrar() {

    const plantilla = `
    <div id="overlay" class="bg-[#0000006b] fixed inset-0 z-[100] grid place-items-center">
    <div
        class="relative w-[90%] mx-auto h-[500px] md:h-[550px] md:flex md:justify-between overflow-auto bg-white rounded-lg">
        <div class="md:w-[40%]">
            <img src="./assets/img/fitness/img4.jpg" alt="" class="w-full md:w-full md:h-full object-cover">
            <span class="text-3xl text-center block font-bold mt-14">
                REGÍSTRESE HOY!!
            </span>
        </div>
        <div class="p-5 text-center md:pb- md:mr-28">
            <h1 class="text-4xl font-bold text-center">Registrarse</h1>
            <p class="text-slate-500 [text-wrap:balance] my-4">Crea una cuenta para comenzar a practicar una
                rutina personalizada.</p>

            <form action="" id="form" class="flex flex-col gap-8 text-left">
                <div>
                    <label for="name" class="block mb-2">Nombres Completos <span
                            class="text-red-600">*</span></label>
                    <input type="text" id="name" placeholder="Ingresa tu nombre"
                        class="border outline-none md:border-0 md:border-b-2 border-black p-2 w-full" required>
                </div>
                <div>
                    <label for="email" class="block mb-2">Correo Electronico <span
                            class="text-red-600">*</span></label>
                    <input type="email" id="email" placeholder="Ingrese un correo electronico"
                        class="border outline-none md:border-0 md:border-b-2 border-black p-2 w-full" required>
                </div>
                <div>
                    <label for="number" class="block mb-2">Numero de Telefono <span
                            class="text-red-600">*</span></label>
                    <input type="text" id="number" placeholder="Ingrese un número de Telefono"
                        class="border outline-none md:border-0 md:border-b-2 border-black p-2 w-full" required>
                </div>
                <div>
                    <label for="password" class="block mb-2">Contraseña <span
                            class="text-red-600">*</span></label>
                    <input type="password" id="password" placeholder="Ingresar una contraseña"
                        class="border outline-none md:border-0 md:border-b-2 border-black p-2 w-full" required>
                    <span class="text-red-600 text-sm block md:pt-2">Asegurese de poner mayúsculas,
                        minúsculas,
                        números y
                        caracteres especiales.</span>
                </div>
                <div>
                    <label for="confirmpassword" class="block mb-2">Confirmar contraseña <span
                            class="text-red-600">*</span></label>
                    <input type="password" id="confirmpassword" placeholder="Confirmar contraseña"
                        class="border outline-none md:border-0 md:border-b-2 border-black p-2 w-full" required>
                </div>
                <button type="submit"
                    class="py-3 px-7 md:py-3 md:px-7 border-2 border-black rounded-full font-bold hover:text-white hover:bg-black duration-500 md:w-[50%] mx-auto mb-7">Registrarse</button>
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

    contenedorRegistro.classList.remove('ocultar-registro');
    contenedorRegistro.innerHTML = plantilla;

    const cerrar = document.querySelectorAll('.cerrar');

    cerrar.forEach((item) => {
        item.addEventListener('click', () => {
            contenedorRegistro.classList.add('ocultar-registro');
        });
    });
}