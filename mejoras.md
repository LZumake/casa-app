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