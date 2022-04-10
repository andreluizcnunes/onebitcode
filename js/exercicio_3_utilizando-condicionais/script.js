alert("Seja BEM-VINDO a NAVE");

let namePilot = prompt("Qual o seu nome?");
let velocityNave = 0;

let acelerarNave = prompt("Qual velocidade você quer acelerar a nave?");

velocityNave = acelerarNave;

let velocidadeAtual = confirm(`Tem certeza que você quer acelerar a nave na velocidade de ${velocityNave}?`);

if (velocidadeAtual == true) {
  if (velocityNave <= 0){
    alert("Nave está parada. Considere partir e aumentar a velocidade");
  } else if (velocityNave < 40) {
    alert("Você está devagar. podemos aumentar mais");
  } else if (velocityNave >= 40 && velocityNave < 80) {
    alert("Parece uma boa velocidade para se manter");
  } else {
    if (velocityNave >= 80 && velocityNave < 100) {
      alert("Velocidade alta. Considere diminuir.");
    } else {
        alert("Velocidade perigosa, Controle automatico forçado.");
    };
  };
} else {
  alert(`Olá piloto ${namePilot} você não ligou a Nave`);
};


alert(`Nome do Piloto: ${namePilot}\nVelocidade atual: ${velocityNave}`);
