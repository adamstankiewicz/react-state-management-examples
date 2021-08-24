export const initialState = {
  remaining: [],
  completed: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_TASKS': {
      const remainingTasks = action.tasks.filter(task => !task.completed);
      const completedTasks = action.tasks.filter(task => task.completed);
      return {
        ...state,
        remaining: [...state.remaining, ...remainingTasks],
        completed: [...state.completed, ...completedTasks],
      };
    }
    case 'SET_COMPLETED_TASK': {
      const foundTask = state.remaining.find(task => task.id === action.id);
      return {
        ...state,
        remaining: state.remaining.filter(task => task.id !== action.id),
        completed: [...state.completed, { ...foundTask, completed: true }],
      };
    }
    case 'SET_REMAINING_TASK': {
      const foundTask = state.completed.find(task => task.id === action.id);
      return {
        ...state,
        remaining: [...state.remaining, { ...foundTask, completed: false }],
        completed: state.completed.filter(task => task.id !== action.id),
      };
    }
    default:
      throw new Error();
  }
}

export default reducer;
