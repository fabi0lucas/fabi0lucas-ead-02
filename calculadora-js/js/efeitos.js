window.onload = init;

function init() {
  
  var rNumero1String = prompt("Digite o primeiro número:");
  var rNumero1Int    = parseInt(rNumero1String);
  
  var rNumero2String = prompt("Digite o segundo número:");
  var rNumero2Int    = parseInt(rNumero2String);
  
  alert("A + B = " + (rNumero1Int + rNumero2Int) + '\n' +
        "A - B = " + (rNumero1Int - rNumero2Int) + '\n' +
        "A x B = " + (rNumero1Int * rNumero2Int) + '\n' +
        "A / B = " + (rNumero1Int / rNumero2Int) + '\n'
       );
  
  
}