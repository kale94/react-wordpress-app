import React, { Component } from 'react';
import {Link } from "react-router-dom";
import Api from '../Api';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            navigation: []
        };
    }

    componentDidMount() {
        let api = new Api();
        const navSlug = 'header-navigation'; //Add slug name of menu from Wordpress

        api.menu(navSlug).then(data => {
            this.setState({
                navigation: data.items //Return object
            })
        })
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        const navigation = this.state.navigation ? Object.values(this.state.navigation) : null; //Returns an array of a given object's

        let nav = null;
        
        if (this.state.navigation) {
            nav = navigation.map((single, index) => {

                let url = new URL(single.url);
                let pageSlug = url.pathname.substr(1); //get pathname of url and remove "/"

                return (
                    <NavItem key={index}>
                        <Link to={`/${pageSlug}`} className="nav-link">{single.title}</Link>
                    </NavItem>
                )
            })
        }

        return (
            <Container>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">myApp</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {nav}
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        );
    }
}

export default Header;