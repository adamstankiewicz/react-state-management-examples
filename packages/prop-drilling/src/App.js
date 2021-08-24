import {
  useState, useEffect
} from 'react';

import TaskList from './todos/TaskList';

function App() {
  const [tasks, setTasks] = useState({
    remaining: [],
    completed: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      async function fetchTasks() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const taskList = await response.json();
        setTasks({
          remaining: taskList.filter(task => !task.completed),
          completed: taskList.filter(task => task.completed),
        });
        setIsLoading(false);
      }
      fetchTasks();
    },
    [],
  );

  return (
    <div className="app">
      <header>
        <h1>My Tasks</h1>
      </header>
      <main>
        {isLoading && <span>Loading...</span>}
        {!isLoading && <TaskList tasks={tasks} setTasks={setTasks} />}
      </main>
    </div>
  );
}

export default App;
