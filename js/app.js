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