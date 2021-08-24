import Task from './Task';

function CompletedTasks({ tasks, onIncompleteTask, ...rest }) {
  const handleChange = (taskId, event) => {
    if (!event.target.checked) {
      onIncompleteTask(taskId);
    }
  };

  return (
    <div {...rest}>
      <h2>Completed ({tasks.length})</h2>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} handleChange={handleChange} />
        ))}
      </ul>
    </div>
  );
}

export default CompletedTasks;
