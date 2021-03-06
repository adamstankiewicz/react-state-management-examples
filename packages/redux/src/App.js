import React, { createContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTasks } from './data/reducer';

import TaskList from './todos/TaskList';

export const TasksContext = createContext();

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      async function fetchTasks() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const tasks = await response.json();
        dispatch(setTasks({ tasks }));
        setIsLoading(false);
      }
      fetchTasks();
    },
    [dispatch],
    /**
     * STUDY NOTE:
     * the React hooks lint rules do not know that dispatch should be stable, and will warn that the dispatch variable should be added to
     * dependency arrays for useEffect and useCallback.
     * The simplest solution is to do just that:
     */
  );

  return (
    <div className="app">
      <header>
        <h1>My Tasks</h1>
      </header>
      <main>
        {isLoading && <span>Loading...</span>}
        {!isLoading && <TaskList />}
      </main>
    </div>
  );
}

export default App;
