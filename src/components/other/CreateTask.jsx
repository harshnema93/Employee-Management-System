import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { setLocalStorage, getLocalStorage } from '../../utils/localStorage';

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [category, setCategory] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [error, setError] = useState('');

    // Validate inputs
    const validateForm = () => {
        if (!taskTitle || !taskDescription || !taskDate || !employeeId) {
            setError("All fields are required!");
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = () => {
        if (!validateForm()) return;
    
        const employees = [...userData];
    
        
        const employeeIndex = employees.findIndex(emp => emp.id === parseInt(employeeId));
        if (employeeIndex === -1) {
            setError("Employee not found!");
            return;
        }
    
        
        const newTask = {
            id: employees[employeeIndex].tasks.length + 1,
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle,
            taskDescription,
            taskDate,
            category: category || "General",
        };
    
        
        employees[employeeIndex].tasks.push(newTask);
    
        employees[employeeIndex].taskCounts.newTask += 1;
    
        setUserData(employees);
    
        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('');
        setCategory('');
        setEmployeeId('');
    };
    

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-10">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Create New Task</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}

            <form className="space-y-4">
                <div>
                    <label className="block text-gray-600 mb-2">Employee ID:</label>
                    <input
                        type="number"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Enter Employee ID"
                    />
                </div>

                <div>
                    <label className="block text-gray-600 mb-2">Task Title:</label>
                    <input
                        type="text"
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Enter Task Title"
                    />
                </div>

                <div>
                    <label className="block text-gray-600 mb-2">Task Description:</label>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Enter Task Description"
                        rows="4"
                    ></textarea>
                </div>

                <div>
                    <label className="block text-gray-600 mb-2">Task Date:</label>
                    <input
                        type="date"
                        value={taskDate}
                        onChange={(e) => setTaskDate(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-gray-600 mb-2">Category:</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Enter Task Category"
                    />
                </div>

                <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Create Task
                </button>
            </form>
        </div>
    );
};

export default CreateTask;
