import React, { useState } from "react";
import TodoListForm from "./TodoListForm";
import TodoListItems from "./TodoListItems"
// import '../App';

function TodoListApp() {


    // ItemToAdd will be used as the value on the input field
    const [itemToAdd, setItemText] = useState('');
    const [todos, setTodos] = useState([]);
    console.log(todos);

    // this step allows user to add a new item and clear the entry value after it is alerted or added to the page
    const addItem = (event) => {
        event.preventDefault();
        setTodos([...todos, itemToAdd]);
        // window.alert(ItemToAdd);

        // this next set sets the input value back to an empty string so another can be added
        setItemText('');
    }

    return (
        <div>
            {/* add the values defined above as props */}
            <TodoListForm
                itemToAdd={itemToAdd}
                addItem={addItem}
                setItemText={setItemText}
            />
            <TodoListItems
                todos={todos} 
            />

        </div>
    )

}

export default TodoListApp