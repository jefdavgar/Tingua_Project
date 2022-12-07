const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.getElementById("add_list");


addBtn.addEventListener("click", (no_actualizar) => {
    no_actualizar.preventDefault();
  
    const text = input.value;
    if (text !== "") {
      const li = document.createElement("li");
      const div = document.createElement("div");
      const p = document.createElement("p");
      const empty = document.createElement("p");
      p.textContent = text
      empty.textContent=" ";
      div.className = "d-flex"
      ul.appendChild(div);
      div.appendChild(li);
      li.appendChild(empty);
      div.appendChild(p);
      input.value = "";
    }
});


deleteBtn.addEventListener("click", ()=>{
  ul.get
})