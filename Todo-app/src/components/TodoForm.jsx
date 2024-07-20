import React from 'react';

export const TodoForm = ({ inputData, handleInputChange, handleFormSubmit }) => {
    return (
        <form onSubmit={handleFormSubmit} className="w-full flex justify-center items-center flex-col gap-6 ">
            <div className="w-full sm:flex sm:gap-0 grid gap-6 place-content-center place-items-center">
                <input
                placeholder="Enter Task"
                    type="text"
                    value={inputData.content}
                    onChange={(e) => handleInputChange(e.target.value)}
                    className="Input-Task h-11 sm:w-[22rem] w-[80vw] px-4 outline-none sm:rounded-s-[15px] sm:rounded-none rounded-[8px] text-black"
                />
                <button className="h-11  px-4 font-[400] text-[17px] bg-[#5dade2] sm:rounded-e-[15px] sm:rounded-none rounded-[8px] outline-none transition-color duration-500 hover:bg-[#f1c40f] hover:cursor-pointer">
                    Add Task
                </button>
            </div>
        </form>
    );
};
