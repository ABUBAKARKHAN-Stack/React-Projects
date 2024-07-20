import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const TodoItem = ({ task, handleCheckButton, handleRemoveTodo }) => {
    const [icon, setIcon] = useState(task.checked ? 'checkBtnClick' : 'check-Btn');

    // Update the icon when task.checked changes
    useEffect(() => {
        setIcon(task.checked ? 'checkBtnClick' : 'check-Btn');
    }, [task.checked]);

    const handleCheckIcon = () => {
        handleCheckButton(task.content);
    };

    return (
        <>
            <li className="sm:w-[70vw] w-[90vw] Todo-List italic h-16 px-4 bg-[#00000090] rounded-lg flex justify-between items-center mt-5">
              <div className='grid  mt-3'>
                    <p className={` mt-2 text-[#fff] md:text-[18px] sm:text-sm todo-text font-semibold uppercase ${task.checked ? 'checkedList' : 'notCheckedList'}`}>
                        {task.content}
                    </p>
                    <p className='sm:text-xs text-[9px] mt-1'>{task.timestamp}</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <button className="outline-none" onClick={handleCheckIcon}>
                        <FaCheckCircle
                            className={`sm:text-3xl text-xl text-green-400 transition-all duration-700 hover:text-green-600 ${icon}`}
                        />
                    </button>
                    <button className="outline-none" onClick={() => handleRemoveTodo(task)}>
                        <MdDeleteForever className="del-Btn sm:text-4xl text-2xl text-red-500 transition-all duration-700 hover:scale-[.7] hover:rotate-[360deg] hover:text-red-800" />
                    </button>
                    
                </div>
            </li>
        </>
    );
};
