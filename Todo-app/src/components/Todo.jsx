import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoHeader } from './TodoHeader';
import { getLocalStorage, setLocalStorage } from './TodoLocalStorage';

export const Todo = () => {
    const [inputData, setInputData] = useState({ id: '', content: "", checked: false, timestamp: '', firstvisit: '' });
    const [tasks, setTasks] = useState(() => getLocalStorage());
    const [datetime, setDateTime] = useState("");
    const [firstvisit, setFirstVisit] = useState(() => !localStorage.getItem('hasVisited' , 'true'))
  
   
    const handleInputChange = (value) => {
        setInputData({ id: value, content: value, checked: false, timestamp: '', firstvisit: '' });
        setFirstVisit(false)
    };
    localStorage.setItem('hasVisited' , 'true')
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { id, content, checked } = inputData;
        if (!content) return;
        const todoMatch = tasks.find((currTask) => currTask.content === content);
        if (todoMatch) return;
        const timestamp = new Date().toLocaleString()
        setTasks((prevTasks) => [...prevTasks, { id, content, checked, timestamp }]);
        setInputData({ id: '', content: '', checked: false, timestamp: '' });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const displayDate = now.toLocaleDateString();
            const displayTime = now.toLocaleTimeString();
            setDateTime(`${displayDate} - ${displayTime}`);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleRemoveTodo = (task) => {
        const updatedArray = tasks.filter((currTask) => currTask !== task);
        setTasks(updatedArray);
    };

    const handleClearButton = () => {
        setTasks([]);
        setInputData({ id: '', content: '', checked: false, timestamp: '' });
    };

    const handleCheckButton = (content) => {
        const updatedTasks = tasks.map((currTask) => {
            if (currTask.content === content) {
                return { ...currTask, checked: !currTask.checked };
            } else {
                return currTask;
            }
        });
        setTasks(updatedTasks);
    };

    useEffect(() => {
        setLocalStorage(tasks);
    }, [tasks]);

    return (
        <section className="w-[90%] h-auto mx-auto text-white flex flex-col justify-center items-center  gap-4 mt-20 ">
            <TodoHeader datetime={datetime} />
            <TodoForm inputData={inputData} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
            <Element name="todo-section">
                {firstvisit  &&
                    <li className="welcome sm:w-[70vw] w-[95vw]   h-16 px-4 bg-[#00000090] rounded-lg flex justify-center items-center mt-5">
                        <p className={` text-[#fff] md:text-2xl sm:text-xl font-semibold uppercase text-center`}>Welcome! Please add your first todo task.</p>
                    </li>
                    }

                <TodoList tasks={tasks} handleCheckButton={handleCheckButton} handleRemoveTodo={handleRemoveTodo} />
            </Element>
            <button
                onClick={handleClearButton}
                className="bg-[#e74c3c] outline-none transition-colors duration-500 hover:bg-[#8d1407] px-6 py-2 rounded w-fit text-white font-semibold uppercase"
                type="button">
                Clear all
            </button>
        </section>
    );
};``
