import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTasks([ { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Ajouter tâche</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
            {t.text}
            <button onClick={() => toggleTaskCompletion(index)}>
              {t.completed ? 'Non terminé' : 'Terminé'}
            </button>
            <button onClick={() => removeTask(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
