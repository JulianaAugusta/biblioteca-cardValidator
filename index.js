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
  else {
    let sum = 0;
    let cardTest = String(credNumber).split("").reverse();
    cardTest.forEach(function (dstr, index) {
      let d = parseInt(dstr);
      sum += ((index % 2 === 0) ? d : (d < 5) ? d * 2 : (d - 5) * 2 + 1);
    });
    return (sum % 10 === 0);
  }
}

module.exports.cardValidator = cardValidator;
