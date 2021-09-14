      //Mayusculas
      let InputClave = document.getElementById("clave");

      InputClave.addEventListener("keyup", (e)=>{
      InputClave.value = InputClave.value.toUpperCase();
      },true);
      //cifrado
      document.getElementById("codificar").addEventListener ("click",function(){
      let clave= InputClave.value;
      let offset= document.getElementById("offset").value;
      document.getElementById("resultado").value= cifrar(clave,offset); 
      },true);
      document.getElementById("decodificar").addEventListener ("click",function(){
      let clave= InputClave.value;
      let offset= document.getElementById("offset").value;
      document.getElementById("resultado").value= descifrar(clave,offset);
      },true);

//cifrado correcto
function cifrar(clave,offset){
      let primerchar= clave[0];
      let resultchar= (( clave.charCodeAt(0)- 65 + (parseInt(offset))) % 26) + 65;
      let letrafin;
      let result= "";

      // intento de iterar y cifrar juntos
      for(let i=0; i<clave.length;i++){
      letrafin=(( clave.charCodeAt(i)- 65 + (parseInt(offset))) % 26) + 65; 
      result += String.fromCharCode(letrafin);
      }
      return result;
      }
 function descifrar(clave,offset) {
      let letrafin;
      let result= "";
      for(let i=0; i<clave.length;i++){
            letrafin=(( clave.charCodeAt(i)+ 65 - (parseInt(offset))) % 26) + 65; 
            result += String.fromCharCode(letrafin);
            }
            return result;   

}
