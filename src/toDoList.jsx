import React, { useState } from 'react';

const ToDoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]); 
      setTask(''); 
    }
  };
  const deleteTask = (indexToRemove) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
    setTasks(updatedTasks);
  };
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className='flex justify-center items-center mt-[250px]'>
      <div className='h-auto w-[400px] bg-slate-500 shadow-lg p-6'>
       <h1 className='text-white font-bold text-xl ml-24 mb-6 '>To Do List</h1>
        <input
          type='text'
          className='border-[2px] p-3 rounded-md border-blue-400'
          placeholder='Add a new task...'
          value={task}
          onChange={handleInputChange}
        />
      
        <button
          className='ml-8 bg-green-900 p-3 rounded-md'
          onClick={addTask}
        >
          Add Task
        </button>

     
        <ul className='mt-4'>
          {tasks.map((taskItem, index) => (
            <li key={index} className='p-2 border-b border-gray-300 flex justify-between items-center'>
              {taskItem}
             
              <button
                className='bg-red-400 p-2 rounded-md text-white ml-4'
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
