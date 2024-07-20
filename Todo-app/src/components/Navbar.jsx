import React from 'react';
import { Link } from 'react-scroll';

export const Navbar = () => {
    return (
        <nav className=" min-h-[100px] w-full bg-[#00000070] text-white backdrop-filter backdrop-blur-lg flex justify-between items-center sm:px-20 px-4">
            <h1 className="Logo-text text-start cursor-pointer sm:text-[40px] text-3xl font-bold tracking-widest">
                ToDoMaster
            </h1>
            <div className="space-x-6">
                <span className='cursor-pointer sm:text-xl text-sm'>
                    <Link 
                        to="todo-section" 
                        className="link-text hover:text-gray-300 transition-colors duration-300"
                        smooth={true}
                        duration={800}
                    >
                        Your-Tasks
                    </Link>
                </span>
            </div>
        </nav>
    );
};
