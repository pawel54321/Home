import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, //NavbarToggler, 
    Collapse, Nav, NavItem, NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <nav>
                <header className="App-header">
                    <Navbar color="light" light expand="md">
                        <NavbarBrand><Link to="/home"><i className="fa fa-home" style={{ fontSize: '50px', color: 'light' }} /></Link></NavbarBrand>
                        {/*<NavbarToggler />*/}
                        <Collapse Collapse isOpen={true} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink><Link to="/apps">Apps</Link></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink><Link to="/social-media">Social Media</Link></NavLink>
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
