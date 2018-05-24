# Ejercicio 1

- Abri www.google.com en Chrome o Firefox y abri la consola.
- Encontrá el logo de Google y guardalo en una variable.
- Modifica la fuente del logo IMG para que sea el logo de Yahoo.
- Encontrá el botón de búsqueda de Google y guardalo en una variable.
- Modifica el texto del botón para que diga "¡Yahooo!".

# Ejercicio 2
Vamos a crear una seccion "Sobre Nosotros"

- Crea este HTML y guardalo como "aboutme.html":
```
<! DOCTYPE html>
<html>
 <head>
  <meta charset = "utf-8" />
  <title> Acerca de mí </ title>
</ head>
<cuerpo>
  <h1> Acerca de mí </ h1>
  
  <ul>
    <li> Nombre: <span id = "nombre"> </ span>
    <li> Apodo: <span id = "apodo"> </ span>
    <li> Fecha de nacimiento: <span id = "fecha_nacimiento"> </ span>
   </ ul>
  
 </ body>
</ html>
```
  
- Agrega una etiqueta script en la parte inferior.
- Cambia el estilo del cuerpo para que tenga una tipografia "Arial, sans-serif".
- Completá cada uno de los elementos de la lista (nombre, apodo, fecha de nacimiento) con tu propia información.
- Itera a través de cada li y cambia la clase a "list-item". Agrega un estilo que haga que la clase "list-item" tenga color rojo.
- Crea una imagen y establece que su atributo source sea una imagen tuya. Añadi ese elemento a la página.

# Ejercicio 3

Vamos a crear una pagina para tener un registro de los libros que estamos leyendo y que queremos leer.

- Crea una página web con el titulo "Mi lista de libros".
- Agrega una etiqueta de script al final de la página, donde irán todos sus JS.
- Crea un array de objetos libro (Este tiene titulo, autor, imagen de portada y leido si/no).
- Itera a través del array de libros. Para cada libro, crea un `<p>` con el título y el autor del libro y añadilo a la página.

Plus : usa una lista para mostrar los libros.
Plus : agrega una propiedad a cada libro con la URL de la portada del libro y agrega un `<img>` para cada libro en la página.
Plus : cambia el estilo del libro dependiendo de si lo leiste o no.