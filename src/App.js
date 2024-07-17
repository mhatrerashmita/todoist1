import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
    const [formData, setFormData] = useState({ task: '', description: '' });
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, { ...formData, isCompleted: false, isEditing: false }]);
        setFormData({ task: '', description: '' }); // reset form data
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const editTodo = (index, newTask, newDescription) => {
        const newTodos = [...todos];
        if (newTask !== undefined) {
            newTodos[index].task = newTask;
        }
        if (newDescription !== undefined) {
            newTodos[index].description = newDescription;
        }
        newTodos[index].isEditing = false; // close edit mode
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <TodoForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} editTodo={editTodo} />
        </div>
    );
}

export default App;
