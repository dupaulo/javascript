

let inputDisplay = null;
let inputRangeC1 = null;
let inputRangeC2 = null;
let inputRangeC3 = null;


inputDisplay = document.querySelector('#inputDisplay');
inputRangeC1 = document.querySelector('#inputRangeC1');
inputRangeC2 = document.querySelector('#inputRangeC2');
inputRangeC3 = document.querySelector('#inputRangeC3');


function start() {
   render();
  inputRangeC1.addEventListener( 'input', render);
  inputRangeC2.addEventListener('input', render);
  inputRangeC3.addEventListener('input', render);
}


function render() {
   let red = inputRangeC1.value;
   let green = inputRangeC2.value;
   let blue = inputRangeC3.value;

   inputDisplay.value = red;
   resColorTwo.value = green;
   resColorThree.value = blue;

   var div = document.querySelector('#cor-gerada');
   div.style.backgroundColor = `rgb(${red},${green},${blue})`;
};
