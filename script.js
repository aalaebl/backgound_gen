var _ = require('lodash');

var array =[1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));

var firstColor = document.querySelector("#color_1");
var secondColor = document.querySelector("#color_2");
var body = document.querySelector("#gradient")
var css = document.querySelector(".css_bg")
function setGradient(){
  body.style.background ="linear-gradient(to right," +firstColor.value +"," +secondColor.value+")";

  css.textContent = body.style.background + ";";
}

firstColor.addEventListener("input", setGradient)

secondColor.addEventListener("input", setGradient)

