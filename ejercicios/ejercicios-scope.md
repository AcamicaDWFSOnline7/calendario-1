# Ejercicios: Scope y Closures

## 1. Cuál es el resultado de este código y por qué.

```
function test() {
   console.log(a);
   console.log(foo());
   var a = 1;
   function foo() {
      return 2;
   }
}
test();
```
  

## 2. Cuál es el resultado?

```
function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  
  a = 5;
  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
```
  

## 3. Cuál es el resultado del siguiente código. Explicá por qué.

```
var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};
console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());
```


## 4. Qué se va a imprimir en la consola? 

```
var a = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {} 
} 
b(); 
console.log(a);   
```
  
