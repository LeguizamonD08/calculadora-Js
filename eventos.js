const numero1= document.querySelector('#calcular');
const numero2= document.querySelector('#calcular2');
const btnSuma= document.querySelector('#btnSuma');
const btnResta= document.querySelector('#btnResta');
const btnMulti= document.querySelector('#btnMulti');
const btnDivi= document.querySelector('#btnDivi');
const presult= document.querySelector('#result');

btnSuma.addEventListener('click', calculoSuma);
btnResta.addEventListener('click', calculoResta);
btnMulti.addEventListener('click', calculoMulti);
btnDivi.addEventListener('click', calculoDivi);

function calculoSuma(){
    //console.log(parseInt(numero1.value) + parseInt(numero2.value));
    const sumar = +numero1.value + +numero2.value;
    presult.innerText = "Resultado: " + sumar;
}
function calculoResta(){
    //console.log(parseInt(numero1.value) + parseInt(numero2.value));
    const restar = +numero1.value - +numero2.value;
    presult.innerText = "Resultado: " + restar;
}
function calculoMulti(){
    //console.log(parseInt(numero1.value) + parseInt(numero2.value));
    const multi = +numero1.value * +numero2.value;
    presult.innerText = "Resultado: " + multi;
}
function calculoDivi(){
    //console.log(parseInt(numero1.value) + parseInt(numero2.value));
    const divi = +numero1.value / +numero2.value;
    presult.innerText = "Resultado: " + divi;
}