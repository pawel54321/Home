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

import Darkmode from 'darkmode-js';

export let strings = new LocalizedStrings({

    gb: {
        /*
        description_Home: "Home - Portfolio.",
        description_Apps: "Apps - Portfolio.",
        description_SocialMedia: "Social Media Page - Portfolio.",
        */
        spiders1: "Oculus Support - move contoller to fight and tracking",
        spiders2: "Cardboard Support - automatic camera fight and tracking",
        spiders3: "I created the prototype 'game' in only one day (6h-12h)",

        heading_Home: "Home",

        heading_Apps: "Apps",
        button_read_more: "Read More",

        button_play: "Play Now!",
        button_google_play: "Go to Google Play",
        button_github: "Go to GitHub",

        heading_SocialMedia: "Social Media",
        type_subtitle_1: "My Apps",
        type_subtitle_2: "My Channel",
        type_subtitle_3: "Other Team Projects",

        subtitle_NotFound: "The page with the given URL does not exist.",

        datetime:"Last update: 01/03/2020 00:20",
    },
    pl: {
        /*
        description_Home: "Strona Główna - Portfolio.",
        description_Apps: "Aplikacje - Portfolio.",
        description_SocialMedia: "Strona Mediów Społecznościowych - Portfolio.",
        */
        spiders1: "Wsparcie dla Oculus'a - poruszaj kontrolerem, aby walczyć i śledź wzrokiem otoczenie",
        spiders2: "Wsparcie dla Cardboard'a - automatyczna walka przy pomocy kamery, która również służy do rozglądania",
        spiders3: "Stworzyłem prototyp 'grę' w zaledwie jeden dzień (6h-12h)",

        heading_Home: "Strona Główna",

        heading_Apps: "Aplikacje",
        button_read_more: "Czytaj Więcej",

        button_play: "Zagraj Teraz!",
        button_google_play: "Przejdź do Google Play",
        button_github: "Przejdź do GitHub",

        heading_SocialMedia: "Media Społecznościowe",
        type_subtitle_1: "Moje Aplikacje",
        type_subtitle_2: "Mój Kanał",
        type_subtitle_3: "Inne Projekty Zespołowe",

        subtitle_NotFound: "Strona o podanym adresie URL nie istnieje.",

        datetime: "Ostatnia aktualizacja: 01.03.2020 00:20",
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
        var options = {
            bottom: '64px', // default: '32px'
           // right: 'unset', // default: '32px'
          //  left: '32px', // default: 'unset'
            time: '0.5s', // default: '0.3s'
            mixColor: '#fff', // default: '#fff'
            backgroundColor: '#fff',  // default: '#fff'
            buttonColorDark: '#100f2c',  // default: '#100f2c'
            buttonColorLight: '#fff', // default: '#fff'
            saveInCookies: true, // default: true,
            label: '🌓', // default: ''
            autoMatchOsTheme: true, // default: true
        }

        const darkmode = new Darkmode(options);
        darkmode.showWidget();
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
