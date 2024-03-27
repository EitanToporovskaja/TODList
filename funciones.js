let arr = [];

function agregarTodo() {
    const todoInput = document.getElementById("todoInput").value.trim();// trim() :quita los espacios iniciales, finales y repetidos del texto.
    if (todoInput !== "") {
        const timestamp = new Date().toLocaleString();
        arr.push({ tarea: todoInput, timestamp: timestamp, completado: false });
        mostrarTodos();
        document.getElementById("todoInput").value = "";
    } else {
        alert("No has agregado ninguna tarea");
    }
}

function mostrarTodos() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";
    arr.forEach(todo => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="${todo.completado ? 'completado' : ''}">
                ${todo.tarea} - ${todo.timestamp}
            </span>
        `;
        li.addEventListener("click", () => toggleTodoCompletion(todo));
        todoList.appendChild(li);
        // Añadir botón de cierre
        const span = document.createElement("SPAN");
        const txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        // Asignar función de ocultar al botón de cierre
        span.onclick = function() {
            const div = this.parentElement;
            div.style.mostar = "none";
            borrarTodo(div);
        };
    });
}

function toggleTodoCompletion(todo) {
    todo.completado = !todo.completado;
    if (todo.completado) {
        todo.completadoTimestamp = new Date().toLocaleString();
    } else {
        delete todo.completadoTimestamp;
    }
    mostrarTodos();
}

function borrarTodos() {
    arr = [];
    mostrarTodos();
}

function borrarTodo(todoElement) {
    const tareaText = todoElement.textContent.split(' - ')[0]; // Obtener el texto de la tarea
    arr = arr.filter(todo => todo.tarea !== tareaText); // Filtrar el array para eliminar la tarea correspondiente
}

function mostrarTareaMasRapida() {
    if (arr.length === 0) {
        alert("Aún no se han agregado tareas!");
        return;
    }
    const tareaRapida = arr.reduce((prev, curr) => {
    //El método reduce es un método de arrays en JavaScript que te permite reducir un array a un solo valor, 
    //este array puede contener cualquier tipo de dato un número, un cadena de texto, un objeto o incluso un nuevo array.

        return (new Date(curr.timestamp) - new Date(prev.timestamp) < 0) ? curr : prev;
    });
    alert(`La tarea más rápida fue: ${tareaRapida.tarea}`);
}

// Cargar tareas al inicio
document.addEventListener('DOMContentLoaded', () => {
    mostrarTodos();
});
