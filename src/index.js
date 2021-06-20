import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-styles.scss';

//import Home from './templates/Home';
//import Calc from './templates/Calc';
//import Search from './templates/Search';
//import SearchHook from './templates/SearchHook';
//import ImcCalc from './templates/ImcCalc';
//import Countries from './templates/Countries';
import GameList from './templates/GameList';

ReactDOM.render(
  <React.StrictMode>
    <GameList />
  </React.StrictMode>,
  document.getElementById('root'),
);
