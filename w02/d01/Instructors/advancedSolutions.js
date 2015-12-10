//greater of three

var greaterOfThree = function greaterOfThree(num1, num2, num3){
  if(num1 > num2 && num1 > num3){
    return num1;
  } else if(num2 > num1 && num2 > num3){
    return num2;
  } else {
    return num3;
  }
};

//line them up

var lineThemUp = function lineThemUp(num1, num2, num3){
  var array = [];
  array.push(num1, num2, num3);
  return array;
};


//line them up bonus

var sorting = function sorting(number, array){
  if(array[0] > number){
    array.unshift(number);
  } else {
    array.push(number);
  }
  return array;
}

var lineThemUp = functionlineThemUp(num1, num2, num3){
  var array = [];
  array.push(num1);
  sorting(num2, array);
  sorting(num3, array);
  return array;
}

//palindrome

var palindrome = function palindrome(word){
  var reversed = "";
  var count = word.length;
  while(count > 0){
    reversed += word[count - 1];
    count--
  }
  if(reversed === word){
    return "that's a palindrome";
  } else {
    return "nope";
  }
}
