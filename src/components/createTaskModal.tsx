import React from "react";
import './modal.css';



interface Props {
  show: boolean;
  onClose: () => void;
  onSubmit: (name: string, description: string) => void;
}

const CreateTaskModal: React.FC<Props> = ({ show, onClose, onSubmit }) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(name, description);
  };

  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Descripción:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={10} 
          />
        </div>
        <div className="buttons">
          <button onClick={onClose}>Cancelar</button>
          <button type="submit">Agregar tarea</button>
        </div>
      </form>
    </div>
  );
  
  
};

export default CreateTaskModal;


