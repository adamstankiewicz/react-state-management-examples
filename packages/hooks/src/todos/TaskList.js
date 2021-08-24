
import RemainingTasks from './RemainingTasks';
import CompletedTasks from './CompletedTasks';

function TaskList() {
  return (
    <div style={{ display: 'flex' }}>
      <RemainingTasks style={{ flexBasis: '50%' }} />
      <CompletedTasks />
    </div>
  );
}

export default TaskList;
