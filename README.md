# Proyecto Backoffice PlaceMyBet

Alumno: Marco Antonio Climent Heras
2ºDam ONLINE
Programa Multimedia y de dispositivos móviles

## Cómo instalar

1-Descargar el dump de base de datos adjunto al programa e importarlo, ejecutar la api en una aplicación como Visual Studio(puerto 54446)
2-Instalar Visual Studio Code y abrir el proyecto
3-Ejecutar con npm run start (conectado al puerto 3000)


## Vistas disponibles

Estas son las vistas disponibles en nuestra primera versión de la aplicación

### Usuarios

![vista usuarios](https://i.gyazo.com/ba56ed8fad4142be0361d5f9920cc2ad.png)

La vista de usuarios mediante Datatable nos muestra un listado de los usuarios registrados ordenados por su email, dando opción a filtrar específicamente, restablecer la contraseña de un usuario o eliminarlo de la base de datos.

### Eventos

![Vista eventos](https://i.gyazo.com/4940cab6b2e469e99104689c07a77045.png)

La vista de eventos nos ofrece un listado de los eventos próximos a jugar de manera ordenada. Los botones nos permiten editar fecha y hora del partido, eliminarlo o añadir uno nuevo

### Apuestas

![Vista Apuestas](https://i.gyazo.com/10f2635dd69497bbb1595e3097a10dac.png)

A petición del cliente añadimos las funcionalidades de mostrar las apuestas, filtrar, añadir nuevos mercados de apuesta(mostrado en la imagen más adelante) y bloquear un mercado para evitar posteriores apuestas.

![Vista apuestas2](https://i.gyazo.com/6b49751d76b3a4900cb49591c39ed735.png)

### Informes


![Vista Informes](https://i.gyazo.com/0114487518ef5b396816f814744754b8.png)
Aquí podemos ver una gráfica con las apuestas por día(morado) y altas de usuario por día(negro) generada por nuestra aplicación mediante el uso de PrimeReact/Bar

**Queda pendiente implementar el backend, los datos mostrados en esta imagen son de ejemplo.**

## En conclusión

Solo se ha usado Primereact como librería, ocasionalmente recurriendo a Axios para el manejo del backend de una manera más simple
