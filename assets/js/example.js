const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.getElementById("add_list");
const deleteBtn = document.getElementById("eliminar"); 

//funcion para agregar tarea
function agregarTarea(tarea){
    const elemento= 
                    `<div class="d-flex">
                        <li></li>
                        <div>
                            <p>${tarea}</p>
                        </div>
                     </div>
                    `
    ul.insertAdjacentHTML("beforeend", elemento)
}
addBtn.addEventListener("click", ()=>{
    const tarea =input.value
    if(tarea){
        agregarTarea(tarea)
    }
    input.value=""
})
document.addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        const tarea =input.value
        if(tarea){
        agregarTarea(tarea)
        }
    input.value=""
    }
})
function tareaEliminada(element){
    element.parentNode.parentNode.removeChild(element.parentNode)
}