export const uniquesDates = (tasks) => {
    const unique = [];
    
    tasks.forEach((task) => {
        //Si no existe el task lo agrega, sino nada
        if (!unique.includes(task.dateFormat)){
            unique.push(task.dateFormat);
        }
    });

    return unique;
}

export const orderDates = (dates) =>{
    return dates.sort((a,b) =>{
        const firstDate = moment(a, "DD/MM/AAAA");
        const secondDate = moment(b, "DD/MM/AAAA");
        return firstDate - secondDate;
    })
}