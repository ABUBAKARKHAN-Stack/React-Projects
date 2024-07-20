import React from 'react';

export const TodoHeader = ({ datetime }) => {
    return (
        <header className="w-full flex flex-col flex-wrap justify-center items-center gap-2">
            <h1 className="sm:text-5xl text-4xl font-bold text-center ">Todo List</h1>
            <div className="font-extrabold font-[Arial] sm:text-2xl text-xl text-wrap text-center px-4 date-display">{datetime}</div>
        </header>
    );
};
