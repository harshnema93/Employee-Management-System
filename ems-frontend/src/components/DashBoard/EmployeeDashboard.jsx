import React, { useEffect, useState, useContext } from 'react';
import Header from '../other/Header';
import TaskListNum from '../other/TaskListNum';
import TaskList from '../TaskList/TaskList';
import { AuthContext } from '../../context/AuthProvider';
import axios from 'axios';

const EmployeeDashboard = (props) => {
  const [employeeData, setEmployeeData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
     setEmployeeData(props.data);
    }, [props.data]);

  const updateTaskCounts = (updatedEmployee, countUpdates) => {
    Object.keys(countUpdates).forEach(key => {
      updatedEmployee.taskCounts[key] += countUpdates[key];
    });
    return updatedEmployee;
  };


  const updateTask = async (taskId, updateFields, countUpdates) => {
      const updatedEmployee = { ...employeeData };
      updatedEmployee.tasks = updatedEmployee.tasks.map(task =>
        task.id === taskId ? { ...task, ...updateFields } : task
      );
       updateTaskCounts(updatedEmployee, countUpdates);
        setEmployeeData(updatedEmployee);

        try{
            const response = await axios.put(`/api/employees/${updatedEmployee.id}`,updatedEmployee);
            console.log(response);
            if(response.status == 200){
                const updatedEmployees = userData.map(emp =>
                  emp.id === updatedEmployee.id ? response.data : emp
                );
                setUserData(updatedEmployees);
            }
        }catch(err){
            console.log(err)
        }
  };


  const handleAcceptTask = (taskId) => {
    updateTask(
      taskId,
      { active: true, newTask: false },
      { newTask: -1, active: 1 }
    );
  };

  const handleCompleteTask = (taskId) => {
    updateTask(
      taskId,
      { active: false, completed: true },
      { active: -1, completed: 1 }
    );
  };

  const handleFailTask = (taskId) => {
    updateTask(
      taskId,
      { active: false, failed: true },
      { active: -1, failed: 1 }
    );
  };

  if (!employeeData) {
    return <div>Loading employee data...</div>;
  }

  return (
    <div className='bg-green-200 p-10 h-screen'>
      <Header changeUser={props.changeUser} data={employeeData} />
      <TaskListNum data={employeeData} />
      <TaskList
        data={employeeData}
        handleAcceptTask={handleAcceptTask}
        handleCompleteTask={handleCompleteTask}
        handleFailTask={handleFailTask}
      />
    </div>
  );
};

export default EmployeeDashboard;