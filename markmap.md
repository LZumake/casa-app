<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Progreso Curso DAW - Proyecto KSAP</title>
  <script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
  <script src="https://cdn.jsdelivr.net/npm/markmap-view@0.15.4"></script>
  <script src="https://cdn.jsdelivr.net/npm/markmap-lib@0.15.4/dist/browser/index.min.js"></script>
  <style>
    body, html { margin: 0; padding: 0; height: 100%; width: 100%; font-family: 'Segoe UI', sans-serif; background-color: #f5f7fa; }
    svg { width: 100%; height: 100%; }
    .markmap-node text { font-family: 'Segoe UI', sans-serif !important; }
  </style>
</head>
<body>
  <svg id="markmap"></svg>
  <script>
    const markdown = `
# <span style="color: #667eea; font-weight: bold; font-size: 1.2em;">🚀 Progreso Curso DAW - Proyecto KSAP (75% Global)</span>
## <span style="color: #2c3e50; font-weight: bold;">📅 Estado Actual: Junio 2026 (Sesión 11 Desarrollo Parte 2)</span>
### <span style="color: #198754; font-weight: bold;">🟢 Fase 1: Fundamentos (100% Completada)</span>
- **Rebranding**: CasaApp → Ksap <span style="color: #198754; font-weight: bold;">(100%)</span>
- **Autenticación**: Login, Logout y Modo Invitado <span style="color: #198754; font-weight: bold;">(100%)</span>
- **UI/UX**: Avatar Dropdown, Overlay y Drawer lateral <span style="color: #198754; font-weight: bold;">(100%)</span>
- **Estilos**: Variables CSS y Modo Oscuro persistente <span style="color: #198754; font-weight: bold;">(100%)</span>
- **Registro**: Validación Regex en tiempo real (Email, Pass) <span style="color: #198754; font-weight: bold;">(100%)</span>
### <span style="color: #198754; font-weight: bold;">🟢 Fase 2: Hub de Navegación (100% Completada)</span>
- **Búsqueda**: Open Food Facts (Mock + Debounce 300ms) <span style="color: #198754; font-weight: bold;">(100%)</span>
- **Modal**: Añadir productos con detalles dinámicos <span style="color: #198754; font-weight: bold;">(100%)</span>
- **DOM**: Delegación de eventos en elementos dinámicos <span style="color: #198754; font-weight: bold;">(100%)</span>
- **Filtros por Responsable**: Implementados en tareas.html <span style="color: #198754; font-weight: bold;">(100%)</span>
- **Renderizado Dinámico**: filter(), map(), join() <span style="color: #198754; font-weight: bold;">(100%)</span>
- **Layout Fijo Responsive**: Nav/Header/Footer fijos en móvil <span style="color: #198754; font-weight: bold;">(100%)</span>
- **FABs**: Botones flotantes con menús desplegables <span style="color: #198754; font-weight: bold;">(100%)</span>
- **Estadísticas**: Cálculos reales en Perfil (reduce) <span style="color: #198754; font-weight: bold;">(100%)</span>
### <span style="color: #f39c12; font-weight: bold;">🟡 Fase 3: Lista de Compra Inteligente (40% En curso)</span>
- **Checkboxes tareas**: Marcar/desmarcar con delegación de eventos <span style="color: #198754; font-weight: bold;">(100%)</span>
- **Persistencia localStorage**: ksap_tareas_estados con fecha y usuario <span style="color: #198754; font-weight: bold;">(100%)</span>
- **Contador progreso**: Actualización en tiempo real (25%) <span style="color: #198754; font-weight: bold;">(100%)</span>
- **Bugs críticos resueltos**: Corrupción app.js, IDs duplicados, caché <span style="color: #198754; font-weight: bold;">(100%)</span>
- **Teoría APIs**: Fetch, async/await, try/catch (test 76%) <span style="color: #198754; font-weight: bold;">(100%)</span>
- **API Real Open Food Facts**: Conexión buscador compras.html <span style="color: #f39c12; font-weight: bold;">(0% - Próxima)</span>
- **Estados de carga (Loading/Spinner)**: UX de espera <span style="color: #f39c12; font-weight: bold;">(0% - Próxima)</span>
- **OCR Escaneo tickets**: Mindee API <span style="color: #95a5a6; font-weight: bold;">(0%)</span>
### <span style="color: #95a5a6; font-weight: bold;"> Fase 4: OCR de Tickets (0% Pendiente)</span>
- **Mindee API** + estadísticas de gasto <span style="color: #95a5a6; font-weight: bold;">(0%)</span>
### <span style="color: #95a5a6; font-weight: bold;">⚪ Fase 5: Eventos Culturales (0% Pendiente)</span>
- **Geolocalización**: Mapa de eventos en radio de 50km <span style="color: #95a5a6; font-weight: bold;">(0%)</span>
- **APIs**: Integración Eventbrite / Ticketmaster <span style="color: #95a5a6; font-weight: bold;">(0%)</span>
### <span style="color: #95a5a6; font-weight: bold;">⚪ Fase 6: Escalado y Gamificación (0% Pendiente)</span>
- **Histórico tareas** con fecha y usuario <span style="color: #95a5a6; font-weight: bold;">(0%)</span>
- **Sistema XP y Niveles** <span style="color: #95a5a6; font-weight: bold;">(0%)</span>
- **Casa Virtual (Mi Casa)** <span style="color: #95a5a6; font-weight: bold;">(0%)</span>
- **Logros y Tienda de premios** <span style="color: #95a5a6; font-weight: bold;">(0%)</span>
### <span style="color: #667eea; font-weight: bold;">📊 Métricas de Aprendizaje</span>
- **Gestión de Estado y Renderizado**: <span style="color: #198754; font-weight: bold;">🟢 100% Dominado</span>
- **Delegación de Eventos**: <span style="color: #198754; font-weight: bold;">🟢 100% Dominado</span>
- **Manipulación de Arrays (filter/map/reduce)**: <span style="color: #198754; font-weight: bold;">🟢 100% Consolidado</span>
- **Async/Await y Fetch**: <span style="color: #f39c12; font-weight: bold;">🟡 76% Consolidado (Test)</span>
- **Posicionamiento CSS y Flexbox**: <span style="color: #198754; font-weight: bold;">🟢 100% Dominado</span>
- **Z-index y jerarquía visual**: <span style="color: #198754; font-weight: bold;">🟢 85% Consolidado</span>
### <span style="color: #667eea; font-weight: bold;"> Asignaturas DAW - Estructura del Ciclo Formativo</span>
#### <span style="color: #198754; font-weight: bold;">🎓 1º Curso DAW (Completado)</span>
- **ED (Entornos de Desarrollo)**: Git, metodologías ágiles, seguridad, documentación <span style="color: #198754; font-weight: bold;">(95%)</span>
- **LM (Lenguajes de Marcas)**: HTML5, CSS3, XML, JSON, Responsive Design <span style="color: #198754; font-weight: bold;">(90%)</span>
- **PF (Programación)**: Java, POO, estructuras de datos, algoritmos <span style="color: #198754; font-weight: bold;">(85%)</span>
- **BD (Bases de Datos)**: SQL, MySQL, diseño de BBDD, normalización <span style="color: #198754; font-weight: bold;">(88%)</span>
- **SGE (Sistemas Informáticos)**: Linux, redes, administración básica <span style="color: #198754; font-weight: bold;">(80%)</span>
- **FOL (Formación y Orientación Laboral)**: Legislación laboral, contratos <span style="color: #198754; font-weight: bold;">(85%)</span>
#### <span style="color: #f39c12; font-weight: bold;">🎓 2º Curso DAW (En curso)</span>
- **DWEC (Desarrollo Web Entorno Cliente)**: JavaScript ES6+, DOM, APIs (Fetch), localStorage, Regex, Async <span style="color: #198754; font-weight: bold;">(92%)</span>
- **DWES (Desarrollo Web Entorno Servidor)**: PHP, Node.js, APIs REST, sesiones <span style="color: #f39c12; font-weight: bold;">(60%)</span>
- **DIW (Diseño de Interfaces Web)**: UX/UI, Mobile First, Accesibilidad, FABs, Modo Oscuro <span style="color: #198754; font-weight: bold;">(85%)</span>
- **DAW (Desarrollo de Aplicaciones Web)**: Proyecto KSAP integral <span style="color: #198754; font-weight: bold;">(98%)</span>
- **EIE (Empresa e Iniciativa Emprendedora)**: Modelo de negocio, marketing, ASO <span style="color: #f39c12; font-weight: bold;">(75%)</span>
- **FCT (Formación en Centros de Trabajo)**: Prácticas en empresa <span style="color: #95a5a6; font-weight: bold;">(0% - Pendiente)</span>
    `;
    const { Transformer } = window.markmap;
    const { Markmap, loadCSS, loadJS } = window.markmap;
    const transformer = new Transformer();
    const { root, features } = transformer.transform(markdown);
    if (features.styles) loadCSS(features.styles);
    if (features.scripts) loadJS(features.scripts, { getMarkmap: () => window.markmap });
    Markmap.create('#markmap', { autoFit: true, duration: 500, zoom: true, pan: true, initialExpandLevel: 6 }, root);
  </script>
</body>
</html>