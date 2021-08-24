function Task({ task, handleChange }) {
  return (
    <li key={task.id}>
      <input
        type="checkbox"
        id={task.id}
        value={task.title}
        onChange={(e) => handleChange(task.id, e)}
        checked={task.completed}
      />
      <label htmlFor={task.id}>{task.title}</label>
    </li>
  );
}

export default Task;
