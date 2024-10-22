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
      <h1 className="text-3xl text-center mt-5">To Do List</h1>
        <div className='flex items-center justify-center mt-5'>
          <div >
          <input className='mx-5'
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Escribe una tarea"
          />
          </div>
        <button onClick={addTask}>Añadir</button>
      </div>
      <div className='flex items-center justify-center mx-5'>
        {tasks.map((task, index) => (
          <div key={index} className="task">
            <span className='mx-5'>{task}</span>
            <button onClick={() => deleteTask(index)} className="delete-button">
  <img src="/public/assets/delete-svgrepo-com.svg" alt="" className="w-5" /></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
