import React from 'react';
import { TodoItem } from './TodoItem';


export const TodoList = ({ tasks, handleCheckButton, handleRemoveTodo }) => {
    return (<>
        <ul className=" flex justify-start items-center flex-col">
            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    handleCheckButton={handleCheckButton}
                    handleRemoveTodo={handleRemoveTodo}
                />
            ))}
        </ul>
    </>
    );
};
