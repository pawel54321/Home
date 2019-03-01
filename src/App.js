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
        heading_Apps: "Apps",
        button_read_more: "Read More",

        heading_SocialMedia: "Social Media",
        type_subtitle_1: "My Apps",
        type_subtitle_2: "My Channel",
        type_subtitle_3: "Other Team Projects",

        subtitle_NotFound: "The page with the given URL does not exist.",

        datetime:"Last update: 1/3/2019 01:20",
    },
    pl: {
        heading_Apps: "Aplikacje",
        button_read_more: "Czytaj Więcej",

        heading_SocialMedia: "Media Społecznościowe",
        type_subtitle_1: "Moje Aplikacje",
        type_subtitle_2: "Mój Kanał",
        type_subtitle_3: "Inne Projekty Zespołowe",

        subtitle_NotFound: "Strona o podanym adresie URL nie istnieje.",

        datetime: "Ostatnia aktualizacja: 1.03.2019 01:20",
    }
});


class App extends Component {  
    
    _onSetLanguagePL() {
 
        //console.log("'" + language + "'");
        strings.setLanguage('pl'); 
      //  history.push();
     
    }
    _onSetLanguageGB() {

       //console.log("'" + language + "'");
        strings.setLanguage('gb');
        // history.push();
       
    }

    render() {
        return (
                <HashRouter>     
                    <div className="App">
                        <Header />
                            <main>
                                {this.Routy()}              
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
               

                <Route exact path="/home" render={props =>
                    <div>
                        <Apps />
                        <SocialMedia />
                    </div>}
                />

                <Route exact path="/apps" component={Apps} />
                <Route exact path="/social-media" component={SocialMedia} />

                <Route exact path="/*" component={NotFound} /> 

                {/* '#' w URL + Spolszczenie */}
                {/* Zmienić czcionka dla stopki i platform*/}
                {/* Trzy fotki w galerii - "kropki" do zmieniania*/}
            </Switch>
        );
    }
}

export default App;
