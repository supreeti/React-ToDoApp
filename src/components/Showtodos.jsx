import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const Display = ({ todoProps, setTodos, delTodo }) => (
  <ul className="listDisplay">
    {todoProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        setTodos={setTodos}
        delTodo={delTodo}
      />
    ))}
  </ul>
);

Display.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todoProps: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  itemProp: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default Display;
