const path = require("path");
const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();

app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "./views/partials"));
hbs.registerHelper("priorityClass", function (priority) {
  if (priority === "alta") {
    return "priority-high";
  } else if (priority === "media") {
    return "priority-medium";
  } else {
    return "priority-low";
  }
});
app.use(express.static(path.join(__dirname, "./public")));

app.get("/perfil", (req, res) => {
  res.render("perfil", {
    nombre: "Marco",
    profesion: "Desarrollador fullstack",
  });
});

app.get("/dashboard", (req, res) => {
  const data = {
    user: {
      name: "Carlos",
      isAdmin: true,
    },
    projects: [
      {
        name: "API Gateway",
        isCompleted: false,
        tasks: [
          { description: "Diseñar endpoints", priority: "alta" },
          { description: "Implementar JWT", priority: "alta" },
          { description: "Crear documentación", priority: "media" },
        ],
      },
      {
        name: "Refactor del Frontend",
        isCompleted: true,
        tasks: [
          { description: "Migrar a React 18", priority: "baja" },
          { description: "Actualizar dependencias", priority: "baja" },
        ],
      },
      {
        name: "Base de Datos",
        isCompleted: false,
        tasks: [], // Proyecto sin tareas para probar el condicional 'else'
      },
    ],
  };
  res.render("dashboard", data);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
