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
      text: ` 릴레이 기능을 추가한 챌린지특화 sns서비스 입니다. REST api 대신 graphQL을 사용해서 개발했으며 frontend를 맡아 게시물의 업로드 기능과 상태에 따른 화면 구성 및 스타일링을 맡아 개발했습니다.`,
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
      text: ` 사용자의 리뷰 정보를 바탕으로 맥주를 추천해주는 맥주 커뮤니티입니다. python의 pandas 라이브러리와 surprise 라이브러리의 svd 모델을 이용하여 추천시스템을 구현했습니다.`,
    },
    {
      title: 'FaceOFF',
      summary: '초상권 침해를 방지하기 위한 웹 앱',
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
      text: ` 자동으로 인식된 얼굴로 간편한 모자이크 설정이 가능한 웹 앱입니다. frontend를 맡아 모자이크 대상 선택, 친구 관리, 모자이크 옵션 중 픽셀, 블러, 가상얼굴 변환 기능을 맡았습니다.`,
    },
  ] 
}



function App():React.ReactElement {
  return (
    <div className="App">
      <NavVar />
      <Switch>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/projects" exact>
          <Projects state={state}/>
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
