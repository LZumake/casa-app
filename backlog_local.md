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
🗂️ BACKLOG ACTUALIZADO (14 items)
============================================================

[... ITEMS 1 AL 9 SE MANTIENEN IGUAL QUE EN LA VERSIÓN ANTERIOR ...]

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
📊 RESUMEN DE PRIORIZACIÓN ACTUALIZADO
============================================================
| Prioridad | Items                                  | Score Promedio |
|-----------|----------------------------------------|----------------|
| 🔴 Crítica| #2, #4, #5, #12 (XP), #14 (Logros)     | 8.4            |
| 🟡 Alta   | #1, #3, #6, #8, #10 (Wizard), #11, #13 | 7.3            |
| 🟢 Media  | #7                                     | 6.0            |
| ⚪ Baja   | #9 (Iconos - pendiente de aclarar)     | -              |

============================================================
✅ PRÓXIMOS PASOS INMEDIATOS
1. Validar si se inicia la "semilla" de gamificación (XP básico) en la Fase 3 actual.
2. Continuar con los Filtros Acumulativos con Chips (Item #1) como tarea de desarrollo inmediata.
3. Aclarar el Item #9 (Iconos) para cerrarlo o integrarlo.
============================================================