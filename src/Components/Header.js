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
    /*
    ChangeLinkToA_1() {
        window.location.reload();
        window.location.href = "/";
    }

    ChangeLinkToA_2() {
        window.location.reload();
        window.location.href = "/apps";
    }

    ChangeLinkToA_3() {
        window.location.reload();
        window.location.href = "/social-media";
    }
    */
    render() {
        return (
            <nav>
                <header className="App-header">
                    <Navbar color="light" light expand="md">

                        <Link to="/">
                            {/* <a className="links" onClick={this.ChangeLinkToA_1}>*/}
                            <NavbarBrand>
                                <i className="fa fa-home" style={{ fontSize: '50px', color: 'light' }} />
                                <p className="text-home" style={{ float: 'right', paddingTop: '12%', fontSize: '1rem' }}> - Portfolio Unity3D</p>
                            </NavbarBrand>
                            {/* </a>   */}
                       </Link>

                        <NavbarToggler onClick={this.toggle} />

                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink>
                                        {/*<a className="links" onClick={this.ChangeLinkToA_2}>{strings.heading_Apps}</a> */}
                                      
                                        <Link to="/apps">{strings.heading_Apps}</Link>
                                      
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        {/* <a className="links" onClick={this.ChangeLinkToA_3}>{strings.heading_SocialMedia}</a> */}
                                       
                                        <Link to="/social-media">{strings.heading_SocialMedia}</Link>
                                      
                                    </NavLink>
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
