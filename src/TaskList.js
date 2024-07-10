import React, { useState } from 'react';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { name: 'Aprender React', link: 'https://reactjs.org/' },
    { name: 'Criar um projeto', link: 'https://reactjs.org/docs/create-a-new-react-app.html' },
    { name: 'Estudar JavaScript', link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' }
  ]);

  const addTask = () => {
    const newTaskName = prompt('Digite a nova tarefa:');
    const newTaskLink = prompt('Digite o link da nova tarefa:');
    if (newTaskName && newTaskLink) {
      setTasks([...tasks, { name: newTaskName, link: newTaskLink }]);
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks);
  };

  return (
    <div className="task-list">
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <a href={task.link} target="_blank" rel="noopener noreferrer">{task.name}</a>
            <button onClick={() => removeTask(index)}>Remover</button>
          </li>
        ))}
      </ul>
      <button onClick={addTask}>Adicionar Tarefa</button>
    </div>
  );
};

export default TaskList;







