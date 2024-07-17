import React from 'react';

function TodoForm({ formData, handleChange, handleSubmit }) {
    return (
        <div className='col-4'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task</label>
                <input type="text"
                    id="task"
                    value={formData.task}
                    onChange={handleChange}
                    className='form-control'/>
                <br/>
                <label htmlFor="description">Description</label>
                <input type="text"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    className='form-control'/>
                <br/>
                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
}

export default TodoForm;

