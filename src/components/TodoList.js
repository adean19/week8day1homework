import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, isBold: false, isItalic: false }]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleToggleStyle = (index, style) => {
    const updatedTasks = [...tasks];
    updatedTasks[index][style] = !updatedTasks[index][style];
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h2>To-Do List</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              style={{
                fontWeight: task.isBold ? 'bold' : 'normal',
                fontStyle: task.isItalic ? 'italic' : 'normal',
              }}
            >
              {task.text}
            </span>
            <div className="task-buttons">
              <button onClick={() => handleToggleStyle(index, 'isBold')}>
                Bold
              </button>
              <button onClick={() => handleToggleStyle(index, 'isItalic')}>
                Italic
              </button>
              <button onClick={() => handleRemoveTask(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
