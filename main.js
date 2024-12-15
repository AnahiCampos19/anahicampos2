// Seleccionar el botón de modo oscuro y el icono dentro de él
const darkModeToggle = document.getElementById('dark-mode-toggle'); 
const darkModeIcon = darkModeToggle.querySelector('i');

// Agregar evento al botón de modo oscuro
darkModeToggle.addEventListener('click', () => {
    // Alternar la clase dark-mode en el cuerpo
    document.body.classList.toggle('dark-mode');
    
    // Cambiar el icono entre luna y sol
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    } else {
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
    }
});
// Menú hamburguesa
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});
  
