# Programación - Ejercicios - Parte 1
 
 Para poder realizar estos ejercicios vamos a crear un archivo JavaScript por cada uno (Ej: *ejercicio1.js*). Para ejecutarlo y probar el programa, agregarlo a nuestro archivo index.html (no es necesario que tenga contenido HTML declarado más allá de la estructura básica). Nuestro programa se ejecutará en la consola del navegador.

### Temas
* Variables
* Funciones
* Condicionales

 --- 

1. Necesitamos desarrollar una función que nos devuelva el perímetro de un círculo recibiendo como único valor su radio. De la misma forma necesitamos crear una función que nos devuelva su área. Una vez creadas, le pasaremos un valor de radio y guardaremos el resultado en cada variable, para mostrar finalmente por consola ambos valores.  
*Pistas:*  
   * *¿Recordás cómo realizar el cálculo de [perímetro](https://es.wikipedia.org/wiki/C%C3%ADrculo#Per%C3%ADmetro_del_C%C3%ADrculo) y [área](https://es.wikipedia.org/wiki/C%C3%ADrculo#%C3%81rea_del_c%C3%ADrculo) de un círculo a partir de su radio?*
   * *JavaScript nos provee el valor del número π (Pi), ¿te animás a averiguar cómo?*

2. Necesitamos desarrollar una función para calcular el Teorema de Pitágoras. La función va a recibir los catetos y devolverá la hipotenusa. Mostrar el resultado por Consola.  
*Pistas:*  
   * *¿Recordás el [Teorema de Pitágoras](https://es.wikipedia.org/wiki/Teorema_de_Pit%C3%A1goras)?*
   * *JavaScript nos provee funciones para calcular potencias y raíces cuadradas, ¿te animás a investigar cuáles son?*

3. Necesitamos desarrollar una función que, dado un número, nos devuelva sólo su parte decimal. Acto seguido la informaremos por consola.  
*Pistas:*  
   * *JavaScript nos provee una función para obtener su parte entera, ¿te animas a investigar cuál es?*

4. Necesitamos desarrollar una función que, dado un número, nos informe si es par o impar por consola.  
*Pistas:*  
   * *Para saber si un número es par lo que necesitamos saber es divisible por 2, ¿te acordás del [resto](https://es.wikipedia.org/wiki/Resto)?*
   * *Tenemos a disposición el operador `%` que nos devuelve como resultado el resto de una división.*

5. Nuestra tienda ofrece descuentos del 20% si el monto de una venta es igual o mayor a $1000.-, y del 25% si la venta es igual o mayor a $3000.-. Necesitamos un programa que, al ingresar un monto, nos informe cuánto pagará finalmente nuestro cliente por la venta.  
*Pistas:*  
   * *Empezá tratando de obtener el porcentaje de un número, luego continuá con el resto del programa.*
   * *Podés crear al menos una función para no repetir una operación, ¿qué función crearías?*

6. Ahora necesitamos agregar una funcionalidad al programa del punto anterior, ya que no todos los clientes gozan con el beneficio, independientemente del monto de su compra. Luego de ingresar el valor, necesitamos que la aplicación le consulte al usuario si el descuento se aplica o no. Si se aplica, continuar con la operación anterior; de lo contrario, no aplicar ningún descuento.  
*Pistas:*  
   * *JavaScript nos provee un mensaje para pedir confirmación al usuario de una acción a realizar, investigá cuál.*

7. Necesitamos desarrollar una función que nos informe el resultado de final de un set de tenis en base a los puntos que obtuvo cada player. Tenemos que tener las siguientes consideraciones que son relativas al juego. Para ganar un set, un player debe ganar 6 juegos, pero además debe haber ganado por lo menos dos juegos más que su rival. Si el set está empatado a 5 juegos, el ganador es el primero que llegue a 7. Si el set está empatado a 6 juegos, el set se define en un último juego, en cuyo caso el resultado final es 7-6.
Sabiendo que el player A ha ganado m juegos, y el jugador B, n juegos, la función deberá informar:
   * Si A ganó el set.
   * Si B ganó el set.
   * Si el set todavía no termina.
   * Si el resultado es inválido (por ejemplo, 8-6 o 7-3).

8. Necesitamos desarrollar una función que nos informe si un año es bisiesto o no.  
*Pistas:*  
   * *¿Recordás cómo se determina cuándo un año es [bisiesto](https://es.wikipedia.org/wiki/A%C3%B1o_bisiesto#Raz%C3%B3n_y_definici%C3%B3n_del_a%C3%B1o_bisiesto)?*


9. Necesitamos desarrollar una función para modificar el sistema de evaluación de un colegio. Antiguamente las calificaciones eran definidas del 1 al 10. Actualmente se busca pasar a un sistema que, al ingresar una calificación de 1 a 10, informe sobre la nueva calificación, considerando la siguiente relación:
   * A si la nota es mayor a nueve.
   * B si la nota es mayor a ocho.
   * C si la nota es mayor a siete.
   * D si la nota es mayor a seis.
   * F si la nota es seis o menos.

10. Necesitamos ahora desarrollar una función que informe que una nota está aprobada si la calificación es A, B o C; y desaprobada en caso de que sea D o F. Usar esta misma función **en conjunto con la anterior** para desarrollar una función que, recibiendo una nota del 1 al 10, informe si está aprobada.
