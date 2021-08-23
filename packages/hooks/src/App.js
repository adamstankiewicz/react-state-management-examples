import { useReducer, useState, useEffect } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'SET_TASKS': {
      const remainingTasks = action.tasks.filter(task => !task.completed);
      const completedTasks = action.tasks.filter(task => task.completed);
      return {
        ...state,
        remaining: [...state.remaining, ...remainingTasks ],
        completed: [...state.completed, ...completedTasks],
      };
    }
    default:
      throw new Error();
  }
}

const initialState = {
  remaining: [],
  completed: [],
};

function App() {
  const [tasks, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      async function fetchTasks() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const tasks = await response.json();
        dispatch({ type: 'SET_TASKS', tasks });
      }
      fetchTasks();
      setIsLoading(false);
    },
    [],
  );

  return (
    <div className="App">
      <header>
        <h1>My Tasks</h1>
      </header>
      <main>
        {isLoading && (
          <span>Loading...</span>
        )}
        {!isLoading && (
          <div style={{ display: 'flex' }}>
            <div style={{ flexBasis: '50%' }}>
              <h2>Remaining</h2>
              <ul>
                {tasks.remaining.map((task) => (
                  <li key={task.id}>
                    <input type="checkbox" id={task.id} value={task.title} />
                    <label htmlFor={task.id}>{task.title}</label>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Completed</h2>
              <ul>
                {tasks.completed.map((task) => (
                  <li key={task.id}>
                    <input type="checkbox" id={task.id} value={task.title} />
                    <label htmlFor={task.id}>{task.title}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
