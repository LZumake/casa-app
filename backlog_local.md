============================================================
BACKLOG MAESTRO - Sincronizado automáticamente
Última actualización: 15/06/2026
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
🗂️ BACKLOG ACTUALIZADO (14 items + Bugs)
============================================================

0️⃣ BUG: FOOTER TAPA CONTENIDO EN MÓVIL
- Categoría: Bug / UX
- Estado: ✅ RESUELTO (15/06/2026)
- Descripción: En Safari iOS, el footer fijo tapaba la última categoría.
- Solución aplicada: Ajuste de padding-bottom y min-height en main.

1️⃣ FILTROS ACUMULATIVOS CON CHIPS VISUALES
- Categoría: UX / Funcionalidad
- Fase: 3 (Lista de Compra Inteligente)
- Descripción: Combinar múltiples filtros simultáneamente con chips visuales eliminables.
- Sugerencia técnica: Array de objetos `filtrosActivos`. Renderizar chips con `.filter()` y botón ✕. Función `aplicarFiltrosCombinados()` con `.reduce()`.
- ICE Score: (8 + 7 + 6) / 3 = 7.0 🟡 Alta

2️⃣ REGISTER.HTML CON VALIDACIÓN COMPLETA
- Categoría: Funcionalidad / Seguridad
- Fase: 3
- Descripción: Formulario de registro con validación en tiempo real (Regex).
- Sugerencia técnica: Validación en evento `input`. Clases CSS `.valid` y `.error`. Regex para nombre, email y contraseña (8 chars, 1 mayúscula, 1 número).
- ICE Score: (9 + 9 + 7) / 3 = 8.3 🔴 Crítica

3️⃣ OPEN FOOD FACTS API
- Categoría: API / Funcionalidad
- Fase: 3
- Descripción: Conectar buscador de compras.html con API real para autocompletado.
- Sugerencia técnica: `fetch` con `async/await`, `try/catch`, debounce (300ms) y caché en `sessionStorage`.
- ICE Score: (10 + 8 + 5) / 3 = 7.7 🟡 Alta

4️⃣ ESTADOS DE CARGA (LOADING/SPINNER)
- Categoría: UX / Diseño
- Fase: 3
- Descripción: Spinners y estados de carga visuales para APIs/procesos largos.
- Sugerencia técnica: Componente reutilizable `.loading-spinner` con animación CSS y overlay semitransparente.
- ICE Score: (7 + 9 + 8) / 3 = 8.0 🔴 Crítica

5️⃣ MANEJO DE ERRORES VISUAL
- Categoría: UX / Robustez
- Fase: 3
- Descripción: Mensajes de error amigables cuando fallen APIs o conexión.
- Sugerencia técnica: Sistema de notificaciones tipo "toast" con colores semánticos y botón "Reintentar".
- ICE Score: (8 + 9 + 7) / 3 = 8.0 🔴 Crítica

6️⃣ REDUCE() AVANZADO PARA ESTADÍSTICAS
- Categoría: Performance / Refactorización
- Fase: 3
- Descripción: Refactorizar `calcularEstadisticas()` usando `reduce()` con acumuladores objeto.
- Sugerencia técnica: Acumulador `{ total: 0, completadas: 0, porCategoria: {} }` en una sola pasada.
- ICE Score: (5 + 8 + 7) / 3 = 6.7 🟡 Alta

7️⃣ HISTÓRICO DE TAREAS CON FECHA Y USUARIO
- Categoría: Funcionalidad / Escalabilidad
- Fase: 6 (Escalado)
- Descripción: Visualizar histórico de tareas completadas con fecha y usuario.
- Sugerencia técnica: Nueva vista `historico.html` con tabla filtrable. Estructura `ksap_historico` ya preparada en localStorage.
- ICE Score: (7 + 7 + 4) / 3 = 6.0 🟢 Media

8️⃣ MODO OSCURO EN TODAS LAS PÁGINAS
- Categoría: Diseño / UX
- Fase: 2 (Verificación)
- Descripción: Asegurar modo oscuro en perfil, configuración, register, etc.
- Sugerencia técnica: Revisar todas las páginas y añadir variables CSS `dark-mode`.
- ICE Score: (6 + 9 + 8) / 3 = 7.7 🟡 Alta

9️⃣ ICONOS (PENDIENTE DE ACLARAR)
- Categoría: Diseño
- Fase: Pendiente
- Descripción: Definir si son iconos para categorías, notificaciones o favicon.
- ICE Score: Pendiente ⚪ Baja

============================================================
🎮 FEATURE MADRE: GAMIFICACIÓN Y CASA VIRTUAL KSAP
============================================================

10️⃣ ONBOARDING WIZARD (CONFIGURACIÓN DE CASA)
- Categoría: UX / Gamificación
- Fase: 6 (Escalado) - Semilla en Fase 3
- Descripción: Cuestionario paso a paso al registrarse para configurar el hogar.
- Sugerencia técnica: Wizard con `data-step` y transiciones CSS `slide-in`. Guardar en `localStorage.ksap_casa_config`.
- ICE Score: (9 + 8 + 6) / 3 = 7.7 🟡 Alta

11️⃣ PÁGINA "MI CASA" (HOGAR VIRTUAL)
- Categoría: Diseño / Gamificación
- Fase: 6 (Escalado)
- Descripción: Vista isométrica 2D/SVG de la casa que se llena de objetos al completar tareas.
- Sugerencia técnica: SVG con capas (`<g id="cocina">`). Objetos desbloqueados se muestran con `display` según array `itemsDesbloqueados`.
- ICE Score: (10 + 7 + 4) / 3 = 7.0 🟡 Alta

12️⃣ SISTEMA DE XP Y NIVELES
- Categoría: Funcionalidad / Gamificación
- Fase: 3 (Semilla) → Fase 6 (Completo)
- Descripción: Tareas otorgan XP. Subir de nivel desbloquea objetos para la casa virtual.
- Sugerencia técnica: `ksap_user.xp` y `ksap_user.nivel` en localStorage. Función `otorgarXP(tarea)`. Animación flotante "+25 XP".
- ICE Score: (10 + 9 + 7) / 3 = 8.7 🔴 Crítica

13️⃣ TIENDA DE PREMIOS Y OBJETOS
- Categoría: Funcionalidad / Gamificación
- Fase: 6 (Escalado)
- Descripción: Catálogo de objetos decorativos comprables con XP o desbloqueables por hitos.
- Sugerencia técnica: Array `catalogoObjetos` y `itemsDesbloqueados`. Modal de tienda con filtros.
- ICE Score: (9 + 8 + 5) / 3 = 7.3 🟡 Alta

14️⃣ HITOS Y LOGROS (ACHIEVEMENTS)
- Categoría: Funcionalidad / Gamificación
- Fase: 4-5
- Descripción: Sistema de logros tipo videojuego ("Primer Paso", "En Racha 7 días").
- Sugerencia técnica: Array `logrosDesbloqueados`. Función `verificarLogros()` tras acciones clave. Notificación tipo "toast".
- ICE Score: (9 + 9 + 6) / 3 = 8.0 🔴 Crítica

============================================================
📊 RESUMEN DE PRIORIZACIÓN ACTUALIZADO
============================================================
| Prioridad | Items                                  | Score Promedio |
|-----------|----------------------------------------|----------------|
| 🔴 Crítica| #2, #4, #5, #12 (XP), #14 (Logros)     | 8.4            |
| 🟡 Alta   | #1, #3, #6, #8, #10 (Wizard), #11, #13 | 7.3            |
| 🟢 Media  | #7                                     | 6.0            |
| ⚪ Baja   | #9 (Iconos - pendiente de aclarar)     | -              |
| ✅ Resuelto| #0 (Bug Footer Móvil)                 | -              |

============================================================
✅ PRÓXIMOS PASOS INMEDIATOS
1. Ejecutar script de sincronización: .\update-backlog.ps1
2. Validar si se inicia la "semilla" de gamificación (XP básico) en la Fase 3 actual.
3. Continuar con los Filtros Acumulativos con Chips (Item #1) como tarea de desarrollo inmediata.
============================================================