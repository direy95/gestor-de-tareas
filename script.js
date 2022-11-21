import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");
console.log(btn);

const createTask = (evento) => {
    //Previene que se recargue la pagina
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    //Guardamos el valor de input en una variable
    const value = input.value;
    const list = document.querySelector("[data-list]");
    //Creamos un elemento li que lo guardamos en task
    const task = document.createElement("li");
    //Agregamos a task la clase card
    task.classList.add("card")
    //Borramos el valor de input
    input.value = "";
    const taskContent = document.createElement("div")
    //A taskContent le agregamos lo que retorna la funcion
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    //Agregamos titleTask a taskContent
    taskContent.appendChild(titleTask);
    //task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
}

//arrow function
/* En vez de poner
btn.addEventListener("click", function(evento){...}*/
btn.addEventListener("click", createTask);