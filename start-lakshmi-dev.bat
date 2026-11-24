@echo off
title Lakshmi Dev Server
cd /d "%~dp0"

echo Cleaning Next.js cache...
if exist ".next" (
    rmdir /s /q ".next"
    echo .next cache deleted.
) else (
    echo No .next cache found.
)

echo.
echo Starting Lakshmi Dev Server...
echo Open http://localhost:3000 after the server says Ready.
echo.

set NODE_OPTIONS=--max-old-space-size=2048
npm run dev

echo.
echo Server stopped.
pause
