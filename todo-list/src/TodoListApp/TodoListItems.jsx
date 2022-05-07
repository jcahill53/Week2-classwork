import React from "react";
import PropTypes from 'prop-types';


function TodoListItems({ todos }) {
    const items = todos.map((todo, index) => <li key={index}>{todo}</li>)
    return (
        <div>
            <h1>Todo List:</h1>
            <ul>
                {items}
            </ul>
        </div>

    )

}

TodoListItems.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default TodoListItems