import React from 'react';

export const TodoItem = (props) => {
  return (
    <li>
      <input type="checkbox"
        checked={props.isComplete}
        onChange={() => props.handleToggle(props.id)}
      />
      {props.name}
    </li>
  );
};

TodoItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired,
  handleToggle: React.PropTypes.func.isRequired,
};
