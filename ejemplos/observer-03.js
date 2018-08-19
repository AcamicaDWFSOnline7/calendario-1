var Evento = function( productor ) {

    this._productor = productor;
    this._observadores = [];

    this.suscribir = function( observador ) {
        console.log( this._observadores );
        this._observadores.push( observador );
    };

    this.notificar = function( e ) {
        this._observadores.forEach( function ( observador ) {
            observador( e );
        } );
    };

};

var Productor = (function(){

    /**
     * De la forma en que implementamos eventoCorrer y eventoSaltar, si observamos el objeto literal que devolvemos
     * en el return de la IIFE que crea el objeto Productor, los eventos se exponen tanto con su método suscribir()
     * como con sus métodos notificar() y e listado de observadores. Esta tal vez no sea lo deseado, ya que de esta manera,
     * quien acceda a Productor, podría ejecutar Productor.eventoCorrer.notificar(), y lanzar el evento, que debería
     * ser potestad del mismo Productor y no de quienes interactúan con él.
     */

    var eventoCorrer = new Evento ( this );
    var eventoSaltar = new Evento ( this );
    
    /**
     * Para eso creamos un nuevo Evento en la propiedad eventoCantar, del cual sólo expondremos su método suscribir()
     */
    var eventoCantar = new Evento ( this );

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

    var cantar = function() {
        eventoCantar.notificar();
    }

    return {
        correr,
        saltar,
        cantar,
        eventoCorrer,
        eventoSaltar,
        /**
         * Para pasar la referencia al método suscribir de eventoCantar, bastaría con escribir
         * 
         * suscripcionEventoCantar: eventoCantar.suscribir
         * 
         * Sin embargo, al intentar ejecutar este método, probablemente recibamos un error que nos informa
         * que la lista de suscriptores (_observadores) no existe. ¿Por qué sucede esto?
         * 
         * Necesitamos recordar los conceptos de scope, entre los cuales está el que nos indica que, dentro de una
         * de una función, "this" es la referencia al contexto donde se ejecuta.
         * 
         * Si invocamos Productor.suscripcionEventoCantar( suscriptor ), el contexto de este método ya no es el objeto 
         * eventoCrear, sino Productor. Y en el Productor, no hay ninguna propiedad que se llame _observadores!
         * 
         * Para resolverlo, necesitamos asegurarnos que el contexto de suscripcionEventoCantar() sea eventoCantar. Y
         * dentro de las propiedades que el objeto Function ("En JS TODO es un objeto"), tenemos el método bind( context ),
         * el cual nos permite crear una  referencia a la función con el contexto que le pasemos por parámetro.
         * 
         * Ya sé, es un poco redundante, pero de esta manera, nos aseguramos que cuando el método suscribir() de la línea 6
         * haga referencia a this, en este caso sea eventoCantar y no Productor.
         */
        suscripcionEventoCantar: eventoCantar.suscribir.bind ( eventoCantar ),
    }

})();

Productor.eventoCorrer.suscribir( function( e ) {
    console.log( e );
} );

Productor.eventoSaltar.suscribir( function( e ) {
    console.log( e );
} );

/**
 * Ahora podemos suscribirnos al eventoCantar sin tener acceso a sus métodos notificar() ni a la lista de suscriptores.
 * La necesidad de mostrar u ocultar esta información, como siempre, va a estar determinada por el problema que estamos
 * resolviendo cuando creamos nuestro objeto, y en definitiva, a las necesidades de nuestra aplicación, siguiendo los principios
 * de encapsulamiento y mínimo privilegio posible.
 */

Productor.suscripcionEventoCantar( function ( e ) {
    console.log ( e );
} );

Productor.saltar();
Productor.correr();
Productor.cantar();