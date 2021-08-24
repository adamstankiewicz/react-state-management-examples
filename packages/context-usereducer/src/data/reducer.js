export const initialState = {
  remaining: [],
  completed: [],
};

export const setTasks = (tasks) => ({
  type: 'SET_TASKS',
  payload: {
    tasks,
  },
});

export const setCompletedTask = (taskId) => ({
  type: 'SET_COMPLETED_TASK',
  payload: {
    id: taskId,
  },
});

export const setRemainingTask = (taskId) => ({
  type: 'SET_REMAINING_TASK',
  payload: {
    id: taskId,
  },
});

function reducer(state, action) {
  switch (action.type) {
    case 'SET_TASKS': {
      return {
        remaining: action.payload.tasks.filter(task => !task.completed),
        completed: action.payload.tasks.filter(task => task.completed),
      };
    }
    case 'SET_COMPLETED_TASK': {
      const foundTask = state.remaining.find(task => task.id === action.payload.id);
      if (foundTask) {
        return {
          remaining: state.remaining.filter(task => task.id !== action.payload.id),
          completed: [...state.completed, { ...foundTask, completed: true }],
        };
      }
      return state;
    }
    case 'SET_REMAINING_TASK': {
      const foundTask = state.completed.find(task => task.id === action.payload.id);
      if (foundTask) {
        return {
          remaining: [...state.remaining, { ...foundTask, completed: false }],
          completed: state.completed.filter(task => task.id !== action.payload.id),
        };
      }
      return state;
    }
    default:
      throw new Error();
  }
}

export default reducer;
