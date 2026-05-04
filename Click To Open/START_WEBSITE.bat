@echo off
color 0b
title CoreLogic AI Systems Launcher
echo ===================================================
echo   Starting CoreLogic AI Systems Landing Page...
echo ===================================================
echo.
echo Please wait while the local server starts up...
cd ..

:: Wait a brief moment to let server initiate before opening browser
timeout /t 3 /nobreak > nul
start http://localhost:5173

:: Run the dev server
cmd /c "npm run dev"
pause
