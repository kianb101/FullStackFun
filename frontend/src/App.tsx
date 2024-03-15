import React from 'react';
import './App.css';
import Header from './Header';
import BowlerList from './BowlerList';

function App() {
  return (
    <div className="App">
      <Header title="Bowling League Information" />
      <BowlerList />
    </div>
  );
}

export default App;
