import { useDispatch, useSelector } from 'react-redux';
import { setRemainingTask } from './mainSlice';
import Task from './Task';

function CompletedTasks({ props }) {

  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleChange = (taskId, event) => {
    if (!event.target.checked) {
      dispatch(setRemainingTask({ id: taskId }));
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
