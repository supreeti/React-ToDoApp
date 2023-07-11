import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, setTodos, delTodo }) => {
  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  return (
    <div className="listItem">
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      <li>{itemProp.title}</li>
      <button onClick={() => delTodo(itemProp.id)} type="button">Delete</button>
    </div>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  setTodos: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
