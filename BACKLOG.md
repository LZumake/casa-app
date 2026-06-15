============================================================
BACKLOG MAESTRO - KSAP
Última actualización: 15/06/2026
Total de items: 14
============================================================

🎯 METODOLOGÍA DE PRIORIZACIÓN (Matriz ICE)
- Impact (1-10): ¿Cuánto mejora la experiencia del usuario?
- Confidence (1-10): ¿Qué tan seguros estamos de que funcionará?
- Ease (1-10): ¿Qué tan fácil es implementarlo? (10 = muy fácil)
- Score ICE = (I + C + E) / 3

📊 PRIORIDAD AUTOMÁTICA
🔴 Crítica (Score 8-10): Implementar YA
🟡 Alta (Score 6-7.9): Próxima sesión
🟢 Media (Score 4-5.9): Cuando haya tiempo
⚪ Baja (Score <4): Backlog futuro

============================================================
🗂️ BACKLOG ACTUALIZADO (14 items)
============================================================

1️⃣ FILTROS ACUMULATIVOS CON CHIPS VISUALES
- Categoría: UX / Funcionalidad
- Fase: 3 (Lista de Compra Inteligente)
- Descripción: Combinar múltiples filtros simultáneamente con chips visuales eliminables
- Estado actual: Los filtros son exclusivos (uno a la vez)
- Impacto esperado: ⭐⭐⭐⭐⭐ (Mejora UX significativa)
- Sugerencia técnica: Array de objetos `filtrosActivos = [{tipo: 'zona', valor: 'cocina'}, {tipo: 'responsable', valor: 'Rosa'}]`. Renderizar chips con `.filter()` y botón ✕ para eliminar. Función `aplicarFiltrosCombinados()` que use `.reduce()` para aplicar todos los filtros.
- ICE Score: (8 + 7 + 6) / 3 = 7.0 🟡 Alta

2️⃣ REGISTER.HTML CON VALIDACIÓN COMPLETA
- Categoría: Funcionalidad / Seguridad
- Fase: 3
- Descripción: Formulario de registro con validación en tiempo real
- Requisitos:
  - Nombre: mínimo 2 palabras (Regex: `/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/`)
  - Email: formato válido (Regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
  - Contraseña: mínimo 8 caracteres, 1 mayúscula, 1 número (Regex: `/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/`)
  - Confirmación de contraseña: debe coincidir
- Impacto esperado: ⭐⭐⭐⭐⭐ (Esencial para usuarios reales)
- Sugerencia técnica: Validación en evento `input` (no `blur`) para feedback inmediato. Clases CSS `.valid` (verde) y `.error` (rojo). Mensajes de error debajo de cada campo.
- ICE Score: (9 + 9 + 7) / 3 = 8.3 🔴 Crítica

3️⃣ OPEN FOOD FACTS API (INTEGRACIÓN REAL)
- Categoría: API / Funcionalidad
- Fase: 3
- Descripción: Conectar buscador de compras.html con API real para autocompletado
- Endpoint: `https://world.openfoodfacts.org/cgi/search.pl?search_terms={query}&json=1`
- Impacto esperado: ⭐⭐⭐⭐⭐ (Feature diferenciador)
- Sugerencia técnica: Implementar debounce (300ms) para no saturar la API. Mostrar spinner mientras carga. Cachear resultados en `sessionStorage`.
- ICE Score: (10 + 8 + 5) / 3 = 7.7 🟡 Alta

4️⃣ ESTADOS DE CARGA (LOADING/SPINNER)
- Categoría: UX / Diseño
- Fase: 3
- Descripción: Spinners y estados de carga visuales para APIs/procesos largos
- Impacto esperado: ⭐⭐⭐⭐ (Mejora percepción de rendimiento)
- Sugerencia técnica: Componente reutilizable `.loading-spinner` con animación CSS. Overlay semitransparente durante carga. Texto contextual: "Buscando productos...", "Guardando cambios..."
- ICE Score: (7 + 9 + 8) / 3 = 8.0 🔴 Crítica

5️⃣ MANEJO DE ERRORES VISUAL
- Categoría: UX / Robustez
- Fase: 3
- Descripción: Mensajes de error amigables cuando fallen APIs o conexión
- Impacto esperado: ⭐⭐⭐⭐ (Evita frustración del usuario)
- Sugerencia técnica: Sistema de notificaciones tipo "toast" (aparece y desaparece). Colores semánticos: rojo (error), amarillo (warning), verde (éxito). Botón "Reintentar" en errores de red.
- ICE Score: (8 + 9 + 7) / 3 = 8.0 🔴 Crítica

6️⃣ REDUCE() AVANZADO PARA ESTADÍSTICAS
- Categoría: Performance / Refactorización
- Fase: 3
- Descripción: Refactorizar `calcularEstadisticas()` usando `reduce()` con acumuladores objeto
- Impacto esperado: ⭐⭐⭐ (Mejora código, no UX visible)
- Sugerencia técnica: Usar un único `reduce()` que devuelva `{completadas: 0, pendientes: 0, porUsuario: {Rosa: 2, Pedro: 1}}` en lugar de múltiples iteraciones.
- ICE Score: (5 + 8 + 7) / 3 = 6.7 🟡 Alta

7️⃣ HISTÓRICO DE TAREAS CON FECHA Y USUARIO
- Categoría: Funcionalidad / Escalabilidad
- Fase: 6 (Escalado)
- Descripción: Visualizar histórico de tareas completadas con fecha y usuario
- Estado actual: Estructura preparada en localStorage (`ksap_tareas_estados`)
- Impacto esperado: ⭐⭐⭐⭐ (Trazabilidad completa)
- Sugerencia técnica: Nueva vista `historico.html` con tabla filtrable por fecha/usuario. Exportar a CSV/Excel. Gráficos con Chart.js (tareas por usuario, por mes).
- ICE Score: (7 + 7 + 4) / 3 = 6.0 🟢 Media

8️⃣ MODO OSCURO EN TODAS LAS PÁGINAS
- Categoría: Diseño / UX
- Fase: 2 (verificar)
- Descripción: Asegurar modo oscuro en perfil, configuración, register, etc.
- Impacto esperado: ⭐⭐⭐ (Consistencia visual)
- Sugerencia técnica: Revisar todas las páginas y añadir variables CSS `dark-mode`. Testear en cada página: `body.dark-mode .nuevo-elemento { ... }`
- ICE Score: (6 + 9 + 8) / 3 = 7.7 🟡 Alta

9️⃣ FAVICON PERSONALIZADO Y META TAGS
- Categoría: Diseño / SEO
- Fase: 3
- Descripción: Añadir favicon personalizado de Ksap y meta tags para redes sociales (Open Graph)
- Impacto esperado: ⭐⭐⭐ (Profesionalidad y branding)
- Sugerencia técnica: Crear favicon en formato `.ico` y `.png` (192x192). Añadir `<link rel="icon">` en todas las páginas. Meta tags `og:title`, `og:description`, `og:image` para compartir en redes.
- ICE Score: (5 + 9 + 9) / 3 = 7.7 🟡 Alta

10️⃣ FEATURE MADRE: ONBOARDING WIZARD (CONFIGURACIÓN DE CASA)
- Categoría: UX / Gamificación
- Fase: 6 (Escalado) - Semilla en Fase 3
- Descripción: Cuestionario paso a paso al registrarse para configurar el hogar (nombre, estancias, convivientes, objetivos).
- Sugerencia técnica: Wizard con `data-step` y transiciones CSS `slide-in`. Guardar en `localStorage.ksap_casa_config`. Barra de progreso superior.
- ICE Score: (9 + 8 + 6) / 3 = 7.7 🟡 Alta

11️⃣ FEATURE MADRE: PÁGINA "MI CASA" (HOGAR VIRTUAL)
- Categoría: Diseño / Gamificación
- Fase: 6 (Escalado)
- Descripción: Vista isométrica 2D/SVG de la casa que se llena de objetos decorativos a medida que se completan tareas y se desbloquean premios.
- Sugerencia técnica: SVG con capas (`<g id="cocina">`). Objetos desbloqueados se muestran con `display` según array `itemsDesbloqueados`. Animaciones CSS `@keyframes pop-in`.
- ICE Score: (10 + 7 + 4) / 3 = 7.0 🟡 Alta

12️⃣ FEATURE MADRE: SISTEMA DE XP Y NIVELES
- Categoría: Funcionalidad / Gamificación
- Fase: 3 (Semilla) → Fase 6 (Completo)
- Descripción: Tareas otorgan XP. Subir de nivel desbloquea objetos para la casa virtual.
- Sugerencia técnica: `ksap_user.xp` y `ksap_user.nivel` en localStorage. Función `otorgarXP(tarea)`. Animación flotante "+25 XP" y modal de "¡SUBISTE DE NIVEL!" con confeti CSS.
- ICE Score: (10 + 9 + 7) / 3 = 8.7 🔴 Crítica

13️⃣ FEATURE MADRE: TIENDA DE PREMIOS Y OBJETOS
- Categoría: Funcionalidad / Gamificación
- Fase: 6 (Escalado)
- Descripción: Catálogo de objetos decorativos (plantas, mascotas, temas) comprables con XP o desbloqueables por hitos.
- Sugerencia técnica: Array `catalogoObjetos` y `itemsDesbloqueados`. Modal de tienda con filtros. Respetar degradados morados (#667eea a #764ba2) en botones de compra.
- ICE Score: (9 + 8 + 5) / 3 = 7.3 🟡 Alta

14️⃣ FEATURE MADRE: HITOS Y LOGROS (ACHIEVEMENTS)
- Categoría: Funcionalidad / Gamificación
- Fase: 4-5
- Descripción: Sistema de logros tipo videojuego (ej: "Primer Paso", "Hogar Dulce Hogar", "En Racha 7 días").
- Sugerencia técnica: Array `logrosDesbloqueados`. Función `verificarLogros()` tras acciones clave. Notificación tipo "toast" al desbloquear.
- ICE Score: (9 + 9 + 6) / 3 = 8.0 🔴 Crítica

============================================================
📊 RESUMEN DE PRIORIZACIÓN
============================================================
| Prioridad  | Items                                    | Score Promedio |
|------------|------------------------------------------|----------------|
| 🔴 Crítica | #2, #4, #5, #12 (XP), #14 (Logros)       | 8.4            |
| 🟡 Alta    | #1, #3, #6, #8, #9, #10, #11, #13        | 7.4            |
| 🟢 Media   | #7                                       | 6.0            |
| ⚪ Baja    | -                                        | -              |

============================================================
✅ PRÓXIMOS PASOS INMEDIATOS
============================================================
1. Continuar con los Filtros Acumulativos con Chips (Item #1) como tarea de desarrollo inmediata.
2. Conectar API real de Open Food Facts (Item #3) en la Sesión 12.
3. Implementar Favicon y Meta Tags (Item #9) como mejora rápida de branding.
4. Validar si se inicia la "semilla" de gamificación (XP básico, Item #12) en la Fase 3 actual.

============================================================
🆕 NUEVOS ITEMS AÑADIDOS (zona para el script update-backlog.bat)
============================================================
[El script añadirá aquí los nuevos items automáticamente]