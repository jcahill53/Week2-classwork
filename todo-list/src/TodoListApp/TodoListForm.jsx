import React from "react";



function TodoListForm({itemToAdd, setItemText, addItem}) {



    // console.log(setItemToAdd)
    // const updateInput = (e) => setItemText(e.target.value)


    return (
        <div>
            <form onSubmit={addItem}>
                <label htmlFor="todo-input">  Add a new todo item:  </label>
                <input
                    id="todo-input"
                    value={itemToAdd}
                    onChange={event => setItemText(event.target.value)}
                />
                <button type="submit">Add</button>

            </form>

        </div>
    )

}

export default TodoListForm