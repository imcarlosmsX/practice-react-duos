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
      <h1 className="text-3xl text-center mt-10 mb-5">To Do List</h1>
      <div className='flex items-center justify-center mt-5 mb-10'>
        <div>
          <input
            className='mx-5 border border-gray-300 p-2 rounded'
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Type the task"
          />
        </div>
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Add</button>
      </div>
      <div className='flex flex-col items-center justify-center mx-5 space-y-4'>
        {tasks.map((task, index) => (
          <div key={index} className="task flex items-center justify-between w-full">
            <span className='mx-5 border border-gray-300 p-2 rounded flex-grow'>{task}</span>
            <button onClick={() => deleteTask(index)} className="delete-button hover:bg-red-500 p-2 rounded border border-gray-300 flex-shrink-0">
              <img src="/public/assets/delete-svgrepo-com.svg" alt="" className="w-6 h-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  };
  
  export default App;