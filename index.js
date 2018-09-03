function cardValidator (credNumber){
  if (!credNumber){
    throw new Error("Não tem nada no parametro");
  }
  if (typeof credNumber === "string"){
    throw new Error("Esse tem uma string");
  }
  if (credNumber.toString().length<10){
    throw new Error("Quantidade de numeros menor que o esperado");
  }

  var array = credNumber.toString().split('').reverse();

  var totalSum = 0;

  for (var i = 0; i < array.length; i++){
    if (i % 2 === 1){
      var onlyOdd = parseInt(array[i])*2;
      if (onlyOdd >= 10){
        totalSum += parseInt(onlyOdd / 10) + (onlyOdd % 10);
      }
    }else {
      totalSum += parseInt(array[i]);
    }
  }

  if (totalSum %10 === 0){
    return true;
  }else{
    return false;
  }
}

module.exports.cardValidator = cardValidator;



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
