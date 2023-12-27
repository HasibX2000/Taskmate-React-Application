import React from 'react';

export default function TodoTop() {
  return (
    <div className="top">
      <div className="left">
        Todo <span>0</span>
      </div>
      <div className="right">
        <button>Clear All</button>
      </div>
    </div>
  );
}
