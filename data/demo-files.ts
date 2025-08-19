import { GitHubNode, FileContents } from '../types';

export const DEMO_FILE_TREE: GitHubNode[] = [
  {
    path: 'home',
    type: 'tree',
    name: 'home',
    children: [
      { path: 'home/smart-light.html', type: 'blob', name: 'smart-light.html' },
      { path: 'home/smart-light.md', type: 'blob', name: 'smart-light.md' },
    ],
  },
  {
    path: 'office',
    type: 'tree',
    name: 'office',
    children: [
      { path: 'office/task-list.html', type: 'blob', name: 'task-list.html' },
      { path: 'office/task-list.md', type: 'blob', name: 'task-list.md' },
    ],
  },
  {
    path: 'internet',
    type: 'tree',
    name: 'internet',
    children: [
      { path: 'internet/api-client.js', type: 'blob', name: 'api-client.js' },
      { path: 'internet/api-usage.md', type: 'blob', name: 'api-usage.md' },
    ],
  },
];

export const DEMO_FILE_CONTENTS: FileContents = {
  'home/smart-light.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Smart Light Control</title>
    <script src="https://unpkg.com/petite-vue" defer init></script>
    <style>
        body { font-family: system-ui, sans-serif; background-color: #1a1a1a; color: #f0f0f0; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
        .light-widget { background-color: #2a2a2a; border-radius: 16px; padding: 2rem; box-shadow: 0 8px 30px rgba(0,0,0,.35); border: 1px solid rgba(255,255,255,.1); width: 300px; text-align: center; }
        .light-bulb { width: 100px; height: 100px; border-radius: 50%; margin: 0 auto 1.5rem; background-color: #444; transition: all 0.3s ease; border: 4px solid #333; }
        h2 { margin: 0 0 1rem; color: #fff; }
        p { color: #aaa; margin: 0 0 1.5rem; }
        .controls { display: flex; flex-direction: column; gap: 1rem; }
        button { background-color: #007bff; color: white; border: none; padding: 0.75rem 1rem; border-radius: 8px; font-size: 1rem; cursor: pointer; transition: background-color 0.2s; }
        button:hover { background-color: #0056b3; }
        input[type="range"] { width: 100%; }
    </style>
</head>
<body v-scope="{ isOn: false, brightness: 75, color: '#ffff00' }">
    <div class="light-widget">
        <h2>Living Room Light</h2>
        <div class="light-bulb" :style="{ backgroundColor: isOn ? color : '#444', opacity: isOn ? brightness / 100 : 1, boxShadow: isOn ? \`0 0 25px \${color}\` : 'none' }"></div>
        <p v-if="isOn">On | {{ brightness }}%</p>
        <p v-else>Off</p>
        <div class="controls">
            <button @click="isOn = !isOn">{{ isOn ? 'Turn Off' : 'Turn On' }}</button>
            <input type="range" min="10" max="100" v-model="brightness" :disabled="!isOn">
            <input type="color" v-model="color" :disabled="!isOn" style="width: 100%; height: 40px; border: none; padding: 0; background: none;">
        </div>
    </div>
</body>
</html>`,
  'home/smart-light.md': `# Smart Light Component

This HTML file demonstrates a simple "smart light" control widget using \`petite-vue\` for reactivity.

## Features

- **Toggle On/Off:** A button to turn the light on and off.
- **Brightness Control:** A range slider to adjust the light's brightness.
- **Color Picker:** A color input to change the light's color.

## How it Works

The component's state (on/off status, brightness, and color) is managed by \`petite-vue\`, a lightweight version of Vue.js.

- The \`v-scope\` attribute on the \`<body>\` tag initializes the state.
- The \`:style\` binding on the light bulb div dynamically changes its appearance based on the state.
- The \`@click\` directive on the button toggles the \`isOn\` state.
- \`v-model\` is used to bind the range slider and color picker to the \`brightness\` and \`color\` state variables.

## Potential AI Prompts

- "Add a 'disco mode' button that cycles through random colors every second."
- "Refactor this to use plain JavaScript instead of petite-vue."
- "Improve the accessibility of the form controls."`,
  'office/task-list.html': `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task List</title>
    <script src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css">
    <style>
        body { max-width: 600px; margin: 2rem auto; }
        li { display: flex; align-items: center; gap: 1rem; }
        .completed { text-decoration: line-through; color: #888; }
        input[type="text"] { width: 100%; }
        form { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; }
    </style>
</head>
<body x-data="{
    tasks: [
        { text: 'Finalize quarterly report', completed: false },
        { text: 'Schedule team meeting', completed: true },
        { text: 'Onboard new hire', completed: false }
    ],
    newTask: ''
}">
    <h1>Office Tasks</h1>

    <form @submit.prevent="if (newTask.trim()) { tasks.push({ text: newTask, completed: false }); newTask = '' }">
        <input type="text" x-model="newTask" placeholder="Add a new task...">
        <button type="submit">Add</button>
    </form>

    <ul>
        <template x-for="(task, index) in tasks" :key="index">
            <li>
                <input type="checkbox" x-model="task.completed">
                <span :class="{ 'completed': task.completed }" x-text="task.text"></span>
            </li>
        </template>
    </ul>
    <p><span x-text="tasks.filter(t => !t.completed).length"></span> tasks remaining.</p>
</body>
</html>`,
  'office/task-list.md': `# Simple Task List

This is a basic task list application built with Alpine.js for simple, declarative DOM manipulation.

## Features

- Add new tasks.
- Mark tasks as complete.
- See a count of remaining tasks.

## Tech Stack

- **Alpine.js:** Used for managing the state of the task list directly in the HTML.
- **water.css:** A classless CSS framework for simple, clean styling.

## How it Works

The main logic is contained within the \`x-data\` attribute on the \`<body>\` tag. This initializes the \`tasks\` array and a \`newTask\` string for the input field.

- \`@submit.prevent\` on the form handles adding a new task to the array.
- \`<template x-for="...">\` iterates over the \`tasks\` array to render each list item.
- \`x-model\` creates a two-way binding between the checkbox and the \`task.completed\` property.
- \`:class\` and \`x-text\` are used to dynamically update the view based on the task's state.

## Potential AI Prompts

- "Add a button to each task to delete it from the list."
- "Persist the task list to the browser's localStorage so it's not lost on refresh."
- "Add a feature to filter tasks by 'All', 'Active', and 'Completed'."`,
  'internet/api-client.js': `/**
 * A simple client for fetching data from the JSONPlaceholder API.
 * This is a fake online REST API for testing and prototyping.
 */

const API_BASE = 'https://jsonplaceholder.typicode.com';

/**
 * Fetches a list of users.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of user objects.
 */
export async function getUsers() {
    try {
        const response = await fetch(\`\${API_BASE}/users\`);
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Could not fetch users:", error);
        return [];
    }
}

/**
 * Fetches a single post by its ID.
 * @param {number} postId The ID of the post to fetch.
 * @returns {Promise<Object|null>} A promise that resolves to the post object, or null if not found.
 */
export async function getPost(postId) {
    if (!postId || typeof postId !== 'number') {
        console.error("Invalid postId provided.");
        return null;
    }
    try {
        const response = await fetch(\`\${API_BASE}/posts/\${postId}\`);
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(\`Could not fetch post \${postId}:\`, error);
        return null;
    }
}`,
  'internet/api-usage.md': `# API Client for JSONPlaceholder

The accompanying \`api-client.js\` file contains two functions for interacting with the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API.

## Functions

1.  \`getUsers()\`
    - **Purpose:** Fetches a list of 10 sample users.
    - **Returns:** A \`Promise\` that resolves to an array of user objects.
    - **Error Handling:** Catches fetch errors and logs them to the console, returning an empty array.

2.  \`getPost(postId)\`
    - **Purpose:** Fetches a single blog post by its numerical ID.
    - **Parameters:** \`postId\` (number) - The ID of the post to retrieve.
    - **Returns:** A \`Promise\` that resolves to a single post object, or \`null\` on error.
    - **Error Handling:** Includes basic validation for the \`postId\` and catches fetch errors.

## Potential AI Prompts

- "Add a new function called \`createPost\` that takes a title and body and sends a POST request to the API."
- "Refactor the error handling to throw custom error classes instead of logging to the console."
- "Write unit tests for the \`getPost\` function using Jest, mocking the \`fetch\` API."`,
};
