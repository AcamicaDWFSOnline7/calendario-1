<img src="/assets/acamica.jpg">

# Acámica DWFS Wiki | Sede Centro

## 📅 Calendario | Semana 12

### 🔴 Martes 29 de Mayo

Continuamos viendo aspectos del **DOM**, específicamente su manipulación desde JavaScript. Repasamos los diferentes métodos para acceder a los elementos en base a su **tag, id o class**, y algunos de los métodos para agregar, reemplazar o eliminarlos de nuestro documento HTML. En base a esto hicimos en grupos de a dos algunos [ejercicios](../ejercicios/ejercicios-dom.md) para practicar estos conceptos.

### 🔴 Jueves 31 de Mayo

Comenzamos resolviendo en clase los primeros tres ejercicios de [Programación](../ejercicios/00-intro-programacion-01.md), para luego continuar con los **Ejercicios de DOM** que habíamos comenzado el martes. Corregimos el 2 **Quiénes somos**. Luego comenzamos a ver algunos aspectos del manejo de eventos, específicamente sobre 

### 👩‍💻 Módulos y unidades relacionados

* [**Manipulando al DOM**](https://www.acamica.com/cursos/454/manipulando-al-dom)
* [**Eventos en JavaScript**](https://www.acamica.com/clases/10236/javascript-eventos/introduccion)

### 🕵️ Bibliografía recomendada

#### Documentación técnica

**Métodos para interactuar con el DOM**&nbsp;⚠️

* 📄&nbsp;[**MDN | `createElement`**](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
* 📄&nbsp;[**MDN | `replaceChild`**](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild)
* 📄&nbsp;[**MDN | `appendChild`**](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
* 📄&nbsp;[**MDN | `getElementsByTagName`**](https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByTagName)
* 📄&nbsp;[**MDN | `getElementsByClassName`**](https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByClassName)
* 📄&nbsp;[**MDN | `getElementById`**](https://developer.mozilla.org/es/docs/Web/API/Document/getElementById)
* 📄&nbsp;[**MDN | `querySelector`**](https://developer.mozilla.org/es/docs/Web/API/Document/querySelector)&nbsp;Este método nos permite acceder a cualquier elemento del DOM haciendo referencia con un selector, de la misma forma que lo usamos en CSS, como vimos en la [semana 1](semana-01.md).
* 📄&nbsp;[**MDN | `window.getComputedStyle`**](https://developer.mozilla.org/es/docs/Web/API/Window/getComputedStyle)&nbsp;Este método nos permite saber qué estilos están efectivamente aplicados en un elemento HTML que recibe por argumento. No confundir con la propiedad [`style`](https://developer.mozilla.org/es/docs/Web/API/HTMLElement/style)!
* 📄&nbsp;[**MDN | `classList`**](https://developer.mozilla.org/es/docs/Web/API/Element/classList)&nbsp;Esta propiedad de los elementos HTML nos permite acceder y operar con todas las clases declaradas a través del atributo `class` como si fuera un array.

**Eventos**

* 📄&nbsp;[**MDN | Referencia de Eventos**](https://developer.mozilla.org/es/docs/Web/Reference/Events)⚠️&nbsp;Referencia completa de los **eventos** a los que nos podemos suscribir en los **elementos HTML**.
* 📄&nbsp;[**MDN | `addEventListener`**](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)⚠️&nbsp;Este método nos permite suscribirnos a los eventos de cualquier elemento HTML.
* 📄&nbsp;[**MDN | `Event` Object **](https://developer.mozilla.org/es/docs/Web/API/Event)⚠️&nbsp;Cuando nos suscribimos a un evento, la función que utilizamos recibe un parámetro. Este es el **event object**, con métodos y propiedades que nos brindarán información y funcionalidades para completar las acciones con que deseamos reaccionar al evento.

**Y además...**

* 📄&nbsp;[**MDN | Funciones Flecha**](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions)⚠️&nbsp;Las funciones flecha o **arrow functions** son ni más ni menos que una nueva sintaxis para la declaración de funciones. Es probable que la veamos implementada cuando necesitamos declarar un **callback** o el **método de un objeto**. Esta es la referencia a su definición.


#### Libros

* 📚&nbsp;[**Eloquent JavaScript**](https://eloquentjavascript.net/)️️⚠️&nbsp;Esta obra de [Marijn Haverbeke](https://twitter.com/marijnjh?lang=es) es una excelente reseña de las características de **JavaScript del lado del navegador**, recorriendo tanto sus aspectos básicos como los más avanzados (que veremos en semanas próximas), así como temas ligados a su rol dentro de los sitios web. Recomendamos en este caso los capítulos [14. The Document Object Model](https://eloquentjavascript.net/14_dom.html), [15. Handling Events](https://eloquentjavascript.net/15_event.html). Si se animan, también pueden profundizar lo que vimos de asincronismo en el capítulo [11. Asynchronous programming](https://eloquentjavascript.net/11_async.html) hasta la sección **callbacks** inclusive.

#### Videos

* 📺&nbsp;[**Acámica | Asincronismo en JavaScript**](https://www.acamica.com/cursos/74/asincronismo-en-javascript/niveles)️️⚠️&nbsp;Este curso de la plataforma describe todas la formas de trabajar de manera asincrónica con JavaScript. Si bien estas distintas metodologías las veremos cuando trabajemos con NodeJS, la **Unidad 1: Introducción al asincronismo** da una descripción muy clara y concreta de qué es el asincronismo y cómo es que JavaScript trabaja de manera asincrónica.
* 📺&nbsp;[**Estructuras de datos – 11. Introducción a los árboles**](https://www.youtube.com/watch?v=Qexq1k8LB6k)&nbsp;Hablamos del **árbol de nodos** como estructura para organizar el documento HTML, pero no se trata de una estructura creada para el Document Object Model sino que es un tipo de **estructura de datos** que tiene varias aplicaciones en informática. Este video hace un repaso por sus características. Piensen cómo se aplican sus principios a través de los métodos y propiedades del DOM.
* 📺&nbsp;[**Philip Roberts: What the heck is the event loop anyway?**](https://www.youtube.com/watch?v=8aGhZQkoFbQ)&nbsp;Esta charla hace un repaso profundo por el **event loop**, con conceptos avanzados pero a la vez de manera muy clara. ¡La super recomendamos!

#### Artículos

* 🔖&nbsp;[**Librosweb.es | Eventos**](http://librosweb.es/libro/javascript/capitulo_6.html)⚠️&nbsp;El capítulo de **introducción a JavaScript** sobre **eventos** hace un buen repaso sobre 
* 🔖&nbsp;[**MDN | Modelo de concurrencia y loop de eventos**](https://developer.mozilla.org/es/docs/Web/JavaScript/EventLoop)&nbsp;Este artículo del MDN describe la forma en que el motor de JavaScript encola los eventos de manera asincrónica.
* 🔖&nbsp;[**Entendiendo el Event Loop o Bucle de Eventos en Javascript**](https://medium.com/@davidjsmoreno/entendiendo-el-event-loop-o-bucle-de-eventos-en-javascript-b294d882fd14)&nbsp;Otro enfoque con un ejemplo práctico sobre JavaScript, les recomendamos primero ver el curso de Asincronismo en JavaScript.
* 🔖&nbsp;[**Javascript: ¿Qué son, cómo usar y ejemplos del uso de callbacks?**](http://anexsoft.com/p/112/javascript-que-son-como-usar-y-ejemplos-del-uso-de-callbacks)&nbsp;Para el manejo de eventos comenzaremos a usar **callbacks**, este artículo hace un repaso por su implementación y da un ejemplo práctico con eventos.

---

### 🏋 Ejercicios

* [DOM Events](../ejercicios/ejercicio-eventos.md)&nbsp;Vamos a ponernos a prueba con el manejo de eventos, utilizando el documento HTML que creamos al resolver el ejercicio **Quiénes somos** para agregarle interacción con el usuario.
* []

----

[Home](/readme.md) - [Calendario](/semanas/calendario.md) - [Proyectos y Ejercicios](/proyectos-y-ejercicios.md)