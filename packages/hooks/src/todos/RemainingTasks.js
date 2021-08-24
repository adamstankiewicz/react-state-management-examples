import { useContext } from 'react';

import { TasksContext } from '../App';
import Task from './Task';

function RemainingTasks(props) {
  const { tasks, dispatch } = useContext(TasksContext);

  const handleChange = (taskId, event) => {
    if (event.target.checked) {
      dispatch({ type: 'SET_COMPLETED_TASK', id: taskId });
    }
  };

  return (
    <div {...props}>
      <h2>Remaining ({tasks.remaining.length})</h2>
      <ul>
        {tasks.remaining.map((task) => (
          <Task key={task.id} task={task} handleChange={handleChange} />
        ))}
      </ul>
    </div>
  );
}

export default RemainingTasks;
