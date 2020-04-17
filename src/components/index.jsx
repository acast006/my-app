import React, { Component }  from 'react';
import  'react-router-dom';
import './App.css';
import './index.jsx';
import '../index.js';
import ChooseActivity from './ChooseActivity.jsx';
import MediaQuery from 'react-responsive';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();


class MainPage extends Component {

  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      topTracks: { tracks: 'Not Checked', artists: '' }
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  getTopTracks(){
    spotifyApi.getMyTopTracks()
      .then((response) => {
        this.setState({
          topTracks: {
              tracks: response.item.tracks,
              artists: response.item.artists,
            }
        });
      })
  }

  // To pull top tracks
    search(term) {
      return fetch(
        'https://api.spotify.com/v1/me/top/tracks?limit=15&time_range=medium_term',
        {
          headers: {
            Authorization: 'Bearer ${accessToken}'
          }
        }
      )
        .then(response => response.json())
        .then(jsonResponse => {
          if (!jsonResponse.tracks) {
            return [];
          }
          return jsonResponse.tracks.items.map(track => ({
            id: track.id,
            name: track.name,
            artist: track.artists[10].name,
            uri: track.uri
          }));
        });
    }




  render() {
    return (
      <React.Fragment>
      <div className="App"style={{
                  paddingTop: 160,
                  textShadow: '0 0 8px black'
              }}>
              <h1 style={{
                                paddingBottom: 45}}>NatureStream</h1>
                        <h4>Become one with your stream.</h4>
                        <p className="app-description" style={{
                                paddingRight: 50, paddingLeft: 50, paddingTop:15, paddingBottom:20, fontSize: 17,}}>Whether you're finding you're zen or you're discovering new sights.
               Music brings you closer to nature. Discover playlists to go along with your favorite outdoor activities.</p>

                        <a href='http://localhost:8888' style={{
                                padding: 10}}>

                        <button style={{
                                backgroundColor: "#1DB954",
                                border: 0,
                                padding: 10,
                                borderRadius: 10,
                                fontSize: 15,
                                fontFamily: "Poppins,sans-serif",
                                fontWeight: 500,
                                fontStyle: "normal",
                                color: "white"

                              }}>

                        <img src="./Spotify_Icon_RGB_White.png" alt="Spotify Icon" style={{
                                width: 40,
                                height: 30,
                              paddingRight: 10,}}
                                />Login with Spotify
                        </button>
                        </a>
          <div>
          Now Playing: { this.state.topTracks.tracks }
        </div>
        <div>
        Now Playing: { this.state.topTracks.artists }
        </div>
        { this.state.loggedIn &&
          <button onClick={() => this.getTopTracks()}>
            Check Top Artists
          </button>
        }
        <MediaQuery query="(max-width: 700px)">
              <div className="background" style={{backgroundColor: "red"}}>
              </div>
          </MediaQuery>
          <MediaQuery query="(min-width: 700px)">
              <div className="background" style={{containerWidth:100, containerHeight:100}}>
              <video
              autoPlay
              muted
              loop
              style={{
                position: "absolute",
                left: "50%", /* % of surrounding element */
                top: "50%",
                transform: "translate(-50%, -50%)", /* % of current element */
                zIndex: "-1",
              }}
            >
              <source src="../hikingcover.mp4" type="video/mp4" />
            </video>
              </div>
              </MediaQuery>


      </div>
      </React.Fragment>


    );
  }

}

export default MainPage;
