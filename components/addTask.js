import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTasks } from "./readTasks.js";

export const addTask = (evento) => {
    //Evitar que recargue la pagina sola
    evento.preventDefault();

    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");

    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");

    if(value == "" || date == "")
        return alert("Faltan datos");

    input.value = "";
    calendar.value = "";

    const complete = false;

    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4() //Esto es un generador de id
    }

    //Cada vez que se agrega una tarea se elimina la lista para que no muestre repeticiones
    list.innerHTML = "";
    
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.push(taskObj);
    //Almacenamos nuuestra informacion en el sessionStorage. Se tiene que mandar todo en formato string
    localStorage.setItem("tasks", JSON.stringify(taskList));

    displayTasks();
}

export const createTask = ({value, dateFormat, complete, id}) => {
    //Creamos un elemento li que lo guardamos en task
    const task = document.createElement("li");
    //Agregamos a task la clase card
    task.classList.add("card")
    //Borramos el valor de input

    const taskContent = document.createElement("div");

    const check = checkComplete(id);

    if(complete){
        check.classList.toggle("fas");
        check.classList.toggle("complete-icon");
        check.classList.toggle("far");
    }
    
    //A taskContent le agregamos lo que retorna la funcion
    taskContent.appendChild(check);
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
    task.appendChild(deleteIcon(id));
    return task;
}
