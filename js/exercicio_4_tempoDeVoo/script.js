let departureDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY");

let departureDate = moment(departureDateEntry, "DD/MM/YYYY");

let today = moment();

let dateDiff = today - departureDate;

let choseOption = prompt("Esolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias\n5- Mêses\n6- Anos");

if (choseOption == "1") {
  let secondsOfDeparture = Math.round(dateDiff / 1000);
  alert(`Tempo de vôo ${secondsOfDeparture} segundos`);
} else if (choseOption == "2") {
  let minutesOfDeparture = Math.round(dateDiff / 1000 / 60);
  alert(`Tempo de vôo ${minutesOfDeparture} Minutos`);
} else if (choseOption == "3") {
  let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600);
  alert(`Tempo de vôo ${hoursOfDeparture} Horas`);
} else if (choseOption == "4") {
  let dayOfDeparture = Math.round(dateDiff / 1000 / 3600/ 24);
  alert(`Tempo de vôo ${dayOfDeparture} Dias`);
} else if (choseOption == "5") {
  let monthsOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24 / 30.417);
  alert(`Tempo de vôo ${monthsOfDeparture} Mêses`);
} else if (choseOption == "6") {
  let ageOfDeparture = Math.round(dateDiff / 1000 / 3600/ 24 / 30.417 / 12);
  alert(`Tempo de vôo ${ageOfDeparture} Anos`);
} else {
  alert("Opção que você escolheu é invalida.");
}