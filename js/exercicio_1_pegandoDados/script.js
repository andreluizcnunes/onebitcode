alert("Bem-vindo! A seguir pediremos que informe alguns dados.");

let name = prompt("Digite seu nome.");
let age = prompt("Digite sua idade.");
let ageConfirmation = confirm(`A sua idade é ${age}?`);

alert(`Nome: ${name}\nIdade: ${age}\nConfirmação: ${ageConfirmation}`);