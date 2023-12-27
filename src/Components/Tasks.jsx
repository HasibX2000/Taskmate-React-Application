import React from 'react';
import Task from './Task';

export default function Tasks() {
  const tasks = [
    {
      name: 'A',
      id: 1,
      date: '12AM , 12/12/2000',
    },
    {
      name: 'B',
      id: 2,
      date: '12AM , 12/12/2000',
    },
    {
      name: 'C',
      id: 3,
      date: '12AM , 12/12/2000',
    },
  ];
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task name={task.name} key={task.id} id={task.id} date={task.date} />
      ))}
    </div>
  );
}
