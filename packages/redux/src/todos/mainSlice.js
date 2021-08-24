import { createSlice } from "@reduxjs/toolkit";

// Immer is used by reduxjs/toolkit hence we can write code that looks like mutating code here
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: { remaining: [], completed: [] },
    reducers: {
        setTasks: (state, action) => {
            state.completed = action.payload.tasks.filter(task => task.completed);
            state.remaining = action.payload.tasks.filter(task => !task.completed);
        },
        completeTask: (state, action) => {
            const foundTask = state.remaining.find(task => task.id === action.payload.id);
            if (foundTask) {
                state.completed = [...state.completed, { ...foundTask, completed: true }];
                state.remaining = state.remaining.filter(task => task.id !== action.payload.id);
            }
        },
        setRemainingTask: (state, action) => {
            const foundTask = state.completed.find(task => task.id === action.payload.id);
            if (foundTask) {
                state.remaining = [...state.remaining, { ...foundTask, completed: false }];
                state.completed = state.completed.filter(task => task.id !== action.payload.id);
            }
        }
    }
});

export const { setTasks, completeTask, setRemainingTask } = tasksSlice.actions;

export default tasksSlice.reducer;
