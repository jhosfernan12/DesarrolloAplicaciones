const express = require("express");
const app = express();
app.use(express.json()); // Para leer JSON del body

// Datos temporales (simula una Base de Datos)
let tasks = [
  { id: 1, title: "Configurar servidor", done: false },
  { id: 2, title: "Crear endpoints REST", done: false }
];


// GET (obtener datos)

app.get("/tasks", (req, res) => 
{
  res.json(tasks);
});


// POST (crear un nuevo recurso)
app.post("/tasks", (req, res) => 
    {
  const newTask = 
  {
    id: tasks.length + 1,
    title: req.body.title,
    done: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT (actualizar un recurso)

app.put("/tasks/:id", (req, res) => 
    {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  task.title = req.body.title ?? task.title;
  task.done = req.body.done ?? task.done;

  res.json(task);
});

// DELETE (eliminar un recurso)
app.delete("/tasks/:id", (req, res) => 
{
  const id = parseInt(req.params.id);
  tasks = tasks.filter(t => t.id !== id);

  res.json({ message: "Task deleted" });
});

// Iniciar servidor
app.listen(3001, () => {
  console.log("API REST running on http://localhost:3001");
});

