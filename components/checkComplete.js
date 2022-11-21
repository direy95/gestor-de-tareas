const checkComplete = () =>{
    const i = document.createElement("div");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
};

const completeTask = (event) =>{
    const element = event.target;
    // En vez de add pongo toggle. Si la clase existe la remueve, sino la agrega.
    element.classList.toggle("fas");
    element.classList.toggle("complete-icon");
    element.classList.toggle("far");
};

export default checkComplete;