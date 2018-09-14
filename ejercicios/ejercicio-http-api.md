# Ejercicio: Tindercats - Tinder para gatitos

## Paso 1: Maquetado 

Vamos a armar el maquetado base de nuestra app. Se tienen que basar en las imagenes [1](/assets/tindergatis1.png) y [2](/assets/tindergatis2.png), pero pueden cambiar o agregar lo que deseen.

En un principio, podes poner cualquier imagen de muestra. Luego las vamos a traer de una api.

Pista: Para los botones, podes usar iconos como material icons o font awesome.

Plus: Usa flexbox, y hace que sea responsive.


## Paso 2: Traemos imágenes de la API

En un principio, tendremos que hacerle una peticion ajax a la siguiente api:
https://api.thecatapi.com/v1/images/search

y luego insertarla en el div de la imagen principal a traves de javascript o jquery, como mas te guste.

Pista: La Api, nos devuelve un json... que propiedad de ese json podemos usar para mostrar la imagen?

Ya tenemos una imagen de gatito! Si refrescamos vamos a ver una imagen nueva cada vez que se cargue la página.


## Paso 3: NEXT

Desarrollar la funcionalidad que se va a ejecutar al presionar el boton, la idea es que cada vez que lo presionemos llamemos de nuevo a la API para que nos traiga otras imagenes!.


## Paso 4: Botón de favoritos

Creemos una función de favoritos. 

Vamos a necesitar una referencia para identificar a la imágen que queremos marcar como favorita.

Cuando consultamos a la API, esta nos devuelve la URL de la imagen. 

Esta es la que vamos a tener que agregar a favoritos.

Como son varios favoritos, pensar en como hacer eso con un array.

Pista: Que metodo del array nos sirve para agregar elementos?

Plus: Hacer que no se pueda agregar dos veces la misma URL.


## Paso 5: Eliminar favorito.

Finalmente, vamos a agregar la funcionalidad para borrar un favorito. Como se te ocurre que podemos hacerlo?

Ahora ya tenemos una app completamente funcional.
