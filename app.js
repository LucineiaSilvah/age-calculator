const btn = document.querySelector(".btn");

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
let res = document.querySelector("#resultado");

const erros = document.querySelectorAll(".erro");
const inputs = document.querySelectorAll("input");

function calculaIdade(ano, mes, dia){
 
  let dAtual = new Date()
  let dNasc = new Date(ano, mes, dia)
  let diferenca = dAtual - dNasc;
  // Converte a diferença de milissegundos para anos
  let anos = Math.floor(diferenca / (365.25 * 24 * 60 * 60 * 1000)).toString();

  
  // Calcula o resto dos meses
  let meses = Math.floor(diferenca % (365.25 * 24 * 60 * 60 * 1000) / (30.44 * 24 * 60 * 60 *1000) + 1).toString()

    // Calcula o resto dos dias
   let dias = Math.floor(diferenca % (30.44 * 24 * 60 * 60 *1000)/ (24 * 60 * 60 * 1000)).toString() 
  console.log(anos, meses, dias);

  res.innerHTML = `
  <p class="a"><span>${anos}</span>  years</p>
  <p class="m"><span>${meses}</span> months</p>
  <p class="d"><span>${dias}</span> days</p>
  `;
  btn.style.backgroundColor = 'var(--Purple)';
}
btn.addEventListener("click", () => {
  if(day.value === '' || month.value === '' || year.value === ''){
    for (let i in erros) {
      erros[0].innerHTML = "Must Be a valid day ";
      erros[1].innerHTML = "Must be a valid Month";
      erros[2].innerHTML = "Must be a valid Year";
    }
      
   for (let i in inputs) {
    inputs[i].style.borderColor = "var(--Light-red)";
   }
 
  
  }else{
    calculaIdade(year.value, month.value, day.value)
     for (let i in erros) {
      erros[i].innerHTML
       = ' ';
     }
     for (let i in inputs) {
      inputs[i].style.borderColor = "initial";
     }
    
     
  }
 });
 document.querySelector("input").addEventListener("click", () => {
  year.value = "";
  month.value = "";
  day.value = "";
  res.innerHTML = "";
  });