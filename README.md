# Mood Selector App
This is a simple React application that allows users to select their mood and display an associated image. The app utilizes Redux Toolkit for state management and Tailwind CSS for styling.

## Overview
- Functionality: Users can select a mood (Happy, Sad, Excited, Neutral, Tired), and the corresponding mood image will be displayed.
- State Management: Redux Toolkit is used to manage the current mood state.
- Code Structure
Redux Store Setup:

## Configured in src/app/store.js to combine the mood slice.
- Mood Slice:

Located in src/features/mood/moodSlice.js, this slice contains:
Initial state (Neutral).
A reducer function (setMood) to update the current mood.
Mood Selector Component:

The main component in src/features/mood/MoodSelector.js handles:
Displaying the current mood.
Rendering buttons for mood selection.
Showing the corresponding mood image based on user selection.
- Styling:

Tailwind CSS is used to ensure a mobile-responsive design.
# Running the App
Install dependencies:

```
bash

npm install
```
Start the development server:
```
bash
npm start
```

Open http://localhost:3000 to view the app.

- How to Use
```
Click on any mood button to set your current mood.
The app will update to show the selected mood and its associated ima# Mood Selector App

This is a simple React application that allows users to select their mood and display an associated image. The app utilizes Redux Toolkit for state management and Tailwind CSS for styling.

## Overview

- **Functionality**: Users can select a mood (Happy, Sad, Excited, Neutral, Tired), and the corresponding mood image will be displayed.
- **State Management**: Redux Toolkit is used to manage the current mood state.
- **Code Structure**
  - **Redux Store Setup**: Configured in `src/app/store.js` to combine the mood slice.
  - **Mood Slice**:
    - Located in `src/features/mood/moodSlice.js`, this slice contains:
      - Initial state (Neutral).
      - A reducer function (setMood) to update the current mood.
  - **Mood Selector Component**: The main component in `src/features/mood/MoodSelector.js` handles:
    - Displaying the current mood.
    - Rendering buttons for mood selection.
    - Showing the corresponding mood image based on user selection.
- **Styling**: Tailwind CSS is used to ensure a mobile-responsive design.

## Running the App

### Install dependencies:

```bash
npm install
```

### Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## How to Use

```markdown
Click on any mood button to set your current mood.
The app will update to show the selected mood and its associated image.

```
