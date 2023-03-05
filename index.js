//* Como pusimos en nuestro package.json "type":"module" podemos usar import 
import express from "express";

//guardamos la funcion express, no estamos instanciando, solo asignando
const app = express();


app.use(express.json());

const todoListArray = [];

app.get("/", (request, response) => {
    response.json({
        total: todoListArray.length,
        tasks: todoListArray,
    })

});

app.post("/create-task", (request, response) => {
    const task = request.body;
    task.id = todoListArray.length + 1;
    task.created_at = new Date();

    todoListArray.push(task);

    response.json({
        message: "Task Created",
        task
    });
});


app.put("/update-task/:id", (request, response) => {
    const id = request.params.id;
    const data = request.body;

    const taskIndex = todoListArray.findIndex((todotask) => todotask.id == Number(id));

    todoListArray[taskIndex] = { ...todoListArray[taskIndex], ...data };

    return response.json({
        tarea: "update Task",
    });
});

app.delete("/delete-task/:id", (request, response)=> {
    const id = request.params.id;
    todoListArray.splice(id - 1, 1);
    response.json({
        message: "task "+id+" was eliminated susccesfully"
    });
});


app.listen(6001, () => {
    console.log("El servidor inicio en el puerto http://localhost:6001");
});