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
      summary: '챌린지에 특화된 소셜 네트워크 서비스',
      imgUrl: 'Tailor.png',
      repoUrl: 'https://github.com/wonjun9090/Tailor',
      date: {start: '2020년 7월 20일', end: '2020년 8월 21일'},
      icons: [
        'node.png',
        'javascript.png',
        'react.png',
        'graphql.png',
        'apollo.png',
        'prisma.png',
        'styledComponents.png',
      ],
      text: 'Tailor 설명',
    },
    {
      title: 'UWantBeer',
      summary: '맥주를 추천해주는 맥주 커뮤니티',
      imgUrl: 'UWantBeer.jpg',
      repoUrl: 'https://github.com/wonjun9090/UWantBeer',
      date: {start: '2020년 9월 7일', end: '2020년 10월 8일'},
      icons: [
        'drf.png',
        'javascript.png',
        'vue.png',
        'docker.png',
        'mariaDB.png',
        'firebase.png',
        'sass.png',
      ],
      text: 'UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer UWantBeer vvvvv설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명UWantBeer 설명',
    },
    {
      title: 'FaceOFF',
      summary: '초상권 침해를 방지하기 위한 웹 애플리케이션',
      imgUrl: 'FaceOFF.png',
      repoUrl: 'https://github.com/wonjun9090/FaceOFF',
      date: {start: '2020년 10월 12일', end: '2020년 11월 16일'},
      icons: [
        'python.png',
        'drf.png',
        'typescript.png',
        'react.png',
        'docker.png',
        'mariaDB.png',
        'sass.png',
      ],
      text: 'FaceOFF 설명',
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
