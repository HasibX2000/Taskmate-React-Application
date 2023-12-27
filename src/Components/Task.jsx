import React from 'react';
import editButton from '../assets/edit.png';
import deleteButton from '../assets/delete.png';

export default function Task({ id, name, date }) {
  return (
    <div className="task" id={id}>
      <div className="left">
        <h3 className="taskname">{name}</h3>
        <p className="date">{date}</p>
      </div>
      <div className="right">
        <img className="icon" src={editButton} alt="edit" />

        <img className="icon" src={deleteButton} alt="delete" />
      </div>
    </div>
  );
}
