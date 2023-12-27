import React, { useContext } from 'react';
import ThemeContext from '../Contexts/ThemeContext';

export default function AddTask() {
  const { tasklist, setTasklist } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const newTask = {
      id: date.getTime(),
      name: e.target.addTask.value,
      date: `${date.toLocaleTimeString()} | ${date.toLocaleDateString()}`,
    };
    setTasklist([...tasklist, newTask]);
    e.target.addTask.value = '';
  };
  return (
    <section className="addtask">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="inputgroup">
            <input
              type="text"
              name="addTask"
              id="addTask"
              placeholder="Add Task"
            />

            <button id="submit" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
