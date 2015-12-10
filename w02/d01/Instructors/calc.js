var calculator = function calculator(operator, numbOne, numbTwo){
  if (operator === "+"){
    var result = (numbTwo + numbOne);
    console.log(result);
    return result;
  } else if (operator === "-"){
    var result = (numbOne - numbTwo);
    console.log(result);
    return result;
  } else if (operator === "x"){
    var result = (numbTwo * numbOne);
    console.log(result);
    return result;
  } else if (operator === "/"){
    var result = (numbOne / numbTwo);
    console.log(result);
    return result;
  }
};


