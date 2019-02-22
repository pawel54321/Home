import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Router, Route, /*Link*/ } from 'react-router-dom';
import history from './history';

import Apps from './Components/Apps';
import SocialMedia from './Components/SocialMedia';

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="App">
                    <Header />
                    <main>
                        {this.Ruty()}
                    </main>
                </div>
            </Router>
        );
    }


    Ruty = () => {
        return (
            <div>
                <Route exact path="/home" component={Apps} />
                <Route exact path="/home" component={SocialMedia} />

                <Route exact path="/apps" component={Apps} />
                <Route exact path="/social-media" component={SocialMedia} />
            </div>
        );
    }
}

export default App;
