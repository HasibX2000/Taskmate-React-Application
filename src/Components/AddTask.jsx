import React from 'react';

export default function AddTask() {
  return (
    <section className="addtask">
      <div className="container">
        <form>
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
