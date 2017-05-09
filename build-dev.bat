@echo off 
cd %cd%
del %cd%\src\assets\js\ajax.js
copy %cd%\profile\dev\ajax.js %cd%\src\assets\js\
npm run build
pause