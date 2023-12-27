import React from 'react';
import TodoTop from './TodoTop';
import TodoBottom from './TodoBottom';

export default function Todo() {
  return (
    <section class="todo">
      <div class="container">
        <TodoTop />
        <div class="middle">
          <hr />
        </div>
        <TodoBottom />
      </div>
    </section>
  );
}
