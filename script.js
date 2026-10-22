document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    const usuario = document.getElementById("usuario");
    const contrasena = document.getElementById("contrasena");
    const verPassword = document.getElementById("verPassword");
    const mensaje = document.getElementById("mensaje");

    const pantallaLogin = document.getElementById("pantallaLogin");
    const pantallaBienvenida = document.getElementById("pantallaBienvenida");
    const cerrarSesion = document.getElementById("cerrarSesion");


    const usuarioCorrecto = "estudiante";
    const contrasenaCorrecta = "Olimpiada2026";


    verPassword.addEventListener("click", () => {
        const estaOculta = contrasena.type === "password";

        contrasena.type = estaOculta ? "text" : "password";

        verPassword.textContent = estaOculta ? "👁" : "👁";
        verPassword.setAttribute(
            "aria-label",
            estaOculta ? "Ocultar contraseña" : "Mostrar contraseña"
        );
    });


    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nombreIngresado = usuario.value.trim();
        const passwordIngresado = contrasena.value;


        mensaje.textContent = "";

        if (
            nombreIngresado === usuarioCorrecto &&
            passwordIngresado === contrasenaCorrecta
        ) {

            pantallaLogin.hidden = true;
            pantallaBienvenida.hidden = false;


            formulario.reset();
            contrasena.type = "password";
            verPassword.textContent = "👁";
            verPassword.setAttribute(
                "aria-label",
                "Mostrar contraseña"
            );
        } else {

            mensaje.textContent =
                "Usuario o contraseña incorrectos.";

            contrasena.value = "";
            contrasena.focus();
        }
    });


    cerrarSesion.addEventListener("click", () => {
        pantallaBienvenida.hidden = true;
        pantallaLogin.hidden = false;

        formulario.reset();
        mensaje.textContent = "";

        contrasena.type = "password";
        verPassword.textContent = "👁";
        verPassword.setAttribute(
            "aria-label",
            "Mostrar contraseña"
        );

        usuario.focus();
    });
});
