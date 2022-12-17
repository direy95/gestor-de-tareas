import { addTask } from "./components/addTask.js";
import { readTasks } from "./components/readTasks.js";

const btn = document.querySelector("[data-form-btn]");
console.log(btn);

//arrow function
/* En vez de poner
btn.addEventListener("click", function(evento){...}*/
btn.addEventListener("click", addTask);

readTasks();