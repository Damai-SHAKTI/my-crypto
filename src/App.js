import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import MainCard from './components/MainCard';

const THEMES = [ //All Themes Here
  {
      id: 1,
      color: 'light'
  },
  {
      id: 2,
      color: 'dark'
  },
  {
      id: 3,
      color: 'blue'
  }
]

const Algorithms = [ //All Encoding/Algorithms Here
  {
    id: 1,
    name: 'base64'
  },
  {
    id: 2,
    name: 'md5'
  },
  {
    id: 3,
    name: 'sha1'
  },
  {
    id: 4,
    name: 'sha256'
  },
  {
    id: 5,
    name: 'aes'
  },
  {
    id: 6,
    name: 'des'
  },
  {
    id: 7,
    name: 'rabbit'
  }
]

function App() {

  const [theme, setTheme] = useState(THEMES[1].color) //Theme State
  const [algorithm, setAlgorithm] = useState(Algorithms[0].name)
  document.body.style.backgroundColor = (theme === THEMES[1].color || theme === THEMES[2].color ) ? '#161a1d' : 'white'

  return (
    <>
    <Header Title="My Crypto" Themes={THEMES} dropDownBtnText={theme} getTheme={theme} setTheme={setTheme} />
    <MainCard getTheme={theme} Themes={THEMES} Algorithms={Algorithms} getAlgorithm={algorithm} setAlgorithm={setAlgorithm} />
    </>
  );
}

export default App;
