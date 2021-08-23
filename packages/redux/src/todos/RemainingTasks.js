import { useDispatch, useSelector } from 'react-redux';
import { completeTask } from './mainSlice';
import Task from './Task';

function RemainingTasks(props) {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleChange = (taskId, event) => {
    if (event.target.checked) {
      dispatch(completeTask({ id: taskId }));
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
