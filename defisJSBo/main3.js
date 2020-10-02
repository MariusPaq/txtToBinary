const convert = document.getElementById("convert") ;
let input = document.getElementById('msgToCode');
let output = document.getElementById('crypted');

convert.addEventListener("click", function() {
    let result = input.value;
    console.log(text2Binary(result));
    output.innerHTML = text2Binary(result);
  });

  function text2Binary(string) {
      return string.split('').map(function (char) {
          return char.charCodeAt(0).toString(2);
      }).join(' ');
  }
