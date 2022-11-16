const btn = document.querySelector("[data-form-btn]");
console.log(btn);

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
};

//arrow function
/* En vez de poner
btn.addEventListener("click", function(evento){...}*/
btn.addEventListener("click", createTask);