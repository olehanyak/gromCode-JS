import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector('.task-input');

    const text = taskTitleInputElem.value;

    if (!text) {
        return;
    }
    taskTitleInputElem.value = '';
    const taskList = getItem('taskList') || [];

    const newTasksList = taskList.concat({
        text,
        done: false,
        startEvent: new Date().toISOString(),
        endEvent: new Date(),
    });

    setItem('tasksList', newTasksList);

    renderTasks();
};