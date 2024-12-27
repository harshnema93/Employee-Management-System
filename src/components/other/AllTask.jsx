import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    if (!userData || userData.length === 0) {
        return <div>No employees available or failed to load user data.</div>;
    }

    return (
        <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-60">
            <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
                <h2 className="text-lg font-medium w-1/5 bg-red-600">Employee Name</h2>
                <h3 className="text-lg font-medium w-1/5 bg-red-600">New Task</h3>
                <h5 className="text-lg font-medium w-1/5 bg-red-600">Active Task</h5>
                <h5 className="text-lg font-medium w-1/5 bg-red-600">Completed</h5>
                <h5 className="text-lg font-medium w-1/5 bg-red-600">Failed</h5>
            </div>
            <div className="h-[80%] overflow-auto">
                {userData.map((employee, idx) => (
                    <div key={idx} className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
                        <h2 className="text-lg font-medium w-1/5 text-white">{employee.firstName}</h2>
                        <h3 className="text-lg font-medium w-1/5 text-blue-600">{employee.taskCounts?.newTask}</h3>
                        <h5 className="text-lg font-medium w-1/5 text-yellow-400">{employee.taskCounts?.active}</h5>
                        <h5 className="text-lg font-medium w-1/5 text-white">{employee.taskCounts?.completed}</h5>
                        <h5 className="text-lg font-medium w-1/5 text-red-600">{employee.taskCounts?.failed}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTask;
