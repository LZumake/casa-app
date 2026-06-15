# Script para generar automáticamente CODIGO_ACTUAL_KSAP.txt
# Autor: Leire (KSAP Project)
# Fecha: 15/06/2026 - v2 (UTF-8 sin BOM + compras.js)

$archivoSalida = "CODIGO_ACTUAL_KSAP.txt"
$fecha = Get-Date -Format "dd/MM/yyyy HH:mm"

# 1. Cabecera (ASCII puro para evitar corrupción)
$header = @"
============================================================
CODIGO ACTUAL KSAP - Generado automaticamente
Ultima actualizacion: $fecha
============================================================

=== 1. ESTRUCTURA HTML (index.html) ===
"@

# Usar UTF8 sin BOM para evitar corrupción de tildes
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($archivoSalida, $header, $utf8NoBom)

# 2. Añadir HTML
if (Test-Path "index.html") {
    $html = Get-Content "index.html" -Raw -Encoding UTF8
    [System.IO.File]::AppendAllText($archivoSalida, "`n$html`n", $utf8NoBom)
}

# 3. Añadir CSS
$seccionCSS = @"

=== 2. ESTILOS GENERALES (css/styles.css) ===
"@
[System.IO.File]::AppendAllText($archivoSalida, $seccionCSS, $utf8NoBom)

if (Test-Path "css/styles.css") {
    $css = Get-Content "css/styles.css" -Raw -Encoding UTF8
    [System.IO.File]::AppendAllText($archivoSalida, "`n$css`n", $utf8NoBom)
}

# 4. Añadir Responsive
$seccionResponsive = @"

=== 3. ESTILOS RESPONSIVE (css/responsive.css) ===
"@
[System.IO.File]::AppendAllText($archivoSalida, $seccionResponsive, $utf8NoBom)

if (Test-Path "css/responsive.css") {
    $responsive = Get-Content "css/responsive.css" -Raw -Encoding UTF8
    [System.IO.File]::AppendAllText($archivoSalida, "`n$responsive`n", $utf8NoBom)
}

# 5. Añadir app.js
$seccionJS = @"

=== 4. LOGICA JAVASCRIPT (js/app.js) ===
"@
[System.IO.File]::AppendAllText($archivoSalida, $seccionJS, $utf8NoBom)

if (Test-Path "js/app.js") {
    $appjs = Get-Content "js/app.js" -Raw -Encoding UTF8
    [System.IO.File]::AppendAllText($archivoSalida, "`n$appjs`n", $utf8NoBom)
}

# 6. NUEVO: Añadir compras.js (Fase 3)
$seccionCompras = @"

=== 5. LOGICA COMPRAS (js/compras.js) ===
"@
[System.IO.File]::AppendAllText($archivoSalida, $seccionCompras, $utf8NoBom)

if (Test-Path "js/compras.js") {
    $comprasjs = Get-Content "js/compras.js" -Raw -Encoding UTF8
    [System.IO.File]::AppendAllText($archivoSalida, "`n$comprasjs`n", $utf8NoBom)
} else {
    [System.IO.File]::AppendAllText($archivoSalida, "`n[Archivo compras.js no encontrado]`n", $utf8NoBom)
}

Write-Host "✅ CODIGO_ACTUAL_KSAP.txt actualizado correctamente (UTF-8 sin BOM)." -ForegroundColor Green