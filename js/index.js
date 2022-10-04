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

giveDate();

function favTutorial() {
  var mylist = document.getElementById("myList");
  document.getElementById("favourite").value =
    mylist.options[mylist.selectedIndex].text;
  console.log(document.getElementById("favourite").value);
}


function createdTask() {
    const divideHours = hours.split(":");
    const formatedHours = divideHours[0] + "h" + divideHours[1] + "m";
    console.log();
  
    const schedule = document.createElement("div");
    schedule.classList.add("to-do-schedule");
    schedule.classList.add("teste");
    const appointment = document.createElement("div");
    appointment.classList.add("make-appointments");
    const task = document.createElement("div");
    task.classList.add("task");
    schedule.appendChild(appointment);
    schedule.appendChild(task);
  
    switch (weekDay) {
      case "Segunda-feira":
        task.classList.add("taskMon");
        break;
      case "Terça-feira":
        task.classList.add("taskTues");
        break;
      case "Quarta-feira":
        task.classList.add("taskWednes");
        break;
      case "Quinta-feira":
        task.classList.add("taskThurs");
        break;
      case "Sexta-feira":
        task.classList.add("taskFri");
        break;
      case "Sabado":
        task.classList.add("taskSatur");
        break;
      case "Domingo":
        task.classList.add("taskSun");
        break;
    }
  
    //create a forEach to add to the bank "ou seja criar um forEach para adicionar no banco" check
  
    //Nesse forEach ele deve criar esse atributo já personalizado check
  
    //apagar no banco  check
  
    //deletar todos check
  
    //criar abasde filtragem personalizadas para listar so os dias e um para default
  
    //horarios repetidos deveremos colocar um do lado do outro e colocar uma linha demarcando
  
    //finals create localStorege e dellLocalStorege