//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './components/App.css';
import App from './components/App.js';
import NotFoundPage from './components/404.jsx'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';



const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
