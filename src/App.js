import React from 'react';
import UserList from './components/UserList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Organization Users</h1>
        <p>Click any user to view more details</p>
      </header>
      <main>
        <UserList />
      </main>
    </div>
  );
}

export default App;