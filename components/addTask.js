import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (evento) => {
    const list = document.querySelector("[data-list]");
    const task = createTask(evento)
    list.appendChild(task);
}

const createTask = (evento) => {
    //Previene que se recargue la pagina
    evento.preventDefault();
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log(taskList);
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");
    //Guardamos el valor de input en una variable
    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");
    //Creamos un elemento li que lo guardamos en task
    const task = document.createElement("li");
    //Agregamos a task la clase card
    task.classList.add("card")
    //Borramos el valor de input
    input.value = "";
    const taskContent = document.createElement("div")

    const taskObj = {
        value,
        dateFormat,
    }
    
    taskList.push(taskObj);
    //Almacenamos nuuestra informacion en el sessionStorage. Se tiene que mandar todo en formato string
    localStorage.setItem("tasks", JSON.stringify(taskList));
    //A taskContent le agregamos lo que retorna la funcion
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    //Agregamos titleTask a taskContent
    taskContent.appendChild(titleTask);
    //task.innerHTML = content;
    const dateElement = document.createElement("span");
    dateElement.innerHTML = dateFormat;
    task.appendChild(taskContent);
    //Agregamos elemento fecha
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());
    return task;
}
