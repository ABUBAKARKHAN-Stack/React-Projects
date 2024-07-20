import React from 'react';
import { Navbar } from './components/Navbar';
import { Todo } from './components/Todo';
import { Footer } from './components/Footer';
import './components/Todo.css'

export const App = () => {
  return (
    <>
      <Navbar /> 
      <Todo />
      <Footer />
    </>
  );
};
