# Amigo-secreto
Descripción
Esta App Web, fue creada con el fin de que las personas o usuarios puedan ingresar nombres de amigos y poder realizar un sorteo aleatorio con el fin de determinar el "Amigo Secreto". Los usuarios pueden ir agregando nombres mediante un campo de texto, Observar la lista y permitir realizar el sorteo con un click.

Funcionalidades
Agregar nombres: Los usuarios pueden ingresar el nombre de un amigo en un campo de texto y añadirlo a una lista visible al hacer clic en "Añadir".
Validación de entrada: Si el campo de texto está vacío, se muestra una alerta pidiendo un nombre válido.
Visualización de la lista: Los nombres ingresados se mostrarán en una lista debajo del campo de entrada.
Sorteo aleatorio: Al hacer clic en el botón "Sortear amigo", se selecciona aleatoriamente un nombre de la lista y se muestra el resultado en la página.

2. Acceder al directorio del proyecto con el siguiente comando:
cd amigo-secreto

3. Abre el archivo index.html en tu navegador para probar la aplicación.
Uso
Ingresa el nombre de un amigo en el campo de texto.
Haz clic en el botón "Añadir" para agregarlo a la lista.
Una vez agregados varios nombres, haz clic en "Sortear amigo" para seleccionar un amigo aleatorio de la lista.
El nombre del amigo secreto se mostrará en pantalla.
Dependencias
Este proyecto no tiene dependencias externas, solo utiliza HTML, CSS y JavaScript puro.

Estructura del Proyecto
amigo-secreto/
assets/: Imágenes y otros recursos estáticos
amigo-secreto.png
play_circle_outline.png
style.css: Estilos de la aplicación
app.js: Lógica de la aplicación en JavaScript
index.html: Estructura HTML de la aplicación
README.md: Documentación del proyecto
Contribución
Si deseas contribuir o ayudar a este proyecto, puedes hacer un fork y abrir un pull request. Asegúrate de seguir las buenas prácticas y de documentar cualquier cambio significativo que realices.

Haz un fork de este repositorio.
Crea una rama para tu funcionalidad o corrección.
Realiza los cambios y asegúrate de que todo esté probado.
Haz un pull request con una descripción clara de lo que cambiaste.
Problemas y Soluciones Comunes
1. ¿El campo de texto no acepta nombres vacíos?
La aplicación tiene una validación para evitar que se agregue un nombre vacío. Si el campo está vacío, aparecerá una alerta.

2. ¿El sorteo aleatorio no funciona?
Asegúrate de que haya al menos un nombre agregado a la lista antes de hacer el sorteo. Si la lista está vacía, aparecerá una alerta.
