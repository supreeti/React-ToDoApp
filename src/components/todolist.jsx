import React from 'react';
import Header from './Header';
import TodosLogic from './TodosLogic';
// import InputField from './input';
// import ListSection from './listSection';

const Todolist = () => (
  <div className="App">
    <Header />
    <TodosLogic />
    {/* <Addtodo />
    <ListSection /> */}
  </div>
);

export default Todolist;
