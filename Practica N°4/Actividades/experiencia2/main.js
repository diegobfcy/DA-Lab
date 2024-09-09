
//A
{

    let bloqueVariable = "Soy una variable de bloque";
    const bloqueConstante = "Soy una constante de bloque";
  
    console.log(bloqueVariable); 
    console.log(bloqueConstante); 
  }
  console.log(bloqueVariable);
  console.log(bloqueConstante);

//B
console.log(x === undefined); 
var x = 3;

var myvar = 'my value';

(function() {
    console.log(myVar); 
    var myvar = 'valor local';
   })();


let x;
console.log(x);


//C
let variableGlobal = "global";

function funcionExterna() {

  let varAfuera = "externa";

  console.log(variableGlobal); 
  console.log(varAfuera);  
  
  function funcionInterna() {

    let variableInterna = "interna";
    
    console.log(variableInterna); 
    console.log(varAfuera);
    console.log(variableInterna); 
  }

  funcionInterna();

  console.log(typeof variableInterna);
}

funcionExterna();

console.log(typeof varAfuera); 
console.log(typeof variableInterna); 

//D
var answer = 42;
answer = 'Gracias por todo el pescado...';
parseInt("F", 16);
parseInt("17", 8);
parseInt("15", 10);
parseInt(15.99, 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15*3", 10);
parseInt("12", 13);
parseInt("Hello", 8); 
parseInt("0x7", 10);
parseInt("546", 2);
var howMany = 10;
alert("howMany.toString() is " + howMany.toString()); 
alert("45 .toString() is " + 45 .toString()); 
var x = 7;
alert(x.toString(2)) 