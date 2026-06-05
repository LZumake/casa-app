# 🛠️ Lista de Mejoras y Detalles (Backlog)

Esta lista recoge pequeños detalles de UX/UI y CSS para pulir la app cuando tengamos un hueco, sin que frenen el desarrollo principal.

## 📋 Tabla de Tareas (`tareas.html`)
- [ ] **Cabecera fija (Sticky Header):** Hacer que la fila de títulos (TAREA, ZONA, etc.) se quede fija arriba cuando se hace scroll vertical en la tabla.
- [ ] **Tamaño de iconos:** Ajustar el tamaño de las imágenes (`.task-icon`). Ahora mismo algunas se ven un poco grandes (40px). Probar a bajarlas a 32px o 36px para que sean más uniformes con los avatares.
- [ ] **Alineación vertical:** Asegurar que la imagen, el punto rojo de urgencia y el texto de la tarea estén perfectamente centrados en el eje vertical.
- [ ] **Imagen de Mascotas:** Cambiar la imagen actual (lavar ropa) por la de "cepillar kooper" o "bañar a kooper" que tenemos en la carpeta `img`.

## 🛒 Lista de la Compra (`compras.html`)
- [ ] **Espaciado:** Revisar el margen entre el icono de la categoría y el texto del título.
- [ ] **Hover en tarjetas:** Añadir un pequeño efecto (sombra o elevación) al pasar el ratón por encima de las tarjetas de productos.

## 📱 Responsive / Móvil
- [ ] **Menú Hamburguesa:** (Fase futura) Sustituir el menú apilado por un icono  que despliegue las opciones.
- [ ] **Tabla en móvil:** Comprobar si el scroll horizontal de la tabla se entiende bien en pantallas muy pequeñas o si es mejor cambiar a vista de tarjetas.
# 🛠️ Lista de Mejoras y Detalles (Backlog)

##  Tabla de Tareas (`tareas.html`)
- [x] **Cabecera fija (Sticky Header):** ✅ Intentado pero requiere refactorizar estructura HTML
- [ ] **Tamaño de iconos:** Ajustar el tamaño de las imágenes (`.task-icon`). Probar 32px o 36px
- [ ] **Alineación vertical:** Centrar imagen, punto rojo y texto en el eje vertical
- [ ] **Imagen de Mascotas:** Cambiar por "cepillar kooper" o "bañar a kooper"

##  Lista de la Compra (`compras.html`)
- [ ] **Espaciado:** Revisar margen entre icono de categoría y texto del título
- [ ] **Hover en tarjetas:** Añadir efecto sombra al pasar el ratón

## 📱 Responsive / Móvil
- [x] **Menú Hamburguesa:** ✅ Implementado pero con problemas de UX
- [ ] **Nav fijo en móvil:** El menú superior desaparece al hacer scroll. Necesita `position: sticky` o `fixed`
- [ ] **Reducir márgenes laterales en móvil:** El contenido tiene demasiado padding y "baila" al desplazarse
- [ ] **Tabla en móvil:** Comprobar si el scroll horizontal se entiende bien o cambiar a vista de tarjetas

## 🎨 General
- [ ] **Consistencia de espaciado:** Unificar padding/margin entre páginas
- [ ] **Transiciones suaves:** Añadir animaciones al cambiar de página
[# 📋 Backlog de Mejoras - CasaApp

## 🔴 Prioridad Alta

### 1. Menú de navegación - Botón "Inicio" fuera de pantalla en móvil
**Problema**: En pantallas pequeñas (móvil 375px), el botón "Inicio" del menú de navegación queda fuera de la pantalla a la derecha. Hay que hacer scroll horizontal para verlo.

**Dónde ocurre**: 
- index.html
- todas las páginas
- En móvil (375px o menos)

**Impacto**: Mala experiencia de usuario, no se ve el primer elemento del menú

**Posible solución**: 
- Ajustar el `flex-wrap` del nav
- Reducir el padding/gap entre elementos del menú
- Hacer que el menú hamburguesa se muestre antes (en breakpoint más alto)
- Ajustar `overflow-x: hidden` en el body/nav

**Reproducir**: 
1. Abrir cualquier página en móvil (375px)
2. Mirar el menú de navegación
3. El botón "Inicio" está cortado a la derecha

**Fecha detectado**: 06/06/2026
**Estado**: ❌ Pendiente

---

## 🟡 Prioridad Media

*(Aquí irán los issues de prioridad media)*

---

## 🟢 Prioridad Baja

*(Aquí irán los issues de prioridad baja)*

---

## 💡 Ideas de mejora

*(Aquí irán las ideas para futuras funcionalidades)*](../Notas/progreso.md)