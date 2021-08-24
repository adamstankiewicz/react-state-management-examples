import { useDispatch, useSelector } from 'react-redux';
import { completeTask } from '../data/reducer';
import Task from './Task';

function RemainingTasks(props) {
  /**
   * STUDY NOTE:
   * useSelector compares its results using strict === reference comparisons,
   * so the component will re-render any time the selector result is a new reference!
   * This means that if you create a new reference in your selector and return it,
   * your component could re-render every time an action has been dispatched, even if the data
   * really isn't different.
   * https://redux.js.org/tutorials/fundamentals/part-5-ui-react#reading-state-from-the-store-with-useselector
   */
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
