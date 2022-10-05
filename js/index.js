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



const dataBase = JSON.parse(localStorage.getItem("scheduleWeek")) ?? [];
const saveStorage = () => {
  localStorage.scheduleWeek = JSON.stringify(dataBase);
};

const dellStorage = () => {
  localStorage.removeItem("scheduleWeek");
};

buttonDell = document.querySelector(".delete");
buttonSave = document.querySelector(".save");
buttonSave.onclick = saveStorage;
buttonDell.onclick = dellStorage;

//capture data;
var textContent = document.querySelector(".activity").value;
var weekDay = document.querySelector("#favourite").value;
var hours = document.getElementById("input-time").value;

let buttonAdd = document.querySelector(".add");

//create task to facilited!
const createTask = (textContent, hours, weekDay, indice) => {
  let week;
  switch (weekDay) {
    case "Segunda-feira":
      week = "taskMon";
      break;
    case "Terça-feira":
      week = "taskTues";
      break;
    case "Quarta-feira":
      week = "taskWednes";
      break;
    case "Quinta-feira":
      week = "taskThurs";
      break;
    case "Sexta-feira":
      week = "taskFri";
      break;
    case "Sabado":
      week = "taskSatur";
      break;
    case "Domingo":
      week = "taskSun";
      break;
  }

  const task = document.createElement("div");
  task.classList.add("to-do-schedule");
  task.classList.add(`testando${indice}`)
  task.innerHTML = ` 
    <div class="make-appointments teste ">
        <p>${hours}</p>
    </div>
    <div class="task ${week}"  >
    <div class="content">
      <p>${textContent}</p>
    </div>
  <button class="out" data-indice=${indice}> <!-- Delete -->
      Apagar
  </button>
  </div>
  `;




   

  document.querySelector(".schedules").appendChild(task);             
};

const clearListTask = () => {
  const todoSchedule = document.querySelector(".schedules");
  while (todoSchedule.firstChild) {
    todoSchedule.removeChild(todoSchedule.lastChild);
  }
};

//list tasks
const listTasks = () => {
  clearListTask();
  dataBase.forEach((task, indice) =>
    createTask(task.textContent, task.hours, task.weekDay, indice)
  );
};

//remove all task
addEventListener("click", (e) => {
  const elemento = e.target;
});

//capture out button
addEventListener("click", (e) => {
  const elemento = e.target;

  if (elemento.classList.contains("out")) {
    const ind = elemento.dataset.indice;
    removeItem(ind);
  }

  if (elemento.classList.contains("dell")) {
    while (dataBase.length > 0) {
      dataBase.forEach((item, indice) => removeItem(indice));
    }
    listTasks();
  }
});

const removeItem = (ind) => {
  dataBase.splice(ind, 1);
  listTasks();
};

const addOneSide = () => {};

//insert to database
const insertTask = () => {
  let activity = document.querySelector(".activity");
  let days = document.querySelector(".days");
  let time = document.getElementById("input-time");

  let textContent = document.querySelector(".activity").value;
  let weekDay = document.querySelector("#favourite").value;
  let hours = document.getElementById("input-time").value;

  const divideHours = hours.split(":");
  const formatedHours = divideHours[0] + "h" + divideHours[1] + "m";

  const result = dataBase.some((schedule) => schedule.hours == formatedHours);
  if (result) {
    const ind = dataBase.findIndex(
      (schedule) => schedule.hours == formatedHours
    );
    if (dataBase[ind].weekDay == weekDay) {
      alert("horario contido");
    }
  }

  if (textContent == "" || textContent == null) {
    console.log("estou em textcontent");

    if (weekDay == "" || weekDay == null) {
      console.log("estou em weekday");
      days.style.border = "1px solid red";
      if (hours == "" || hours == null) {
        console.log("estou em hour");
        time.style.border = "1px solid red";
      }
      return (activity.style.border = "1px solid red");
    }
  }
  if (weekDay == "" || weekDay == null) {
    console.log("estou em weekday");

    if (hours == "" || hours == null) {
      console.log("estou em hour");
      time.style.border = "1px solid red";
    }
    return (days.style.border = "1px solid red");
  }
  if (hours == "" || hours == null) {
    console.log("estou em hour");
    return (time.style.border = "1px solid red");
  }

  dataBase.push({
    hours: `${formatedHours}`,
    textContent: `${textContent}`,
    weekDay: `${weekDay}`,
  });
  listTasks();
};

const listTasks2 = () => {
  clearListTask();

  fic.forEach((task) => createTask(task.textContent, task.hours, task.weekDay));
};
const fic = [];

//event
document.addEventListener("click", (e) => {
  e.preventDefault();
  const elemento = e.target;

  if (elemento.classList.contains("day0")) {
    let day0 = document.querySelector(".day0");
    day0.style.width = "167px";
    day0.style.height = "36px";

    if (fic.length > 0) {
      while (fic.length > 0) {
        fic.pop();
      }
    }
    dataBase
      .filter((task) => task.weekDay == "Segunda-feira")
      .map((task) =>
        fic.push({
          hours: `${task.hours}`,
          textContent: `${task.textContent}`,
          weekDay: `${task.weekDay}`,
        })
      );
    listTasks2();
  }

  if (elemento.classList.contains("day1")) {
    let day1 = document.querySelector(".day1");
    day1.style.width = "167px";
    day1.style.height = "36px";
    if (fic.length > 0) {
      while (fic.length > 0) {
        fic.pop();
      }
    }
    dataBase
      .filter((task) => task.weekDay == "Terça-feira")
      .map((task) =>
        fic.push({
          hours: `${task.hours}`,
          textContent: `${task.textContent}`,
          weekDay: `${task.weekDay}`,
        })
      );
    listTasks2();
  }
  if (elemento.classList.contains("day2")) {
    let day2 = document.querySelector(".day2");
    day2.style.width = "167px";
    day2.style.height = "36px";
    if (fic.length > 0) {
      while (fic.length > 0) {
        fic.pop();
      }
    }
    dataBase
      .filter((task) => task.weekDay == "Quarta-feira")
      .map((task) =>
        fic.push({
          hours: `${task.hours}`,
          textContent: `${task.textContent}`,
          weekDay: `${task.weekDay}`,
        })
      );
    listTasks2();
  }
  if (elemento.classList.contains("day3")) {
    let day3 = document.querySelector(".day3");
    day3.style.width = "167px";
    day3.style.height = "36px";
    if (fic.length > 0) {
      while (fic.length > 0) {
        fic.pop();
      }
    }
    dataBase
      .filter((task) => task.weekDay == "Quinta-feira")
      .map((task) =>
        fic.push({
          hours: `${task.hours}`,
          textContent: `${task.textContent}`,
          weekDay: `${task.weekDay}`,
        })
      );
    listTasks2();
  }
  if (elemento.classList.contains("day4")) {
    let day4 = document.querySelector(".day4");
    day4.style.width = "167px";
    day4.style.height = "36px";
    if (fic.length > 0) {
      while (fic.length > 0) {
        fic.pop();
      }
    }
    dataBase
      .filter((task) => task.weekDay == "Sexta-feira")
      .map((task) =>
        fic.push({
          hours: `${task.hours}`,
          textContent: `${task.textContent}`,
          weekDay: `${task.weekDay}`,
        })
      );
    listTasks2();
  }

  if (elemento.classList.contains("day5")) {
    let day5 = document.querySelector(".day5");
    day5.style.width = "167px";
    day5.style.height = "36px";
    if (fic.length > 0) {
      while (fic.length > 0) {
        fic.pop();
      }
    }
    dataBase
      .filter((task) => task.weekDay == "Sabado")
      .map((task) =>
        fic.push({
          hours: `${task.hours}`,
          textContent: `${task.textContent}`,
          weekDay: `${task.weekDay}`,
        })
      );
    listTasks2();
  }
  if (elemento.classList.contains("day6")) {
    let day6 = document.querySelector(".day6");
    day6.style.width = "167px";
    day6.style.height = "36px";
    if (fic.length > 0) {
      while (fic.length > 0) {
        fic.pop();
      }
    }
    dataBase
      .filter((task) => task.weekDay == "Domingo")
      .map((task) =>
        fic.push({
          hours: `${task.hours}`,
          textContent: `${task.textContent}`,
          weekDay: `${task.weekDay}`,
        })
      );
    listTasks2();
  }
});

listTasks();
buttonAdd.onclick = insertTask;
