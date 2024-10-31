// src/App.js
import React from 'react';
import MoodSelector from './features/mood/MoodSelector';

function App() {
    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-900 text-gray-800">
            <h1 className="text-3xl font-semibold text-amber-200 mb-6">Mood Tracker</h1>
            <MoodSelector />
        </div>
    );
}

export default App;
