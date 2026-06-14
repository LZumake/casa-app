# Script para sincronizar BACKLOG con merge inteligente
# Autor: Leire (KSAP Project)

$archivoOrigen = "backlog_local.md"
$archivoDestino = "BACKLOG.md"
$fecha = Get-Date -Format "dd/MM/yyyy HH:mm"

# 1. Verificar que el archivo local existe
if (-not (Test-Path $archivoOrigen)) {
    Write-Host "❌ No se encuentra '$archivoOrigen' en la carpeta local." -ForegroundColor Red
    Write-Host "Asegúrate de haber copiado el backlog desde el chat a este archivo." -ForegroundColor Yellow
    exit
}

# 2. Leer contenido nuevo
$contenidoNuevo = Get-Content $archivoOrigen -Raw -Encoding UTF8

# 3. Si existe BACKLOG.md, hacer merge inteligente
if (Test-Path $archivoDestino) {
    $contenidoExistente = Get-Content $archivoDestino -Raw -Encoding UTF8
    
    # Extraer IDs del contenido existente (### 1️⃣, ### 2️⃣, etc.)
    $idsExistentes = [regex]::Matches($contenidoExistente, '### (\d+️⃣)') | ForEach-Object { $_.Groups[1].Value }
    
    # Extraer IDs del contenido nuevo
    $idsNuevos = [regex]::Matches($contenidoNuevo, '### (\d+️⃣)') | ForEach-Object { $_.Groups[1].Value }
    
    # Verificar si hay items nuevos que no existen
    $itemsNuevos = $idsNuevos | Where-Object { $_ -notin $idsExistentes }
    
    if ($itemsNuevos.Count -gt 0) {
        # Añadir solo los items nuevos al final del archivo existente
        $cabeceraNueva = "`n`n============================================================`r`n"
        $cabeceraNueva += "NUEVOS ITEMS AÑADIDOS - $fecha`r`n"
        $cabeceraNueva += "============================================================`r`n`r`n"
        
        # Extraer solo los items nuevos del contenido nuevo
        $contenidoItemsNuevos = ""
        foreach ($id in $itemsNuevos) {
            # Extraer el bloque completo del item
            $pattern = "(### $id[\s\S]*?)(?=### \d+️⃣|$)"
            $match = [regex]::Match($contenidoNuevo, $pattern)
            if ($match.Success) {
                $contenidoItemsNuevos += $match.Groups[1].Value + "`r`n"
            }
        }
        
        $contenidoFinal = $contenidoExistente + $cabeceraNueva + $contenidoItemsNuevos
        Write-Host "✅ Merge completado: $($itemsNuevos.Count) item(s) nuevo(s) añadido(s)" -ForegroundColor Green
    } else {
        # No hay items nuevos, solo actualizar fecha de cabecera
        $contenidoFinal = $contenidoExistente
        Write-Host "ℹ️  No hay items nuevos. Solo se actualizó la fecha." -ForegroundColor Yellow
    }
} else {
    # No existe BACKLOG.md, crear uno nuevo
    $cabecera = "============================================================`r`n"
    $cabecera += "BACKLOG KSAP - Proyecto DAW`r`n"
    $cabecera += "Última actualización: $fecha`r`n"
    $cabecera += "============================================================`r`n`r`n"
    
    $contenidoFinal = $cabecera + $contenidoNuevo
    Write-Host "✅ BACKLOG.md creado desde cero" -ForegroundColor Green
}

# 4. Guardar el archivo final
$contenidoFinal | Set-Content $archivoDestino -Encoding UTF8

Write-Host "✅ $archivoDestino listo para subir al proyecto." -ForegroundColor Green