let h = document.querySelector("#h");
let m = document.querySelector("#m");

let data = document.querySelector("#data");
let semana = document.querySelector("#semana");

let dataHora = new Date();

function addWatch() {
  //trocar o nome da função
  let momentoAtual = new Date();

  let hora = momentoAtual.getHours();
  let minuto = momentoAtual.getMinutes();

  let strHora = new String(hora);
  let strMinuto = new String(minuto);

  if (strMinuto.length == 1) minuto = "0" + minuto;
  if (strHora.length == 1) hora = "0" + hora;

  h.textContent = hora;
  m.textContent = minuto;

  setTimeout("addWatch()", 1000);
}

function giveDate() {
  let day = dataHora.getDate();
  let mounth = dataHora.getMonth() + 1;
  let year = dataHora.getFullYear();

  switch (mounth) {
    case 1:
      mounth = "Janeiro";
      break;
    case 2:
      mounth = "Fevereiro";
      break;

    case 3:
      mounth = "Março";
      break;

    case 4:
      mounth = "Abril";
      break;

    case 5:
      mounth = "Maio";
      break;

    case 6:
      mounth = "Junho";
      break;

    case 7:
      mounth = "Julho";
      break;

    case 8:
      mounth = "Agosto";
      break;

    case 9:
      mounth = "Setembro";
      break;

    case 10:
      mounth = "Outubro";
      break;
    case 11:
      mounth = "Novembro";
      break;

    case 12:
      mounth = "Dezembro";
      break;

    default:
      break;
  }

  let currentDate = day + " de " + mounth + " de " + year;

  date.textContent = currentDate;
}