import React from 'react';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="brand">
          <img src={logo} alt="logo" />
          <h4>Taskmate React Application</h4>
        </div>
      </div>
    </header>
  );
}
