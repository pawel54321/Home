import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Router, Route, Switch /*, Link*/ } from 'react-router-dom';
import history from './history';

import Apps from './Components/Apps';
import SocialMedia from './Components/SocialMedia';
import NotFound from './Components/NotFound';

import LocalizedStrings from 'react-localization';

export let strings = new LocalizedStrings({

    gb: {
        heading_Apps: "Apps",
        button_read_more: "Read More",

        heading_SocialMedia: "Social Media",
        type_subtitle_1: "My Apps",
        type_subtitle_2: "My Channel",
        type_subtitle_3: "Other Team Projects",

        datetime:"Last update: 26/2/2019 22:41",
    },
    pl: {
        heading_Apps: "Aplikacje",
        button_read_more: "Czytaj Więcej",

        heading_SocialMedia: "Media Społecznościowe",
        type_subtitle_1: "Moje Aplikacje",
        type_subtitle_2: "Mój Kanał",
        type_subtitle_3: "Inne Projekty Zespołowe",

        datetime: "Ostatnia aktualizacja: 26.02.2019 22:41 ",
    }
});


class App extends Component {  
    /*
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }*/


    _onSetLanguagePL() {
 
        //console.log("'" + language + "'");
        strings.setLanguage('pl');
        /*
        if (this._isMounted) {
            this.setState({});
        }*/

        //this.setState({});
        history.push();
    }
    _onSetLanguageGB() {

       // console.log("'" + language + "'");
        strings.setLanguage('gb');
        /*
        if (this._isMounted) {
            this.setState({});
        }*/

       // this.setState({});
        history.push();
    }

    render() {
        return (
            <Router history={history} >
                <div className="App">
                    <Header />
                    <main>
                        {this.Ruty()}              
                    </main>
                    <Footer />
                </div>
            </Router>
        );
    }


    Ruty = () => {
        return (
            <Switch>
                <Route exact path="/" render={props =>
                    <div>
                        <Apps />
                        <SocialMedia />
                    </div>}
                    />
               

                <Route exact path="/home" render={props =>
                    <div>
                        <Apps />
                        <SocialMedia />
                    </div>}
                />

                <Route exact path="/apps" component={Apps} />
                <Route exact path="/social-media" component={SocialMedia} />

                {/* <Route exact path="/*" component={NotFound} />*/} 
                {/* (-) URL - nie moge użyć: BrowserRouter*/}
             
            </Switch>
        );
    }
}

export default App;
