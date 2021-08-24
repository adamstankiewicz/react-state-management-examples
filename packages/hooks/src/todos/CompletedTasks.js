import { useContext } from 'react';

import { TasksContext } from '../App';
import Task from './Task';

function CompletedTasks({ props }) {
  const { tasks, dispatch } = useContext(TasksContext);

  const handleChange = (taskId, event) => {
    if (!event.target.checked) {
      dispatch({ type: 'SET_REMAINING_TASK', id: taskId });
    }
  };

  return (
    <div {...props}>
      <h2>Completed ({tasks.completed.length})</h2>
      <ul>
        {tasks.completed.map((task) => (
          <Task key={task.id} task={task} handleChange={handleChange} />
        ))}
      </ul>
    </div>
  );
}

export default CompletedTasks;
