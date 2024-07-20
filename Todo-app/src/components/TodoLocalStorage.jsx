export const getLocalStorage = () => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
};

export const setLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};
