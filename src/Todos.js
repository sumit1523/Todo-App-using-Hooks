import React, {useState} from 'react';

function Todo({todo, index, completeTodo, removeTodo, undoTodo}) {
    return (
        <div style={{textDecoration: todo.isCompleted ? 'line-through': ''}}>
            {todo.text}
            <div>
                {!todo.isCompleted && <button onClick = {() => completeTodo(index)}>Complete</button>}
                {todo.isCompleted && <button onClick = {() => undoTodo(index)}>Undo</button>}
                <button onClick = {() => removeTodo(index)}>x</button>
            </div>
        </div>
    )
}

function TodoForm ({addTodo}) {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    }
    
    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" placeholder="Add Todo..." value = {value} onChange = {e => setValue(e.target.value)}/>
        </form>
    )
}

function Todos() {
    const [todos, setTodos] = useState([
        {
            text: 'Learn about React',
            isCompleted: false
        },
        {
            text: 'Learn about JavaScript',
            isCompleted: false
        },
        {
            text: 'Learn about JEST',
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const undoTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = false;
        setTodos(newTodos);
    }

    return (
        <div>
            {todos.map((todo, index) => (
                <Todo 
                    key={index} 
                    index={index} 
                    todo={todo} 
                    completeTodo={completeTodo} 
                    removeTodo={removeTodo}
                    undoTodo={undoTodo}
                />
            ))}
            <TodoForm addTodo={addTodo}/>
        </div>
    )
}

export default Todos;