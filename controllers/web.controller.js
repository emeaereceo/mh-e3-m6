exports.perfil = (req, res) => {
  res.render("perfil", {
    nombre: "Marco",
    profesion: "Desarrollador fullstack",
  });
};

exports.dashboard = (req, res) => {
  const data = {
    user: {
      name: "Marco",
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
};
