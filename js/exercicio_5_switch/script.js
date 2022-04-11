let distance = prompt("Qual a distância em Anos Luz?");

let listOption = prompt(`Para qual unidade quer converter?\n1- Parsec(pc)\n2- Unidade astronônima(AU)\n3- Quilômetros(km)\n\n Digite o Número da OPÇÃO`);

let conversionPc = distance / 3.262;
let conversionAu = distance * 63241.1;
let conversionKm = distance * 9.5 * Math.pow(10, 12);


switch (listOption) {
  case "1":
    alert("Distância digitada: " + distance + "\nConversão desejada: Parsec(pc) " + "\nDistancia convertida: " + conversionPc + " Pc");
    break
  case "2":
    alert("Distância digitada: " + distance + "\nConversão desejada: Unidade Astronômica " + "\nDistancia convertida: " + conversionAu + " Au");
    break
  case "3":
    alert("Distância digitada: " + distance + "\nConversão desejada: Quilometros " + "\nDistancia convertida: " + conversionKm + " KM");
    break
  default:
    alert(`Distância Anos Luz: ${distance}\nUnidade não identificada, converção fora do escopo`);
    break    
}