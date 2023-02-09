import React, { useState } from "react";
import "./kanban.css";


const Kanban = () => {
  const [boards] = useState([
    {
      name: "To Do",
      tasks: [
        { name: "Tarea 1", description: "Esta es la descripción de la tarea 1" },
        { name: "Tarea 2", description: "Esta es la descripción de la tarea 2" },
      ],
    },
    {
      name: "In Progress",
      tasks: [
        { name: "Tarea 3", description: "Esta es la descripción de la tarea 3" },
      ],
    },
    {
      name: "Done",
      tasks: [
        { name: "Tarea 4", description: "Esta es la descripción de la tarea 4" },
        { name: "Tarea 5", description: "Esta es la descripción de la tarea 5" },
      ],
    },
  ]);

  return (
    <div className="kanban-container">
      {boards.map((board, index) => (
        <div className="board" key={index}>
          <h3>{board.name}</h3>
          <div className="tasks">
            {board.tasks.map((task, taskIndex) => (
              <div className="task" key={taskIndex}>
                <h4>{task.name}</h4>
                <p>{task.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kanban;
