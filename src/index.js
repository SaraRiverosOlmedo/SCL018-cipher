import cipher from './cypher1.js';

//Mayusculas
let InputClave = document.getElementById("clave");

InputClave.addEventListener("keyup", ()=>{
InputClave.value = InputClave.value.toUpperCase();
},true);
//funciones de boton e input
document.getElementById("encode").addEventListener ("click",function(){
let clave= InputClave.value;
let offset= document.getElementById("offset").value;
document.getElementById("result").value= cipher.encode(offset,clave); 
},true);

document.getElementById("decode").addEventListener ("click",function(){
let clave= InputClave.value;
let offset= document.getElementById("offset").value;
document.getElementById("result").value= cipher.decode(offset,clave);
},true);
