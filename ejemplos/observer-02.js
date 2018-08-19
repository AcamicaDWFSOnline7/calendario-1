/**
 * Como sabemos, para implementar el patrón Observer, necesitamos implementar:
 * * Un método para suscribirnos.
 * * Un método para desuscribirnos (que en este caso no implementamos).
 * * Una lista para guardar las suscripciones.
 * * Un método para notificar a todos los suscriptos al evento.
 * 
 * Si estos requerimientos van a ser siempre los mismos, independientemente del contexto en el cual
 * lo implementaremos, podemos abstraerlos en un nuevo prototipo Evento, al que instanciaremos
 * cada vez que necesitamos crear un evento:
 * 
 */
var Evento = function( productor ) {

    /**
     * En la función constructora agregamos como parámetro la posibilidad de recibir la referencia
     * al objeto que va a instanciar los eventos, y guardarnos su referencia. Esto podría servirnos 
     * para devolverlo a los suscriptores.
     */

    this._productor = productor;

    this._observadores = [];

    this.suscribir = function( observador ) {
        console.log( this._observadores );
        this._observadores.push( observador );
    };

    /**
     * Al crear el método notificar() le agreamos la posibilidad de que reciba un parámetro, el cual
     * se encargará de distribuir a todos los que se suscribieron al evento por igual. El nombre escogido
     * nos hace referencia al Event Object, pero no es obligatorio utilizar el mismo nombre.
     */

    this.notificar = function( e ) {
        this._observadores.forEach( function ( observador ) {
            observador( e );
        } );
    };

};

var Productor = (function(){

    /**
     * En este caso, el objeto Productor, en lugar de implementar el patrón, instancia un objeto Evento
     * por cada uno de los que quiera crear. En este caso, eventoCorrer y eventoSaltar.
     */
    var eventoCorrer = new Evento ( this );
    var eventoSaltar = new Evento ( this );

    /**
     * En este caso, los encargados de disparar eventoCorrer y eventoSaltar serán correr y saltar, respectivamente.
     * No es requerimiento del patrón que cada evento disponga de un método exclusivo que lo dispare. Esta acción, 
     * como desarrolladores del objeto Productor, la vamos a ejecutar cuando nosotros consideremos que los suscriptores
     * necesiten ser notificados de que determinado evento ocurrió. Podría ser luego de la respuesta de un servidor, de 
     * realizar una operación algorítmica compleja, crear una serie de elementos HTML y agregarlos al DOM, etc. Eso va a
     * depender del diseño de nuestro objeto, y en definitiva, de nuestra aplicación.
     * 
     * En resumen, la existencia de correr() y saltar() es sólo a fines prácticos.
     */

    var correr = function() {
        console.log("corre!");
        eventoCorrer.notificar({
            date: new Date(),
            eventName: 'correr',
            target: this
        });
    };

    var saltar = function() {
        console.log("salta!");
        eventoSaltar.notificar({
            date: new Date(),
            eventName: 'saltar',
            target: this
        });
    };

    /**
     * Cuando invocamos al método notificar() de cada evento, le pasamos como parámetro un objeto literal que contiene las propiedades
     * date, eventName, target.
     * 
     * De esta manera podemos ver cómo podemos, desde nuestro objeto productor, pasarle algunos datos que pueden ser de interés
     * para quienes se suscriben a nuestro evento.
     */

    return {
        correr,
        saltar,
        eventoCorrer,
        eventoSaltar
    }

})();

Productor.eventoCorrer.suscribir( function( e ) {
    console.log( e );
} );

Productor.eventoSaltar.suscribir( function( e ) {
    console.log( e );
} );

Productor.saltar();
Productor.correr();
