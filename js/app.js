// Esperar a que la página cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // LÓGICA PARA LA TABLA DE TAREAS (tareas.html)
    // ============================================
    const checkboxesTareas = document.querySelectorAll('.task-table input[type="checkbox"]');
    
    checkboxesTareas.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const fila = this.closest('tr');
            const estadoTexto = fila.querySelector('.status');
            
            if (this.checked) {
                fila.classList.add('hecha');
                if (estadoTexto) estadoTexto.textContent = 'Hecha';
            } else {
                fila.classList.remove('hecha');
                if (estadoTexto) estadoTexto.textContent = 'Pendiente';
            }
        });
    });
    
    // ============================================
    // LÓGICA PARA LAS TARJETAS DE COMPRAS (compras.html)
    // ============================================
    const checkboxesCompras = document.querySelectorAll('.item-checkbox');
    
    checkboxesCompras.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            // Encontrar la tarjeta completa (shopping-item) que contiene este checkbox
            const tarjeta = this.closest('.shopping-item');
            // Encontrar el nombre del producto dentro de esa tarjeta
            const nombreProducto = tarjeta.querySelector('.item-name');
            
            if (this.checked) {
                tarjeta.classList.add('comprado');
            } else {
                tarjeta.classList.remove('comprado');
            }
        });
    });
});
// ============================================
// MENÚ HAMBURGUESA
// ============================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-left a');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        // Alternar la clase 'active' en el botón (para la animación X)
        this.classList.toggle('active');
        
        // Mostrar/ocultar los enlaces del menú
        navLinks.forEach(function(link) {
            link.classList.toggle('visible');
        });
    });
}
// ============================================
// VALIDACIÓN DE FORMULARIO DE REGISTRO
// ============================================

const formularioRegistro = document.querySelector('form');

if (formularioRegistro) {
    formularioRegistro.addEventListener('submit', function(e) {
        // Prevenimos que el formulario se envíe (recargue la página)
        e.preventDefault();
        
        // Limpiamos errores anteriores
        limpiarErrores();
        
        // Obtenemos los valores de los inputs
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const password2 = document.getElementById('password2').value;
        
        // Variable para trackear si hay errores
        let hayErrores = false;
        
        // VALIDACIÓN 1: El nombre debe tener al menos 2 palabras (nombre + apellido)
        if (nombre.split(' ').length < 2) {
            mostrarError('nombre', 'Por favor, introduce tu nombre y apellido');
            hayErrores = true;
        } else {
            marcarValido('nombre');
        }
        
        // VALIDACIÓN 2: El email debe tener formato válido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mostrarError('email', 'Introduce un email válido (ej: usuario@correo.com)');
            hayErrores = true;
        } else {
            marcarValido('email');
        }
        
        // VALIDACIÓN 3: La contraseña debe tener al menos 8 caracteres
        if (password.length < 8) {
            mostrarError('password', 'La contraseña debe tener al menos 8 caracteres');
            hayErrores = true;
        } else {
            marcarValido('password');
        }
        
        // VALIDACIÓN 4: Las contraseñas deben coincidir
        if (password !== password2) {
            mostrarError('password2', 'Las contraseñas no coinciden');
            hayErrores = true;
        } else if (password2.length > 0) {
            marcarValido('password2');
        }
        
        // Si no hay errores, simulamos el registro exitoso
        if (!hayErrores) {
            // Aquí iría la llamada al backend (por ahora solo mostramos mensaje)
            alert('¡Registro exitoso! Bienvenido/a ' + nombre.split(' ')[0]);
            formularioRegistro.reset(); // Limpiamos el formulario
        }
    });
}

// Función para mostrar un error en un campo específico
function mostrarError(campoId, mensaje) {
    const input = document.getElementById(campoId);
    const errorSpan = document.getElementById('error-' + campoId);
    
    input.classList.add('error');
    input.classList.remove('valid');
    errorSpan.textContent = mensaje;
}

// Función para marcar un campo como válido
function marcarValido(campoId) {
    const input = document.getElementById(campoId);
    const errorSpan = document.getElementById('error-' + campoId);
    
    input.classList.remove('error');
    input.classList.add('valid');
    errorSpan.textContent = '';
}

// Función para limpiar todos los errores
function limpiarErrores() {
    const inputs = document.querySelectorAll('.form-control');
    const errores = document.querySelectorAll('.error-message');
    
    inputs.forEach(input => {
        input.classList.remove('error', 'valid');
    });
    
    errores.forEach(error => {
        error.textContent = '';
    });
}