# 📋 Backlog de Mejoras y Evolución - Ksap

> Última actualización: 14/06/2026 (Sesión 11 Desarrollo)

---

## ✅ FASE 1: Mejoras de UX/UI y Corrección de Bugs - COMPLETADA

### 1. ~~Menú de navegación - Scroll horizontal en móvil~~ ✅ RESUELTO
**Solución implementada:** Menú hamburguesa con drawer lateral (220px) + overlay oscuro.
**Estado:** ✅ Implementado (Sesión 7)

### 2. ~~Cierre del menú al tocar fuera (Overlay)~~ ✅ RESUELTO
**Solución implementada:** Overlay semitransparente (`z-index: 95`) que cierra el menú al hacer clic.
**Estado:** ✅ Implementado (Sesión 7)

### 3. ~~Botón "Iniciar Sesión" visible con el menú abierto~~ ✅ RESUELTO
**Solución implementada:** `nav.open .btn-login { display: none !important; }`
**Estado:** ✅ Implementado (Sesión 7)

### 4. ~~UI de Tarjetas de Tareas (Mejora visual)~~ ✅ RESUELTO
**Solución implementada:** Tabla de tareas con badges de colores, avatares de usuarios, fechas con estados (hoy/pasada), checkbox de completado.
**Estado:** ✅ Implementado (Sesión 7-8)

---

## ✅ FASE 2: Rediseño de la Navegación (Hub de Tareas) - COMPLETADA

### 5. ~~Lista de Tareas interminable (Falta de filtros)~~ ✅ RESUELTO
**Solución implementada:** Sistema de filtros dinámicos con FABs:
- Filtro por responsable (Todos, Rosa, Pedro, Ana, Miguel)
- Filtro por zona/categoría
- Filtro por frecuencia
- Filtro por estado
**Estado:** ✅ Implementado (Sesión 9-10)

### 6. ~~Nuevos botones del Hub de Tareas~~ ✅ RESUELTO
**Solución implementada:** Dashboard en `index.html` con 4 cards de acceso directo:
- 📋 Tareas Pendientes
- 💰 Últimos Gastos
- 🛒 Lista de la Compra
- (Futura) Eventos Culturales
**Estado:** ✅ Implementado (Sesión 7)

---

## ✅ FASE 3: Nuevas Funcionalidades - PARCIALMENTE COMPLETADA

### 7. Onboarding / Configuración inicial de la Casa
**Estado:** 💡 Idea (Fase 6)
**Descripción:** Que el usuario dé de alta su casa al registrarse (número de habitaciones, baños, zonas) para personalizar tareas automáticamente.

### 8. Perfil de Usuario y Dashboard Personal
**Estado:** ✅ PARCIALMENTE IMPLEMENTADO
**Implementado:**
- ✅ `perfil.html` con datos reales del usuario
- ✅ Estadísticas con `reduce()` (tareas completadas, pendientes, productividad)
- ✅ Avatar dinámico con iniciales
- ✅ Dropdown de usuario con Perfil, Configuración, GPS, Modo Oscuro, Logout
**Pendiente:**
- ⏳ Calendario imprimible de tareas
-  Agenda personal con eventos propios
-  Lista de deseos ("Mis cosas")

### 9. Botón de Acción Global (FABs)
**Estado:** ✅ IMPLEMENTADO
**Implementado:**
- ✅ FABs en `compras.html` (🔍 Filtros + ➕ Agregar)
- ✅ FABs en `tareas.html` (filtros por zona/responsable/frecuencia/estado)
- ✅ Menús desplegables con animaciones
- ✅ Cierre automático al hacer clic fuera
- ✅ Función `cerrarTodosLosMenus()` para evitar múltiples menús abiertos
**Estado:** ✅ Implementado (Sesión 10-11)

---

## 🔄 FASE 3: Lista de Compra Inteligente - EN CURSO

### 10. ~~Persistencia de datos (LocalStorage)~~ ✅ RESUELTO
**Implementado:**
- ✅ Sesión de usuario (`ksap_user`)
- ✅ Modo oscuro (`ksap_dark_mode`)
- ✅ GPS (`ksap_gps_enabled`)
- ✅ Categorías dinámicas (`ksap_categorias`)
**Estado:** ✅ Implementado (Sesión 7-11)

### 11. ~~Modo Oscuro (Dark Mode)~~ ✅ RESUELTO
**Implementado:** Toggle en dropdown del avatar + variables CSS para temas.
**Estado:** ✅ Implementado (Sesión 7)

### 12. Categorías dinámicas en Lista de Compra
**Estado:** ✅ IMPLEMENTADO
**Implementado:**
- ✅ 8 categorías por defecto (Frutería, Lácteos, Limpieza, Carnicería, Panadería, Bebidas, Congelados, Snacks)
- ✅ Función `añadirNuevaCategoria()` para crear categorías personalizadas
- ✅ Persistencia en localStorage
- ✅ Colores degradados únicos por categoría
**Estado:** ✅ Implementado (Sesión 11)

### 13. Integración con Open Food Facts API
**Estado:** ✅ IMPLEMENTADO
**Implementado:**
- ✅ Buscador con autocompletado (`fetch` + `async/await`)
- ✅ Estados de carga (spinner) y manejo de errores (`try/catch`)
- ✅ Validación de `response.ok`
- ✅ Función `mapearCategoria()` para asignar productos a secciones
- ✅ Modal para añadir producto con cantidad, unidad y comprador
**Estado:** ✅ Implementado (Sesión 11)

### 14. FABs en compras.html con estructura completa
**Estado:** ✅ IMPLEMENTADO
**FAB Izquierdo (🔍 Filtros):**
- ✅ Categoría (Fase 3)
- ✅ Comprador (Fase 3)
- ✅ Estado (Fase 3)
-  Fecha (Fase 4 - Próximamente)
- ⏳ Tienda (Fase 4 - Próximamente)
-  Marca (Fase 3 - Próximamente)
- ⏳ Presupuesto (Fase 6 - Próximamente)

**FAB Derecho (+ Agregar):**
- ✅ Buscar producto API (Fase 3)
- ✅ Producto manual (Fase 3)
- ✅ Nueva categoría (Fase 3)
- ⏳ Escanear código (Fase 4 - Próximamente)
- ⏳ Escanear ticket (Fase 4 - Próximamente)
- ⏳ Presupuesto (Fase 6 - Próximamente)

**Estado:** ✅ Implementado (Sesión 11)

---

## 🐛 BUGS CONOCIDOS

### 1. Footer tapa contenido en móvil
**Problema:** En algunos navegadores móviles (especialmente Safari iOS), el footer fijo tapa la última categoría (Snacks).
**Causa:** Inconsistencia en el renderizado de `min-height` y `padding-bottom` entre navegadores.
**Estado:**  En investigación (Sesión 11)
**Workaround actual:** `padding-bottom: 100px` en `main` + `min-height: auto`

### 2. Filtros exclusivos (no combinados)
**Problema:** Los filtros actuales son excluyentes. Al aplicar un filtro, se reemplaza el anterior en lugar de combinarse.
**Ejemplo:** No se puede ver "tareas de cocina de Rosa" aplicando 2 filtros simultáneos.
**Estado:** ⏳ Mejora planificada para Fase 3
**Solución propuesta:** Objeto `filtrosActivos` que acumule filtros + chips visuales de filtros activos

### 3. Sin historial de compras
**Problema:** Al marcar un producto como "comprado", no se guarda registro con fecha. Si se recarga la página, se pierde el estado.
**Estado:** ⏳ Mejora planificada para Fase 3
**Solución propuesta:** Array `historialCompras` en localStorage con fecha, comprador, categoría y producto

---

## ️ FASE 4: OCR de Tickets (Sesiones 13-15)

### 15. Escaneo de tickets con Mindee API
**Estado:** 💡 Planificado
**Descripción:** Integrar API de OCR para escanear tickets de supermercado y extraer:
- Productos comprados
- Precios reales
- Fecha y tienda
- IVA desglosado

### 16. Escaneo de código de barras
**Estado:** 💡 Planificado
**Descripción:** Usar cámara del móvil para escanear códigos EAN-13 y buscar productos en Open Food Facts.

### 17. Historial de compras con fechas
**Estado:** 💡 Planificado
**Descripción:** Guardar registro de cada compra completada con fecha, comprador y productos.

### 18. Pantalla de carga (Splash Screen)
**Estado:**  Idea
**Descripción:** Mostrar logo de Ksap durante 1 segundo al abrir la app en móvil.

---

## 🌍 FASE 5: Eventos Culturales (Sesiones 16-18)

### 19. Mapa geolocalizado de eventos
**Estado:** 💡 Planificado
**Descripción:** Integrar API de Eventbrite/Ticketmaster para mostrar eventos culturales en un radio de 50km.

### 20. Filtro por fecha y tipo de evento
**Estado:** 💡 Idea
**Descripción:** Filtrar eventos por fecha, tipo (concierto, teatro, exposición) y distancia.

---

##  FASE 6: Escalado (Sesiones 19+)

### 21. Backend con PostgreSQL + PostGIS
**Estado:** 💡 Planificado
**Descripción:** Migrar de localStorage a base de datos real para:
- Sincronización entre dispositivos
- Multi-usuario real
- Consultas SQL para estadísticas avanzadas

### 22. Sistema de presupuestos
**Estado:** 💡 Planificado
**Descripción:** Introducir gastos fijos y variables para calcular:
- Presupuesto mensual por persona
- Control de gastos real vs planificado
- Alertas de exceso de gasto

### 23. Multi-ciudad y comunidad
**Estado:** 💡 Idea
**Descripción:** Expandir a varias ciudades y crear comunidad de usuarios.

### 24. Onboarding de casa
**Estado:** 💡 Idea
**Descripción:** Configuración inicial al registrarse (habitaciones, baños, zonas) para personalizar tareas.

---

## 📊 RESUMEN DE PROGRESO

| Fase | Estado | Sesiones | Progreso |
|------|--------|----------|----------|
| Fase 1: Fundamentos | ✅ Completada | 7-8 | 100% |
| Fase 2: Hub de Navegación | ✅ Completada | 9-10 | 100% |
| Fase 3: Lista de Compra Inteligente | 🔄 En curso | 11-12 | 70% |
| Fase 4: OCR de Tickets | ⏳ Pendiente | 13-15 | 0% |
| Fase 5: Eventos Culturales | ⏳ Pendiente | 16-18 | 0% |
| Fase 6: Escalado |  Pendiente | 19+ | 0% |

---

## 🎯 PRÓXIMOS PASOS INMEDIATOS

1. **Resolver bug del footer en móvil** (inconsistencia entre navegadores)
2. **Implementar filtros acumulativos** con chips visuales
3. **Crear historial de compras** con fechas en localStorage
4. **Implementar botón "Nueva categoría"** desde el FAB derecho
5. **Activar lógica de filtros activos** (categoría, comprador, estado)

---

*Documento mantenido por Leire Zumake - Proyecto DAW 2026*