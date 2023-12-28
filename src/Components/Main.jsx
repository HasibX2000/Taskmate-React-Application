import React, { useState } from 'react';
import AddTask from './AddTask';
import Todo from './Todo';
import ThemeContext from '../Contexts/ThemeContext';

export default function Main() {
  const [tasklist, setTasklist] = useState([]);
  return (
    <ThemeContext.Provider value={{ tasklist, setTasklist }}>
      <main>
        <AddTask />
        <Todo />
      </main>
    </ThemeContext.Provider>
  );
}
