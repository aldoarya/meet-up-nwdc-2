const annoyMe = () => {
    var times = document.getElementById("annoyMe").value;
    console.log(times);
    for(let i = 0; i < times; i++){
        alert("WKWKWKKWKW")
    }
}

const addTodo = () => {
    let text = document.getElementById("todo").value
    let currentInnerHTML = document.getElementById("todo-list").innerHTML
    let card = `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${text}</h5>
    </div>
  </div>
    `
    document.getElementById("todo-list").innerHTML = currentInnerHTML + card
    document.getElementById("todo").value = ""

}

document.getElementById("annoyButton").addEventListener("click", annoyMe)
document.getElementById("todoButton").addEventListener("click", addTodo)
