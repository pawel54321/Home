import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { /*BrowserRouter, Router,*/ Route, Switch, HashRouter  /*, Link*/ } from 'react-router-dom';
//import history from './history';

import Apps from './Components/Apps';
import SocialMedia from './Components/SocialMedia';
import NotFound from './Components/NotFound';

import LocalizedStrings from 'react-localization';

export let strings = new LocalizedStrings({

    gb: {
        /*
        description_Home: "Home - Portfolio.",
        description_Apps: "Apps - Portfolio.",
        description_SocialMedia: "Social Media Page - Portfolio.",
        */

        heading_Home: "Home",

        heading_Apps: "Apps",
        button_read_more: "Read More",

        heading_SocialMedia: "Social Media",
        type_subtitle_1: "My Apps",
        type_subtitle_2: "My Channel",
        type_subtitle_3: "Other Team Projects",

        subtitle_NotFound: "The page with the given URL does not exist.",

        datetime:"Last update: 12/6/2019 22:24",
    },
    pl: {
        /*
        description_Home: "Strona Główna - Portfolio.",
        description_Apps: "Aplikacje - Portfolio.",
        description_SocialMedia: "Strona Mediów Społecznościowych - Portfolio.",
        */

        heading_Home: "Strona Główna",

        heading_Apps: "Aplikacje",
        button_read_more: "Czytaj Więcej",

        heading_SocialMedia: "Media Społecznościowe",
        type_subtitle_1: "Moje Aplikacje",
        type_subtitle_2: "Mój Kanał",
        type_subtitle_3: "Inne Projekty Zespołowe",

        subtitle_NotFound: "Strona o podanym adresie URL nie istnieje.",

        datetime: "Ostatnia aktualizacja: 12.06.2019 22:24",
    }
});


class App extends Component {

    _onSetLanguageGB() {

        //console.log("'" + language + "'");
        //strings.setLanguage('gb');
        //history.push();

        if (strings.getLanguage() !== 'gb') {
            localStorage.setItem('language', 'gb');
             window.location.reload();
        }
    }
    _onSetLanguagePL() {

        //console.log("'" + language + "'");
        //strings.setLanguage('pl');
        //history.push();

        if (strings.getLanguage() !== 'pl') {
            localStorage.setItem('language', 'pl');
            window.location.reload();
        }
    }

    Language = () => {


        if (localStorage.getItem('language') === 'pl') {
            strings.setLanguage('pl');
        }

        else {
            strings.setLanguage('gb');
        }

    }

    render() {
        return (
            <HashRouter>
                <div className="App">
                    <Header />
                    <main>
                        {this.Routy()}
                        {this.Language()}
                    </main>
                    <Footer />
                </div>
            </HashRouter >
        );
    }

    Routy = () => {
        return (
            <Switch>
                <Route exact path="/" render={props =>
                    <div>
                        <Apps />
                        <SocialMedia />
                    </div>}
                />
                <Route exact path="/apps" component={Apps} />
                <Route exact path="/social-media" component={SocialMedia} />

                <Route exact path="/*" component={NotFound} />

                {/* Data ostatniej aktualizacji - aplikacje */}
            </Switch>
        );
    }

}
export default App;
