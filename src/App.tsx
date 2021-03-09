import React from 'react';
import './App.css';


import NavVar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Diary from './components/About/About';

function App():React.ReactElement {
  return (
    <div className="App">
      <NavVar />
      <Home />
      <Projects />
      <Diary />
    </div>
  );
}

export default App;
