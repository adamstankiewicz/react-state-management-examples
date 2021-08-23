import {
  createContext, useReducer, useState, useEffect, useMemo
} from 'react';

import reducer, { initialState } from './reducer';
import TaskList from './TaskList';

export const TasksContext = createContext();

function App() {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      async function fetchTasks() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const tasks = await response.json();
        dispatch({ type: 'SET_TASKS', tasks });
        setIsLoading(false);
      }
      fetchTasks();
    },
    [],
  );

  const contextValue = useMemo(
    () => ({
      tasks,
      dispatch,
    }),
    [tasks],
  );

  return (
    <div className="app">
      <TasksContext.Provider value={contextValue}>
        <header>
          <h1>My Tasks</h1>
        </header>
        <main>
          {isLoading && <span>Loading...</span>}
          {!isLoading && <TaskList />}
        </main>
      </TasksContext.Provider>
    </div>
  );
}

export default App;
