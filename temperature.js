"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
$(document).ready(function()
{
  $("#original").focusin(function()
  {
    $(this).css("border-radius","0px");
    $(this).css("border-color","red");
  });
  $("#original").focusout(function()
  {
    $(this).css("border-radius","10px");
    $(this).css("border-color","black");
  });
  $("#original").change(function()
  {
    $("#converted").fadeIn();
    calculate();
  });
});

function calculate() {
  var result;
  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;

  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Farenheit";
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius";
    }
    converted.innerHTML = result;
    //$("#converted").html(result);
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
    //$("#converted").html("ERROR! Try something like '-4.2C' instead'");
  }
}
