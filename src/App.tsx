import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState<string>('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Escribe una tarea"
        />
        <button onClick={addTask}>Añadir</button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <div key={index} className="task">
            <span>{task}</span>
            <button onClick={() => deleteTask(index)} className="delete-button">Borrar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
