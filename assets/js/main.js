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
                     </div>         `
    ul.insertAdjacentHTML("beforeend", elemento)
    }
addBtn.addEventListener("click", (e)=>{
  const li = document.createElement("li");
  const p = document.createElement("p");
  const tarea =input.value
  
  if (tarea) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = tarea;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
  }
})
document.addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        if(tarea){
        agregarTarea(tarea)
        }
    input.value=""
    }
})
//funcion para eliminar li, p, txt
function addDeleteBtn() {
  //crear una constante que 
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  //crear evento
  deleteBtn.addEventListener("click", (e)=>{

    const item = e.target.parentElement;
    ul.removeChild(item)
  })
  return deleteBtn;
};