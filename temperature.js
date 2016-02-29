"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
$(document).ready(function()
{
  $("#original").focusin(function()
  {
    $(this).css("border-radius","0px");
    $(this).css("border-color", "purple");
  });
  
  $("#formulario").submit(function(evento)
  {
    evento.preventDefault();
    $("#converted").fadeIn();
    calculate();
  });
});

function calculate() {
  var result;
  var original = document.getElementById("original");
  var temp = original.value;
  var regexp = /^\s*([-+]?\d+(?:\.\d*)?(?:e[+-]?\d+)?)\s*([fFcC]|fa|FA|Fa|far|Far|FAR)\s*$/;
  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Fahrenheit";
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius";
    }
    $("#converted").html(result);
  }
  else {
    $("#converted").html("ERROR! Try something like '-4.2C' instead");
  }
}
