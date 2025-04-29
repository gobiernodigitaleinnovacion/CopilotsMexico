document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todas las secciones de pestañas en la página
    const tabSections = document.querySelectorAll('.tabs-section');

    tabSections.forEach(section => {
        const tabButtons = section.querySelectorAll('.tab-button');
        const tabPanels = section.querySelectorAll('.tab-panel');

        // Función para activar una pestaña
        const activateTab = (index) => {
            // Remover la clase 'active' de todos los botones y paneles
            tabButtons.forEach(button => button.classList.remove('active'));
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
                panel.style.opacity = '0'; // Para la animación de desvanecimiento
            });

            // Añadir la clase 'active' al botón y panel seleccionados
            tabButtons[index].classList.add('active');
            tabPanels[index].classList.add('active');

            // Animación de desvanecimiento
            setTimeout(() => {
                tabPanels[index].style.opacity = '1';
            }, 50);
        };

        // Añadir eventos de clic a los botones de pestañas
        tabButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                activateTab(index);
            });
        });

        // Activar la primera pestaña por defecto
        if (tabButtons.length > 0) {
            activateTab(0);
        }
    });
});