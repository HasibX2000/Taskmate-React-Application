import React, { useContext } from 'react';
import ThemeContext from '../Contexts/ThemeContext';

export default function TodoTop() {
  const { tasklist, setTasklist } = useContext(ThemeContext);

  const deleteAllHandle = () => {
    const blanktask = [];
    setTasklist(blanktask);
  };

  return (
    <div className="top">
      <div className="left">
        Todo <span className="taskCount">{tasklist.length}</span>
      </div>
      <div className="right">
        <button onClick={deleteAllHandle}>Clear All</button>
      </div>
    </div>
  );
}
