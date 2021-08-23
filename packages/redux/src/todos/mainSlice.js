import { createSlice } from "@reduxjs/toolkit";

// Immer is used by reduxjs/toolkit hence we can write code that looks like mutating code here
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: { remaining: [], completed: [] },
    reducers: {
        setTasks: (state, action) => {
            state.completedTasks = action.payload.tasks.filter(task => task.completed);
            state.remainingTasks = action.payload.tasks.filter(task => !task.completed);
        },
        completeTask: (state, action) => {
            const foundTask = state.remaining.find(task => task.id === action.id);
            state.completed = [...state.completed, { ...foundTask, completed: true }];
        },
        setRemainingTask: (state, action) => {
            const foundTask = state.completed.find(task => task.id === action.id);
            state.remaining = [...state.remaining, { ...foundTask, completed: false }];
        }
    }
});

export const { setTasks, completeTask, setRemainingTask } = tasksSlice.actions;

export default tasksSlice.reducer;
