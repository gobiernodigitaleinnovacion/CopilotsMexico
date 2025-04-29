Copilots México

Bienvenido al repositorio de Copilots México, un proyecto que ofrece soluciones de inteligencia artificial personalizadas para gobiernos y empresas en México. Creamos copilots que transforman la toma de decisiones utilizando datos estructurados y no estructurados, con tecnología de punta como Microsoft Fabric, Azure AI Foundry y Copilot Studio.
Descripción del Proyecto
Copilots México es un sitio web estático que presenta los servicios de creación de copilots para:

Gobiernos: Soluciones para estados y municipios con datos de INEGI, CONEVAL y Hacienda, cubriendo temas como demografía, pobreza, rezago social, finanzas y FAIS.
Empresas: Copilots personalizados para optimizar operaciones, finanzas y análisis de mercado, integrando datos estructurados (bases de datos) y no estructurados (correos, facturas, documentos).

El sitio está construido con HTML, CSS y JavaScript, y está desplegado en Azure Static Web Apps. Incluye las siguientes páginas:

public/index.html: Página principal con información general.
gobiernos/index.html: Soluciones para gobiernos, con una tabla de copilots por estado.
empresas/index.html: Soluciones para empresas, con casos de uso y beneficios.
legal/terms.html, legal/privacy.html, legal/notice.html: Páginas legales con términos y condiciones, política de privacidad y aviso legal.

Características Principales

Formulario Flotante de Contacto: Disponible en todas las páginas para que los usuarios puedan contactarnos fácilmente.
Diseño Responsivo: Adaptado para dispositivos móviles y de escritorio.
Navegación Suave: Enlaces de navegación con desplazamiento suave.
Animaciones: Tarjetas con animaciones al hacer scroll.
Despliegue en Azure: Hospedado en Azure Static Web Apps para un acceso rápido y confiable.

Estructura del Proyecto
CopilotsMexico/
├── assets/
│   ├── gdi.png                # Logo de Copilots México
│   ├── images/
│   │   └── fallback-hero.jpg  # Imagen de respaldo para el hero
│   └── videos/
│       └── hero-banner.mp4    # Video del hero banner
├── css/
│   └── styles.css             # Estilos globales del sitio
├── js/
│   ├── main.js                # Lógica principal (formulario flotante, menú móvil, animaciones)
│   └── tabs.js                # Funcionalidad de pestañas (casos de uso en empresas)
├── public/
│   └── index.html             # Página principal
├── gobiernos/
│   └── index.html             # Página de soluciones para gobiernos
├── empresas/
│   └── index.html             # Página de soluciones para empresas
├── legal/
│   ├── terms.html             # Términos y condiciones
│   ├── privacy.html           # Política de privacidad
│   └── notice.html            # Aviso legal
├── .gitignore                 # Archivos ignorados por Git
└── README.md                  # Documentación del proyecto

Requisitos Previos
No se necesitan herramientas específicas más allá de un navegador web para visualizar el sitio. Sin embargo, si deseas editar o ejecutar el proyecto localmente, necesitarás:

Un editor de código (por ejemplo, Visual Studio Code).
Git (para clonar el repositorio).
Opcionalmente, una extensión como Live Server en VS Code para servir el sitio localmente.

Instalación y Ejecución Local

Clona el Repositorio:
git clone https://github.com/<tu-usuario>/CopilotsMexico.git
cd CopilotsMexico


Abre el Proyecto:

Abre la carpeta del proyecto en tu editor de código.
Si usas VS Code con la extensión Live Server, haz clic derecho en public/index.html y selecciona "Open with Live Server" para iniciar un servidor local (por lo general, en http://localhost:5500/public/index.html).
Alternativamente, puedes abrir public/index.html directamente en tu navegador, pero asegúrate de que las rutas relativas funcionen correctamente.


Explora las Páginas:

Navega a las diferentes páginas (public/index.html, gobiernos/index.html, empresas/index.html, etc.) para ver el contenido y probar el formulario de contacto.



Despliegue en Azure Static Web Apps
El proyecto está configurado para desplegarse en Azure Static Web Apps. Sigue estos pasos para desplegar una nueva versión:

Vincula tu Repositorio a Azure:

Ve a Azure Static Web Apps en el portal de Azure.
Crea una nueva Static Web App y vincúlala a tu repositorio de GitHub.
Configura la rama principal (main) como la rama de despliegue.


Configura los Detalles del Despliegue:

Ruta de la Aplicación: / (raíz del proyecto).
Ruta de Salida: / (no se necesita un proceso de construcción, ya que es un sitio estático).
Rutas de API (opcional): No se usa en este proyecto.


Despliega los Cambios:

Cada vez que hagas un push a la rama main, Azure Static Web Apps desplegará automáticamente los cambios.
Ejemplo:git add .
git commit -m "Actualización del sitio"
git push origin main




Verifica el Despliegue:

Una vez que el despliegue esté completo, Azure te proporcionará una URL (por ejemplo, https://<nombre-de-tu-app>.azurestaticapps.net).
Visita la URL y prueba todas las páginas, incluyendo el formulario de contacto.



Contribuir
Si deseas contribuir al proyecto, sigue estos pasos:

Haz un Fork del Repositorio:

Haz clic en el botón "Fork" en GitHub para crear una copia del repositorio en tu cuenta.


Clona tu Fork:
git clone https://github.com/<tu-usuario>/CopilotsMexico.git
cd CopilotsMexico


Crea una Nueva Rama:
git checkout -b mi-nueva-funcionalidad


Realiza tus Cambios:

Edita los archivos necesarios (HTML, CSS, JS, etc.).
Asegúrate de probar tus cambios localmente.


Sube tus Cambios:
git add .
git commit -m "Añadí una nueva funcionalidad"
git push origin mi-nueva-funcionalidad


Crea un Pull Request:

Ve a tu fork en GitHub y crea un pull request hacia el repositorio original (main).
Describe tus cambios en detalle para que puedan ser revisados.



Problemas Conocidos

Rutas Relativas: Si pruebas el sitio localmente sin un servidor (abriendo los archivos directamente en el navegador), las rutas relativas (como ../assets/) pueden no funcionar correctamente. Usa un servidor local (como Live Server) para evitar este problema.
Compatibilidad de Navegadores: El sitio ha sido probado en navegadores modernos (Chrome, Firefox, Edge). Si encuentras problemas en otros navegadores, por favor reporta un issue.

Contacto
Si tienes preguntas o deseas más información, usa el formulario de contacto en el sitio o contáctanos directamente a través de:

LinkedIn: Gobierno Digital e Innovación
WhatsApp: +52 55 1080 6597
Correo Electrónico: Usa el formulario de contacto en el sitio.

Licencia
© 2025 Copilots México. Todos los derechos reservados. Este proyecto no tiene una licencia específica para uso o distribución; contáctanos para obtener permiso de uso.
