//first exercise
let n=5;
function sum(b) {
  return b+7;
}
console.log(sum(n));
//second exercise
let number1=8;
let number2=9;
function multiply(a,b){
    return a*b;
}
console.log(multiply(number1, number2));
//third exercise
let word="cbAmKKaa"
function capitalize(a){
    let sliced=a.slice(1);
    sliced=sliced.toLowerCase();
    let capFirst=a[0].toUpperCase();
    return capFirst+sliced;
}
console.log(capitalize(word));
//fourth exercise
let word1="Amgalan_zyx";
function lastLetter(a){
    let length=a.length;
    return a[length-1];
}
console.log(lastLetter(word1));