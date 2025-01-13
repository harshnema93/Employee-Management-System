import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data, handleAcceptTask, handleCompleteTask, handleFailTask }) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
      {data.tasks.filter(task => !task.completed && !task.failed).map((ele, idx) => {
        if (ele.newTask) {
          return <NewTask key={idx} data={ele} handleAcceptTask={handleAcceptTask} />;
        }
        if (ele.active) {
          return <AcceptTask key={idx} data={ele} handleCompleteTask={handleCompleteTask} handleFailTask={handleFailTask} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;