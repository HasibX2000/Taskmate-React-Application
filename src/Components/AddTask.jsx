import React from 'react';

export default function AddTask() {
  return (
    <section class="addtask">
      <div class="container">
        <form>
          <div class="inputgroup">
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
