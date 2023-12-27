import React from 'react';
import TodoTop from './TodoTop';
import TodoBottom from './TodoBottom';

export default function Todo() {
  return (
    <section className="todo">
      <div className="container">
        <TodoTop />
        <div className="middle">
          <hr />
        </div>
        <TodoBottom />
      </div>
    </section>
  );
}
