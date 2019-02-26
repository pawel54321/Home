import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, NavbarToggler, 
    Collapse, Nav, NavItem, NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';

import App, { strings } from '../App';

import ReactFlagsSelect from 'react-flags-select';
//import css module
import 'react-flags-select/css/react-flags-select.css'

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    onSelectFlag(countryCode) {

        //console.log(countryCode.toLowerCase());
        //strings.setLanguage(countryCode.toLowerCase());
        //App._onSetLanguage(countryCode.toLowerCase());
        if (countryCode.toLowerCase() === 'pl') {
          
            new App()._onSetLanguagePL();
        }
        else if (countryCode.toLowerCase() === 'gb') {
           
            new App()._onSetLanguageGB();
        }


    }



    render() {
        return (
            <nav>
                <header className="App-header">
                    <Navbar color="light" light expand="md">
                        <NavbarBrand><Link to="/home"><i className="fa fa-home" style={{ fontSize: '50px', color: 'light' }} /></Link></NavbarBrand>

                        <NavbarToggler onClick={this.toggle} />

                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink><Link to="/apps">{strings.heading_Apps}</Link></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink><Link to="/social-media">{strings.heading_SocialMedia}</Link></NavLink>
                                </NavItem>
                                <NavItem>
                                    <ReactFlagsSelect
                                        countries={["GB", "PL"]}
                                        defaultCountry={strings.getLanguage().toUpperCase()}
                                        showSelectedLabel={false}
                                        showOptionLabel={false}
                                        selectedSize={18}
                                        optionsSize={14}
                                        onSelect={this.onSelectFlag}/>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </header>
            </nav>
        );
    }
}
export default Header;
