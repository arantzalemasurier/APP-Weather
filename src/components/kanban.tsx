import React, { useState } from "react";
import "./kanban.css";
import Button from "@material-ui/core/Button";
import CreateTaskModal from './createTaskModal';


interface Task {
  name: string;
  description: string;
  checked: boolean;
  dueDate?: Date;
}

const Kanban = () => {
  const [boards, setBoards] = useState([
    {
      name: "To Do",
      tasks: [
        { name: "Tarea 1", description: "Esta es la descripción de la tarea 1", checked: false },
        { name: "Tarea 2", description: "Esta es la descripción de la tarea 2", checked: false},
      ],
    },
    {
      name: "In Progress",
      tasks: [
        { name: "Tarea 3", description: "Esta es la descripción de la tarea 3", checked: false },
      ],
    },
    {
      name: "Done",
      tasks: [
        { name: "Tarea 4", description: "Esta es la descripción de la tarea 4", checked: false },
        { name: "Tarea 5", description: "Esta es la descripción de la tarea 5", checked: false },
      ],
    },
  ]);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  //const [selectedTask, setSelectedTask] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  const addTask = (name: string, description: string, dueDate?: Date) => {
    setBoards(boards => {
      let nextTaskNumber = 1;
      for (const board of boards) {
        nextTaskNumber += board.tasks.length;
      }
      return boards.map(board => {
        if (board.name === "To Do") {
          return {
            ...board,
            tasks: [
              ...board.tasks,
              {
                name: `Task ${nextTaskNumber}`,
                description: description,
                checked: false,
                dueDate: dueDate
              },
            ],
          };
        }
        return board;
      });
    });
  };
  


  const toggleChecked = (task: Task) => {
    setBoards(boards =>
      boards.map(board => {
        const tasks = board.tasks.map(bTask =>
          bTask === task ? { ...bTask, checked: !bTask.checked } : bTask
        );
        return { ...board, tasks };
      })
    );
  };

  

  const deleteChecked = () => {
    setBoards((boards) =>
      boards.map((board) => {
        const tasks = board.tasks.filter((task, taskIndex) => !task.checked);
        return { ...board, tasks };
      })
    );
  };

  const moveTask = (task: Task) => {
    setBoards(boards => {
      const inProgressIndex = boards.findIndex(board => board.name === "In Progress");
      const doneIndex = boards.findIndex(board => board.name === "Done");
      const inProgressTasks = [...boards[inProgressIndex].tasks];
      const taskIndex = inProgressTasks.indexOf(task);

      if (taskIndex === -1) {
        return boards;
      }

      inProgressTasks.splice(taskIndex, 1);
      const doneTasks = [...boards[doneIndex].tasks, {...task, checked: false}];
      const updatedInProgress = { ...boards[inProgressIndex], tasks: inProgressTasks };
      const updatedDone = { ...boards[doneIndex], tasks: doneTasks };

      return boards
        .slice(0, inProgressIndex)
        .concat([updatedInProgress])
        .concat(boards.slice(inProgressIndex + 1, doneIndex))
        .concat([updatedDone])
        .concat(boards.slice(doneIndex + 1));
    });
};


const moveTaskToInProgress = () => {
  setBoards(boards => {
    const toDoBoard = boards.find(board => board.name === "To Do");
    if (!toDoBoard) {
      return boards;
    }
    const inProgressBoard = boards.find(board => board.name === "In Progress");
    if (!inProgressBoard) {
      return boards;
    }
    const toDoTasks = toDoBoard.tasks.filter(task => !task.checked);
    const movedTasks = toDoBoard.tasks.filter(task => task.checked).map(task => ({...task, checked: false}));
    return boards.map(board => {
      if (board === toDoBoard) {
        return { ...board, tasks: toDoTasks };
      }
      if (board === inProgressBoard) {
        return { ...board, tasks: [...board.tasks, ...movedTasks] };
      }
      return board;
    });
  });
};



  
return (
  <div className="kanban-container">
    <div className="header">
      <h2>KANBAN BOARD</h2>
    </div>
    <div className="boards">
      {boards.map((board, index) => (
        <div className="board" key={index}>
          <h3>{board.name}</h3>
          <div className="tasks">
            {board.tasks.map((task, taskIndex) => (
              <div className="task" key={taskIndex}>
                <input
                  type="checkbox"
                  checked={task.checked}
                  onChange={() => toggleChecked(task)}
                />
                <h4>{task.name}</h4>
                <p>{task.description}</p>
                {board.name === "To Do" && (
                  <button onClick={() => moveTaskToInProgress()}>En Progreso</button>                )}
                {board.name === "In Progress" && (
                  <button onClick={() => moveTask(task)}>Realizada</button>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    {showForm && (
      <CreateTaskModal 
      show={showForm} 
      onClose={() => setShowForm(false)} 
      onSubmit={(name, description) => addTask(name, description)} 
      />
  )}
    <div className="buttons-container">
      <button className="create-button" onClick={() => setShowForm(!showForm)}>Crear tarea</button>
      <button className="delete-button" onClick={deleteChecked}>Borrar tareas marcadas</button>
    </div>
  </div>
);
}

export default Kanban;
