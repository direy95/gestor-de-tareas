const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask);
    return i;
}

const deleteTask = (event) =>{
    //con event.target.parentElement accedo al elemento padre
    const parent = event.target.parentElement;
    //Elimina el elemento padre. En este caso el task seleccionado
    parent.remove();
}

//Exportamos la funcion para poder usarla en otra parte de nnustro programa
export default deleteIcon;