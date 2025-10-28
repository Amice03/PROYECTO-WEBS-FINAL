// Obtener referencias a los elementos clave del DOM
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const feedbackMessage = document.getElementById('feedbackMessage');
const DEFAULT_DASHBOARD_PATH = '../html/dashboard.html';

// ----------------------------------------------------
// OBJETIVO 2: Programar evento SUBMIT del formulario
// ----------------------------------------------------
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página se recargue

        // Limpiar mensajes anteriores
        feedbackMessage.textContent = '';
        feedbackMessage.style.color = '';

        // OBJETIVO 1: Validación de formularios
        if (validarFormulario()) {
            // Si la validación es exitosa, simula el envío (Objetivo 3)
            simularEnvio();
        }
    });
}


// Función de validación (Objetivo 1)
function validarFormulario() {
    const usuario = usernameInput.value.trim();
    const clave = passwordInput.value;

    if (usuario === '') {
        mostrarMensaje('El campo Cédula o Usuario no puede estar vacío.', 'red');
        return false;
    }

    if (clave.length < 6) {
        mostrarMensaje('La contraseña debe tener al menos 6 caracteres.', 'red');
        return false;
    }
    
    // Aquí podrías agregar más validaciones (ej. formato de cédula)
    
    return true; // Formulario válido
}


// Función para mostrar mensajes (utilizada en validación y simulación)
function mostrarMensaje(mensaje, color) {
    feedbackMessage.textContent = mensaje;
    feedbackMessage.style.color = color;
}


// ----------------------------------------------------
// OBJETIVO 3: Simular el envío de datos
// ----------------------------------------------------
function simularEnvio() {
    // Simulación de credenciales correctas (para un prototipo)
    const usuarioSimulado = 'mateo';
    const claveSimulada = 'mateo2736612';

    const usuarioIngresado = usernameInput.value.trim();
    const claveIngresada = passwordInput.value;
    
    // 1. Mostrar mensaje de procesamiento
    mostrarMensaje('Verificando credenciales...', 'blue');


    // 2. Usar un temporizador para simular una respuesta del servidor
    setTimeout(() => {
        if (usuarioIngresado === usuarioSimulado && claveIngresada === claveSimulada) {
            // Simulación de éxito
            mostrarMensaje('¡Acceso concedido! Redirigiendo...', 'green');
            
            // Redirección al dashboard después de un breve momento
            setTimeout(() => {
                window.location.href = DEFAULT_DASHBOARD_PATH; 
            }, 1000); // 1 segundo para que el usuario vea el mensaje
            
        } else {
            // Simulación de fallo
            mostrarMensaje('Error: Usuario o Contraseña incorrectos.', 'red');
            passwordInput.value = ''; // Limpiar campo de contraseña
        }
    }, 1500); // Simula un retraso de 1.5 segundos en la respuesta del servidor
}