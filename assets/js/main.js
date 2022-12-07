const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.getElementById("add_list");
const deleteBtn = document.getElementById("btn_delete"); 
const sorteo = document.getElementById("sorteo")
const lista_nombres = document.getElementById("list_names")
const video_ave = document.getElementById("ave")
const proxima = document.getElementById("proxima")
const modal = document.getElementById("modal")
const closeModal = document.getElementById("close")

//funcion de arreglo 
var datos = []

//funcion para agregar elementos al DOM - Nombre
function agregarTarea(tarea){
    const elemento= 
                    `<div class="d-flex" id="name">
                        <li></li>
                        <div>
                            <p class="p_nombres">${tarea}</p>
                        </div>
                     </div>
                    `
    ul.insertAdjacentHTML("beforeend", elemento)
}

//evento para agregar nombre a la lista 1 ¿
addBtn.addEventListener("click", ()=>{
    const tarea =input.value
    datos.push(tarea);
    if(tarea){
        agregarTarea(tarea)
    }
    input.value=""
})


document.addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        const tarea =input.value
        datos.push(tarea);
        if(tarea){
        agregarTarea(tarea)
        }
    input.value=""
    }
})

//nombre
function eliminarNombre(){
    console.log(deleteBtn.parentNode)
}

//funcion de nombre aleatorio
function nombreAleatorio(data){
    return data[Math.floor(Math.random()* data.length)]
}


// mostrar el nombre aleatorio en la lista vacia 2
function mostrarAleatorio(){
    if(datos.length==0){
        const modal_hijo = modal.childNodes[1]

        const pop_up = `
                    <h2 id="pop">No hay nombres para sortear</h2>
                    `
        modal_hijo.insertAdjacentHTML("afterbegin", pop_up)
        modal.style.visibility="visible"
        closeModal.addEventListener("click", ()=>{
            const pop = document.getElementById("pop");
            modal_hijo.removeChild(pop)
            modal.style.visibility="hidden"
        })

        modal.addEventListener("click", ()=>{
            const pop = document.getElementById("pop");
            modal_hijo.removeChild(pop)
            modal.style.visibility="hidden"
        })
    }
    if(datos.length>0){
    const aleatorio=nombreAleatorio(datos)
    const listaNombres = document.getElementById("listaNombres")
    let parrafo = aleatorio
    const modal_hijo = modal.childNodes[1]
    console.log(modal_hijo)
    const pop_up = `
                    <h2 id="pop">Felicidades el elejido es</h2>
                    <h2 id="parr">${parrafo}</h2>
                    `
    modal_hijo.insertAdjacentHTML("afterbegin", pop_up)
    const elemento= 
                    `<div class="d-flex">
                        <li></li>
                        <div>
                            <p>${parrafo}</p>
                        </div>
                     </div>
                    `
    listaNombres.insertAdjacentHTML("beforeend", elemento)
    //Eliminar nombre del sorteo
    const parrafos_nombres = document.getElementsByClassName("p_nombres")
    const arreglo_nombres = []

    for(let i=0; i<parrafos_nombres.length;i++){
        arreglo_nombres.push(parrafos_nombres[i].innerHTML);
    }

    if (arreglo_nombres.length==1){
        alert("ESTE ES EL ULTIMO JUGADOR DE LA LISTA")
    }
    function arrayContiene(array, elemento){
        for(var i=0; i<array.length; i++){
            if (array[i] === elemento){
                console.log("Contiene")
                let indice = array.indexOf(elemento)
                if (indice >= 0){
                    array.splice(indice, 1)
                }
                let eliminar_indice = datos.indexOf(elemento)
                if (eliminar_indice >= 0){
                    datos.splice(eliminar_indice, 1)
                } 
                let indiceElemento = parrafos_nombres[indice]
                let padreElemento = indiceElemento.parentNode.parentNode
                ul.removeChild(padreElemento) 
                return true
            }
        }
        if (array[i !==elemento]){
            console.log("No contiene")
            return false
        }
    }
    arrayContiene(arreglo_nombres, parrafo)
    sorteo.style.visibility = "hidden";
    video_ave.style.visibility="visible";
    modal.style.visibility="visible"

    closeModal.addEventListener("click", ()=>{
        const pop = document.getElementById("pop");
        modal_hijo.removeChild(pop)
        const parr = document.getElementById("parr");
        modal_hijo.removeChild(parr)
        modal.style.visibility="hidden"
    })

    modal.addEventListener("click", ()=>{
        const pop = document.getElementById("pop");
        modal_hijo.removeChild(pop)
        const parr = document.getElementById("parr");
        modal_hijo.removeChild(parr)
        modal.style.visibility="hidden"
    })
}}
proxima.addEventListener("click", ()=>{
    sorteo.style.visibility ="visible"
    video_ave.style.visibility="hidden";
})

