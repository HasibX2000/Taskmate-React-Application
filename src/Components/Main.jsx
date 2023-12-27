import React, { useState } from 'react';
import AddTask from './AddTask';
import Todo from './Todo';
import ThemeContext from '../Contexts/ThemeContext';

export default function Main() {
  const [tasklist, setTasklist] = useState([
    {
      name: 'A',
      id: 1,
      date: '12AM , 12/12/2000',
    },
    {
      name: 'B',
      id: 2,
      date: '12AM , 12/12/2000',
    },
    {
      name: 'C',
      id: 3,
      date: '12AM , 12/12/2000',
    },
  ]);
  return (
    <ThemeContext.Provider value={{ tasklist, setTasklist }}>
      <main>
        <AddTask />
        <Todo />
      </main>
    </ThemeContext.Provider>
  );
}
