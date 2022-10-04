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


    appointment.innerHTML = `<h6>${formatedHours}</h6>`;

  task.innerHTML = `  <div class="content">
    <p>${textContent}</p>
  </div>
 <button class="out teste"> <!-- Delete -->
    Apagar
 </button>`;

  document.querySelector(".schedules").appendChild(schedule);
}


const dataBase = [];


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

     //console.log(dataBase.filter(task => task.weekDay == "Segunda-feira"))

    

  // if (dataBase.some(task => task.hours == hours) && dataBase.length > 2 ) {
  //   console.log(hours)
  //   console.log("cheguei aqui");
  //   const found = dataBase.findIndex((task) => hours == task.hours);
  //   // let all = document.querySelectorAll('.to-do-schedule');

  //   // const allDivs = [...all]

  //   let allTwo = document.getElementsByClassName('to-do-schedule');
  //   allTwo[found]
  //   console.log(allTwo[found])
  // }
  
  const task = document.createElement("div");
  task.classList.add("to-do-schedule");
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


const listTasks = () => {
    clearListTask();
    dataBase.forEach((task, indice) =>
      createTask(task.textContent, task.hours, task.weekDay, indice)
    );
  };


addEventListener("click", (e) => {
    const elemento = e.target;
  });
  

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

  const addOneSide = () =>{
  
}



//insert to database
const insertTask = () => {
    let textContent = document.querySelector(".activity").value;
    let weekDay = document.querySelector("#favourite").value;
    let hours = document.getElementById("input-time").value;
    dataBase.push({
      hours: `${hours}`,
      textContent: `${textContent}`,
      weekDay: `${weekDay}`,
    });
    listTasks();
    // let schedule = document.querySelectorAll(".to-do-schedule");
    // schedule.forEach((s) => console.log(s.getBoundingClientRect()));
  };
  
  const listTasks2 = () => {
    clearListTask();
   
    fic.forEach((task, indice) =>
      createTask(task.textContent, task.hours, task.weekDay, indice)
    );
    
  };

  const fic = []

//event
document.addEventListener("click",e =>{
  e.preventDefault();
  const elemento  = e.target;
  
  if(elemento.classList.contains('day0')){
   
     
    if(fic.length>0){
      while (fic.length > 0) {
        fic.pop()
      }
    }
    
    dataBase.filter(task => task.weekDay == "Segunda-feira").map(task => fic.push(
      {hours: `${task.hours}`,
      textContent: `${task.textContent}`,
      weekDay: `${task.weekDay}`,}
    ));
    listTasks2();
    
  }

  if(elemento.classList.contains('day1')){
   
     
    if(fic.length>0){
      while (fic.length > 0) {
        fic.pop()
      }
    }
    
    dataBase.filter(task => task.weekDay == "Terça-feira").map(task => fic.push(
      {hours: `${task.hours}`,
      textContent: `${task.textContent}`,
      weekDay: `${task.weekDay}`,}
    ));
    listTasks2();
    
  }
  if(elemento.classList.contains('day2')){
   
     
    if(fic.length>0){
      while (fic.length > 0) {
        fic.pop()
      }
    }
    
    dataBase.filter(task => task.weekDay == "Quarta-feira").map(task => fic.push(
      {hours: `${task.hours}`,
      textContent: `${task.textContent}`,
      weekDay: `${task.weekDay}`,}
    ));
    listTasks2();
    
  }
  if(elemento.classList.contains('day3')){
   
     
    if(fic.length>0){
      while (fic.length > 0) {
        fic.pop()
      }
    }
    
    dataBase.filter(task => task.weekDay == "Quinta-feira").map(task => fic.push(
      {hours: `${task.hours}`,
      textContent: `${task.textContent}`,
      weekDay: `${task.weekDay}`,}
    ));
    listTasks2();
    
  }
  if(elemento.classList.contains('day4')){
   
     
    if(fic.length>0){
      while (fic.length > 0) {
        fic.pop()
      }
    }
    
    dataBase.filter(task => task.weekDay == "Sexta-feira").map(task => fic.push(
      {hours: `${task.hours}`,
      textContent: `${task.textContent}`,
      weekDay: `${task.weekDay}`,}
    ));
    listTasks2();
    
  }
  if(elemento.classList.contains('day5')){
   
     
    if(fic.length>0){
      while (fic.length > 0) {
        fic.pop()
      }
    }
    
    dataBase.filter(task => task.weekDay == "Sabado").map(task => fic.push(
      {hours: `${task.hours}`,
      textContent: `${task.textContent}`,
      weekDay: `${task.weekDay}`,}
    ));
    listTasks2();
    
  }
  if(elemento.classList.contains('day6')){
   
     
    if(fic.length>0){
      while (fic.length > 0) {
        fic.pop()
      }
    }
    
    dataBase.filter(task => task.weekDay == "Domingo").map(task => fic.push(
      {hours: `${task.hours}`,
      textContent: `${task.textContent}`,
      weekDay: `${task.weekDay}`,}
    ));
    listTasks2();
    
  }
 
  
})


listTasks();
buttonAdd.onclick = insertTask;
