@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

set "archivoOrigen=backlog_local.md"
set "archivoDestino=BACKLOG.md"

if not exist "%archivoOrigen%" (
    echo ❌ No se encuentra '%archivoOrigen%'
    exit /b 1
)

if exist "%archivoDestino%" (
    type "%archivoDestino%" > temp_backlog.tmp
    echo. >> temp_backlog.tmp
    echo ============================================================ >> temp_backlog.tmp
    echo NUEVOS ITEMS AÑADIDOS - %date% %time% >> temp_backlog.tmp
    echo ============================================================ >> temp_backlog.tmp
    echo. >> temp_backlog.tmp
    type "%archivoOrigen%" >> temp_backlog.tmp
    move /y temp_backlog.tmp "%archivoDestino%" >nul
    echo ✅ Merge completado
) else (
    copy "%archivoOrigen%" "%archivoDestino%" >nul
    echo ✅ BACKLOG.md creado
)

endlocal