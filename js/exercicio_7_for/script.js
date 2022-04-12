let nameSpaceship = prompt("Digite nome da Nave.");

let trocarLetra = prompt("Qual letra do nome da nave vc quer trocar?");

let newLetra = prompt("Coloque a Letra que você quer colocar no lugar");

let newNameSpaship = "";

for(let i = 0; i < nameSpaceship.length; i++) {
  if(nameSpaceship[i] == trocarLetra){
    newNameSpaship += newLetra;
  } else {
    newNameSpaship += nameSpaceship[i];
  }  
};

alert(`O novo nome da Nave é ${newNameSpaship}`);