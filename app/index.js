import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import './js/slideshow';

import 'style-loader!css-loader!./css/normalize.css';
import 'style-loader!css-loader!./css/slideshow.css';
import 'style-loader!css-loader!./css/index.css';


ReactDOM.render(
  <Home/>,
  document.getElementById('root')
);
