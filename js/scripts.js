$(function(){
  $('#multiplesForm').submit(function(event){
    event.preventDefault();
    var num1 = parseInt($('#firstNumber').val());
    var num2 = parseInt($('#secondNumber').val());
    var numbers = [];
    if(num1 > num2){
      $("#numbersList").text('verify your numbers');
    }
    for(i = num1; i<= num2; i += num1){
        numbers.push(i);
    }
    if(numbers.length >0){
      var numberList = numbers.toString();
      $("#numbersList").text(numberList);
    }
  });
});
