import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar position="static">
          <Toolbar variant = "dense">
            <img src="logo-worktogether.png" alt = "logo" width = "100" height = "100" />
          </Toolbar>
        </AppBar>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
