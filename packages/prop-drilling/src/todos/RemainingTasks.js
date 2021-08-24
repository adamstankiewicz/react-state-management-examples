import Task from './Task';

function RemainingTasks({ tasks, onCompleteTask, ...rest }) {
  const handleChange = (taskId, event) => {
    if (event.target.checked) {
      onCompleteTask(taskId);
    }
  };

  return (
    <div {...rest}>
      <h2>Remaining ({tasks.length})</h2>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} handleChange={handleChange} />
        ))}
      </ul>
    </div>
  );
}

export default RemainingTasks;
