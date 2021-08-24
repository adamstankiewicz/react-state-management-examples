import { useMemo } from 'react';

import RemainingTasks from './RemainingTasks';
import CompletedTasks from './CompletedTasks';

function TaskList({ tasks, setTasks }) {
  const remainingTasks = useMemo(() => tasks.remaining, [tasks.remaining]);
  const completedTasks = useMemo(() => tasks.completed, [tasks.completed]);

  const handleSetCompletedTask = (taskId) => {
    const foundTask = remainingTasks.find(task => task.id === taskId);
    if (foundTask) {
      setTasks({
        remaining: remainingTasks.filter(task => task.id !== taskId),
        completed: [...completedTasks, { ...foundTask, completed: true }],
      });
    }
  };

  const handleSetRemainingTask = (taskId) => {
    const foundTask = completedTasks.find(task => task.id === taskId);
    if (foundTask) {
      setTasks({
        completed: completedTasks.filter(task => task.id !== taskId),
        remaining: [...remainingTasks, { ...foundTask, completed: false }],
      });
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <RemainingTasks
        style={{ flexBasis: '50%' }}
        tasks={remainingTasks}
        onCompleteTask={handleSetCompletedTask}
      />
      <CompletedTasks
        tasks={completedTasks}
        onIncompleteTask={handleSetRemainingTask}
      />
    </div>
  );
}

export default TaskList;
