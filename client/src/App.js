import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from './routes/Home';
import Saved from './routes/Saved';
import NavBar from "./components/NavBar";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class App extends Component {
  componentDidMount() {
    const socket = window.io.connect(document.location.host);

    socket.on('message', function (data) {
      NotificationManager.info(data, 'Article saved')
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />

          <div className="section">
            <div className="container">
                <Route path="/" exact component={Home} />
                <Route path="/saved/" component={Saved} />
            </div>
          </div>

          <NotificationContainer />
        </div>
      </Router>
    );
  }
}

export default App;
