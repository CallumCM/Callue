const ZERO =  decodeURIComponent('%E2%80%8C');
const ONE =   decodeURIComponent('%E2%81%A3');
const SEP =   decodeURIComponent('%E2%81%A2');
const START = decodeURIComponent('%E2%81%A4');
const END =   decodeURIComponent('%E2%81%A0');

String.prototype.replaceAll = function(search, replace) {
  return this.split(search).join(replace);
};

function encodeToWhitespace(str) {
  //let base64String = btoa(str);
  let whitespaceEncodedString = [];
  for (let i = 0; i < str.length; i++) {
    whitespaceEncodedString.push(str[i].charCodeAt(0).toString(2));
  }
  whitespaceEncodedString = whitespaceEncodedString.join(SEP);
  whitespaceEncodedString = whitespaceEncodedString.replace(/0/g, ZERO);
  whitespaceEncodedString = whitespaceEncodedString.replace(/1/g, ONE);
  return START + whitespaceEncodedString + END;
}

function decodeFromWhitespace(str) {
  let encodedWhitespace = str.split(START)[1].split(END)[0];
  let binaryChars = encodedWhitespace.replaceAll(ZERO, '0').replaceAll(ONE, '1').split(SEP);
  let decodedString = "";
  for(let i = 0; i < binaryChars.length; i++) {
    decodedString += String.fromCharCode(parseInt(binaryChars[i], 2));
  }
  //decodedString = atob(decodedString);
  return decodedString;
}

window.addEventListener('load', () => {
  const encrypt_button = document.getElementById('encrypt');
  const decrypt_button = document.getElementById('decrypt');
  const copy_button = document.getElementById('copy');
  const input = document.getElementById('input');
  const output = document.getElementById('output')
  output.addEventListener('click', () => {
    output.setSelectionRange(0, 32767);
  });
  
  encrypt_button.addEventListener('click', () => {
    output.value = encodeToWhitespace(input.value);
  });
  
  decrypt_button.addEventListener('click', () => {
    output.value = decodeFromWhitespace(input.value);
  });

  copy_button.addEventListener('click', () => {
    navigator.clipboard.writeText(output.value);
  });
});