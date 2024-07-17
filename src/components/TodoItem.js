import React, { useState } from 'react';

function TodoItem({ todo, index, toggleTodo, removeTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(todo.task);
    const [newDescription, setNewDescription] = useState(todo.description);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        editTodo(index, newTask, newDescription);
        setIsEditing(false);
    };

    return (
        <div className="todo-item" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <input
                        type="text"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    <span>{todo.task}</span>
                    <span>{todo.description}</span>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={() => toggleTodo(index)}>Complete</button>
                    <button onClick={() => removeTodo(index)}>Remove</button>
                </>
            )}
        </div>
    );
}

export default TodoItem;
