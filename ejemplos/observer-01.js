/**
 * El objeto Productor representa al "producer" dentro del patrón Observer.
 * Los "subscribers" van a ser notificados por este objeto cuando se produzca su evento.
 * 
 * Para declarar el objeto Productor en este caso usamos funciones inmediatas (IIFE).
 */
var Productor = (function(){

    // Cuando los "subscribers" se suscriban al evento,
    // "Producer" va a guardarlos en este array
    var notificables = [];

    // Esta función será la encargada de disparar el evento cuando sea invocada.
    // Primero realizará un logueo en consola para informar sobre elevento.
    // Esto, desde luego, no es obligatorio, sólo un ejemplo de que dispararEvento
    // podría encerrar cualquier operación.
    // En la línea 20 llama al método _notificar que se encargará a notificar 
    // a los suscriptores que el evento se ejecutó. Lo hace con un setTimeout
    // luego de 1000 milisegundos.
    var dispararEvento = function() {
        console.log( "Se disparó el evento" );
        setTimeout( _notificar, 1000 );
    }

    // Este método va a permitir a quien lo desee, suscribirse a la lista
    // de notificables para poder anoticiarse de que el evento sucedió. 
    var agregarNotificable = function( notificable ) {
        notificables.push( notificable );
    }

    // Esta función se ocupa de recorrer la lista de notificables con el método
    // forEach, que recibe como parámetro un callback al cual le pasa como parámetro
    // un objeto que en este caso damos nombre de "notificable".
    // forEach ejecutará un callback por cada elemento de la lista, es decir, cada uno 
    // de los suscriptores al evento.
    // 
    // En este caso, el patrón está implementado de manera que todos los suscriptores tienen
    // un método notificar() al cual ejecutar cuando el evento se produzca.
    //
    // En resumen, cuando sea invocado _notificar(), esta función avisará a todos los suscriptores
    // que el evento se ha producido.
    var _notificar = function() {
        notificables.forEach( function ( notificable ) {
            notificable.notificar( "objeto productor" );
        } );
    }

    // En el return devolvemos un objeto literal con la referencia a las funciones de la IIFE que 
    // Queremos exponer para que operen quienes trabajen con el objeto Productor.
    //
    // Recordemos que al crear un objeto estamos generando un nuevo scope, y todas las funciones 
    // de la IIFE son closures que pueden acceder al resto de los miembros de la IIFE, es decir,
    // del mismo scope.
    return {
        dispararEvento,
        agregarNotificable
    }

})();

/**
 * Este objeto es uno de los suscriptores, que en el patrón Observer es el "subscriber".
 * También lo creamos a través de una IIFE, aunque en este caso no necesitemos de un scope
 * privado, ya que el método notificar() no accede a su contexto para cumplir con su objetivo. 
 * 
 */
var ObjetoUno = (function() {

    var notificar = function( productor ) {
        console.log( "objeto uno notificado desde", productor );
    };

    return {
        notificar
    }

})();

/**
 * Creamos otro suscriptor...
 * 
 * Confirmamos que dentro del arquitectura de nuestro objeto Productor, los suscriptores deben ser objetos
 * que tengan declarado un método notificar(). Esto no es parte del patrón de diseño en particular, sino
 * de la decisión de quien diseñó el objeto Productor.
 */
var ObjetoDos = (function() {

    var notificar = function( productor ) {
        console.log( "objeto dos notificado desde", productor );
    };

    return {
        notificar
    }

})();

// Invocamos el método agregarNotificable() al cual le pasamos como parámetro la referencia a
// ObjetoUno y ObjetoDos para que cuyos métodos notificar() sean invocados cuando el evento se produzca.
Productor.agregarNotificable( ObjetoUno );
Productor.agregarNotificable( ObjetoDos );

// En este caso el método que dispara el evento es expuesto dentro de nuestro scope, sin embargo no siempre 
// tenemos el control de ejecución del evento y no es parte del patrón de diseño Observer.
Productor.dispararEvento();

/**
 * En este caso, tenemos una objeto Producer que tiene sólo un método para suscribirse a su único evento.
 * Las suscripciones son guardadas en una única lista, y el evento es informado a través de una única función _notificar().
 * 
 * En resumen, para aplicar el patrón necesitamos:
 * * Un método para suscribirnos.
 * * Un método para desuscribirnos (que en este caso no implementamos).
 * * Una lista para guardar las suscripciones.
 * * Un método para notificar a todos los suscriptos al evento.
 * 
 * El patrón Observer, como vimos, es utilizado como patrón por varios objetos. Entre ellos, los HTMLElement que utiliza
 * el DOM para representar a los elementos HTML de nuestro documento. Estos elementos no notifican de sólo un evento.
 * 
 * Esta situación es bastante común y puede resultarnos muy tedioso tener que implementar una lista y los métodos necesarios 
 * por cada evento que va a disparar nuestro objeto. Sin embargo, hay una solución que veremos en el ejemplo 02.
*/

