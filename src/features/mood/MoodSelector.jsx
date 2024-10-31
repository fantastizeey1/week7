// src/features/mood/MoodSelector.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMood } from './moodSlice';

const moods = [
    { name: 'Happy', image: '/happy.jpg' },
    { name: 'Sad', image: '/sad.jpg' },
    { name: 'Excited', image: '/excited.jpg' },
    { name: 'Neutral', image: '/neutral.jpg' },
    { name: 'Tired', image: '/Tired.jpg' },
];

function MoodSelector() {
    const currentMood = useSelector((state) => state.mood.mood);
    const dispatch = useDispatch();

    const currentMoodImage = moods.find(mood => mood.name === currentMood)?.image;

    return (
        <div className="flex w-full flex-col items-center p-4 space-y-4 bg-pink-400 rounded-lg shadow-md max-w-sm mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 text-center">
                Current Mood: {currentMood || "Select a mood"}
            </h2>

            {currentMoodImage && (
                <img
                    src={currentMoodImage}
                    alt={currentMood}
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-lg shadow-sm max-w-full max-h-full"
                />
            )}

            <div className="flex flex-wrap justify-center gap-2">
                {moods.map((mood) => (
                    <button
                        key={mood.name}
                        onClick={() => dispatch(setMood(mood.name))}
                        className={`px-3 py-1 text-white text-sm rounded shadow-md transition-all focus:outline-none focus:ring-2 
                            ${mood.name === currentMood ? 'bg-green-500 ring-2 ring-green-300' : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'}`}
                    >
                        {mood.name}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default MoodSelector;
