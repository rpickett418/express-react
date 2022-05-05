import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import React from 'react';

function App() {
  const [data, setData] = React.useState(null);

  React.useState(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
