const cipher = {
  encode: (offset,clave) => {
    console.log(offset, clave);
    if (offset === null || offset === 0) {
      throw new TypeError();
    }
    let letrafin;
    let result = "";

    // intento de iterar y cifrar juntos
    for (let i = 0; i < clave.length; i++) {
      console.log(parseInt(offset));
      letrafin = ((clave.charCodeAt(i) - 65 + parseInt(offset)) % 26) + 65;
      console.log(letrafin);
      result += String.fromCharCode(letrafin);
    }
    return result;
  },

  decode: (offset,clave) => {
    if (offset === null || offset === 0) {
      throw new TypeError();
    }
    let letrafin;
    let result = "";
    for (let i = 0; i < clave.length; i++) {
      letrafin = ((clave.charCodeAt(i) + 65 - parseInt(offset)) % 26) + 65;
      result += String.fromCharCode(letrafin);
    }
    return result;
  },
};

export default cipher;
