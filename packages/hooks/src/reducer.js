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
      const updatedRemainingTasks = state.remaining.filter(task => task.id !== action.id);
      const updatedCompletedTasks = [...state.completed, { ...foundTask, completed: true }];
      return {
        ...state,
        remaining: updatedRemainingTasks,
        completed: updatedCompletedTasks,
      };
    }
    case 'SET_REMAINING_TASK': {
      const foundTask = state.completed.find(task => task.id === action.id);
      const updatedRemainingTasks = [...state.remaining, { ...foundTask, completed: false }];
      const updatedCompletedTasks = state.completed.filter(task => task.id !== action.id);
      return {
        ...state,
        remaining: updatedRemainingTasks,
        completed: updatedCompletedTasks,
      };
    }
    default:
      throw new Error();
  }
}

export default reducer;
