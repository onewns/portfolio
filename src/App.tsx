import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';


import NavVar from './components/NavBar/NavBar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Home from './components/Home/Home';


const state = {
  projects: [
    {
      title: 'Tailor',
      text: 'Tailor 설명',
      imgUrl: 'Tailor.png'
    },
    {
      title: 'UWantBeer',
      text: 'UWantBeer 설명',
      imgUrl: 'UWantBeer.jpg'
    },
    {
      title: 'FaceOFF',
      text: 'FaceOFF 설명',
      imgUrl: 'FaceOFF.png'
    },
  ]
}



function App():React.ReactElement {
  return (
    <div className="App">
        <NavVar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects state={state}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
