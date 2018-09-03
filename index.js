var credNumber = prompt ("Insira o número do seu cartão de crédito");
//console.log(credNumber);
  if (credNumber === '' || isNaN(credNumber) || credNumber === ' ' ){
    alert("Digite apenas números no campo fornecido.");
  }else{
    var array = credNumber.split('').reverse;
  console.log(array);
//     var size = array.length;
//     var lastPosition = size - 1;
//     var newArray = [];
// for (var i = lastPosition; i >= 0; i--){
//   newArray.push(parseInt(array[i]));
// }
//console.log(newArray);

function isValidCard (array){
var onlyOdd = 0;
var totalSum = 0;
  for (var i = 0; i < array.length; i++){
    if (i % 2 === 1){
      onlyOdd = array[i]*2;
      array[i] = parseInt(onlyOdd / 10) + onlyOdd % 10;
    }//console.log(onlyOdd);
  }
  for (var j = 0; j < array.length; j++) {
    totalSum += array[j];
  }
    if (totalSum %10 === 0){
      document.write ('Seu cartão é Válido');
    }else{
      document.write ('Seu cartão é Inválido');
    }
  }
  isValidCard (array);
}

// function isValidCard (newArray){
// var onlyOdd = 0;
// var totalSum = 0;
//   for (var i = 0; i < newArray.length; i++){
//     if (i % 2 === 1){
//       onlyOdd = newArray[i]*2;
//       newArray[i] = parseInt(onlyOdd / 10) + onlyOdd % 10;
//     }//console.log(onlyOdd);
//   }
//   for (var j = 0; j < newArray.length; j++) {
//     totalSum += newArray[j];
//   }
//     if (totalSum %10 === 0){
//       document.write ('Seu cartão é Válido');
//     }else{
//       document.write ('Seu cartão é Inválido');
//     }
//   }
//   isValidCard (newArray);
// }
