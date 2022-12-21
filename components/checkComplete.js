const checkComplete = (id) =>{
    const i = document.createElement("div");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", (event) => completeTask(event, id));
    return i;
};

const completeTask = (event, id) =>{
    const element = event.target;
    // En vez de add pongo toggle. Si la clase existe la remueve, sino la agrega.
    element.classList.toggle("fas");
    element.classList.toggle("complete-icon");
    element.classList.toggle("far");
    console.log("check id", id);
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const index = tasks.findIndex( item => item.id == id);
    tasks[index]["complete"] = !tasks[index]["complete"];
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

export default checkComplete;