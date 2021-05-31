import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-styles.scss';

//import Home from './templates/Home';
//import Calc from './templates/Calc';
//import Search from './templates/Search';
//import SearchHook from './templates/SearchHook';

import ImcCalc from './templates/ImcCalc';

ReactDOM.render(
  <React.StrictMode>
    <ImcCalc />
  </React.StrictMode>,
  document.getElementById('root'),
);
