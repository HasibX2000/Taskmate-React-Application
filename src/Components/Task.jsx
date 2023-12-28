import React, { useContext } from 'react';
import editButton from '../assets/edit.png';
import deleteButton from '../assets/delete.png';
import ThemeContext from '../Contexts/ThemeContext';

export default function Task({ id, name, date }) {
  const { tasklist, setTasklist } = useContext(ThemeContext);
  //  TODO Handle Delete
  const handleDelete = () => {
    const updateTasklist = tasklist.filter((item) => item.id !== id);
    setTasklist(updateTasklist);
  };

  return (
    <div className="task" id={id}>
      <div className="left">
        <h3 className="taskname">{name}</h3>
        <p className="date">{date}</p>
      </div>
      <div className="right">
        <img
          className="icon"
          onClick={handleDelete}
          src={deleteButton}
          alt="delete"
        />
      </div>
    </div>
  );
}
