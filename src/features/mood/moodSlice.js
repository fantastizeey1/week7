// src/features/mood/moodSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state for the mood
const initialState = { mood: 'Neutral' };

// Create a slice for mood management
const moodSlice = createSlice({
    name: 'mood',
    initialState,
    reducers: {
        setMood: (state, action) => { state.mood = action.payload; }
    },
});

// Export actions and reducer
export const { setMood } = moodSlice.actions;
export default moodSlice.reducer;
