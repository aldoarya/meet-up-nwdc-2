"use strict";

var annoyMe = function annoyMe() {
  var times = document.getElementById("annoyMe").value;
  console.log(times);

  for (var i = 0; i < times; i++) {
    alert("WKWKWKKWKW");
  }
};

var addTodo = function addTodo() {
  var text = document.getElementById("todo").value;
  var currentInnerHTML = document.getElementById("todo-list").innerHTML;
  var card = "\n    <div class=\"card\" style=\"width: 18rem;\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">".concat(text, "</h5>\n    </div>\n  </div>\n    ");
  document.getElementById("todo-list").innerHTML = currentInnerHTML + card;
  document.getElementById("todo").value = "";
};

document.getElementById("annoyButton").addEventListener("click", annoyMe);
document.getElementById("todoButton").addEventListener("click", addTodo);