import React, { Component }  from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css';
import '../index.js';
import MainPage from './index.jsx';
import ChooseActivity from './ChooseActivity.jsx';
import NotFoundPage from './404.jsx';
import MediaQuery from 'react-responsive';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();



class App extends Component {
  render() {
    return (
      <>
      <MainPage></MainPage>
      <ChooseActivity></ChooseActivity>
      </>
  );
  }


}

export default App;
