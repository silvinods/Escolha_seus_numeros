function gera(qnt){
let arrayNum = new Set();
while(arrayNum.size<qnt){
const num = Math.floor(Math.random() * 60) +1;
arrayNum.add(num)
}
let result = Array.from(arrayNum).sort((a,b)=>a-b).join(" - ");
const li = document.getElementById("li");
li.innerText=result
}
const input = document.getElementById("number");
const valor = document.getElementById("valor")
const value = document.querySelector(".value")
const container = document.querySelector(".container")
const btn = document.getElementById(". btn");
container.addEventListener('submit',(element)=>{
    element.preventDefault();
    gera(input.value)
    if(!input.value) valor.innerHTML='0,00'
    switch(input.value){
        case "6":
        valor.innerHTML="5"
        break;
        case "7":
        valor.innerHTML="35"
        break;
        case "8":
        valor.innerHTML="140,00"
        break;
        case "9":
        valor.innerHTML="420,00"
        break;
        case "10":
        valor.innerHTML="1.050,00"
        break;
        case "11":
        valor.innerHTML="2.310,00"
        break;
        case "12":
        valor.innerHTML="4.620,00"
        break;
        case "13":
        valor.innerHTML="8.580,00"
        break;
        case "14":
        valor.innerHTML="15.015,00"
        break;
        case "15":
        valor.innerHTML="25.025,00"
        break;
        default:
        console.log("ERROR");
    }
  
})
