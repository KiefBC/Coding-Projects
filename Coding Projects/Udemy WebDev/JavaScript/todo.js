/**
 * Created by Kiefer on 2017-04-09.
 */

console.log("CONNECTED!");

var todos =["Buy New Turtle"];

var input = prompt("What would you like to do?");

    while (input !== "quit") {
        // HANDLE INPUT
        if (input === "list") {
            listTodos();
        }
        else if (input === "new") {
            addTodo();
        }
        else if (input === "delete") {
            deleteTodo();
            }
            // ask again for new input
            input = prompt("What would you like to do?");
        }

    console.log("OK, YOU QUIT THE APP");

    function listTodos() {
        console.log("**********");
        todos.forEach(function (todo, i) {
            console.log(i + ": " + todo)
        });
        console.log("**********");
    }

    function addTodo() {
        // ASK FOR NEW TODO
        var newTodo = prompt("Enter new todo");
        // ADD TO TODOS ARRAY
        todos.push(newTodo);
        console.log("Added Todo" + " " + newTodo + ", to the list");
    }

    function deleteTodo() {
        // ask for the index of todo dto be delete
        var index = prompt("Enter index of todo to delete");
        // delete that to do
        // splice
        todos.splice(index, 1);
        console.log("Deleted Todo")
    }