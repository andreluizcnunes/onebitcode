let count = 0;
let chosenOption = "";

let spaceship = prompt("Digite o nome da nave.");

chosenOption = prompt("Deseja entrar em dobra espacial?\n1- SIM\n2- NÃO\n\nDigite 1 ou 2 para respota.");

while(chosenOption == "1") {
  count += 1;
  chosenOption = prompt("Deseja realizar a próxima dobra?\n1- SIM\n2- NÃO\n\nDigite 1 ou 2 para resposta.")
}

alert(`Nave: ${spaceship}\nQuantidade de sobras: ${count}`);