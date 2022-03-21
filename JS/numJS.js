
var num1 = prompt("Escriba el primer número");
var num2 = prompt("Escriba el segundo número");
var num3 = prompt("Escriba el tercer número");

console.log(num1, num2, num3);

if (num1>num2 && num1>num3){
    alert("Entre los números " + num1+ ", "+ num2+ " y " + num3 + " el número " + num1 + " es el mayor ^^)/");
}
else if(num2>num1 && num2>num3){
    alert("Entre los números " + num1+ ", "+ num2+ " y " + num3 + " el número " + num2 + " es el mayor ^^)/");
}
else{
    alert("Entre los números " + num1+ ", "+ num2+ " y " + num3 + " el número " + num3 + " es el mayor ^^)/");
}