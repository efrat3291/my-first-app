import { useState } from "react";


export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if (input.trim() !== '') {
            setTasks([...tasks, input]);
            setInput('');
        }
    };

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-container">
            <h2> ToDo List</h2>
            <div className="todo-input">
                <input
                    type="text"
                    placeholder="Enter Task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul className="todo-list">
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task} <button onClick={() => removeTask(index)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}