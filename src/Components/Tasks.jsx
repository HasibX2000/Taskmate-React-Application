import React, { useContext } from 'react';
import Task from './Task';
import ThemeContext from '../Contexts/ThemeContext';

export default function Tasks() {
  const { tasklist, setTasklist } = useContext(ThemeContext);

  return (
    <div className="tasks">
      {tasklist.map((task) => (
        <Task name={task.name} key={task.id} id={task.id} date={task.date} />
      ))}
    </div>
  );
}
