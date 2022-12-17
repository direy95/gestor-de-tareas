import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (evento) => {
    evento.preventDefault();

    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");

    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY");

    input.value = "";
    calendar.value = "";

    const taskObj = {
        value,
        dateFormat,
    }

    
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.push({value, dateFormat});
    //Almacenamos nuuestra informacion en el sessionStorage. Se tiene que mandar todo en formato string
    localStorage.setItem("tasks", JSON.stringify(taskList));

    const task = createTask(taskObj);


    list.appendChild(task);
}

export const createTask = ({value, dateFormat}) => {
    //Creamos un elemento li que lo guardamos en task
    const task = document.createElement("li");
    //Agregamos a task la clase card
    task.classList.add("card")
    //Borramos el valor de input

    const taskContent = document.createElement("div")
    
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
