import React, { Component } from 'react'

import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapseOpen: false,
            color: "navbar-transparent"
        }
        this.changeColor = this.changeColor.bind(this);
        this.toggleCollapse = this.toggleCollapse.bind(this);
        this.onCollapseExited = this.onCollapseExited.bind(this);
        this.onCollapseExiting = this.onCollapseExiting.bind(this);

    }
    componentDidMount() {
        window.addEventListener("scroll", this.changeColor);
    }
    componentWillUnmount() {
        window.addEventListener("scroll", this.changeColor);
    }

    changeColor = () => {
        if( document.documentElement.scrollTop > 99 || document.body.scrollTop > 99){
            this.setState({
                color: "bg-info"
            })
        } else if( document.documentElement.scrollTop < 100 || document.body.scrollTop < 100 ){
            this.setState({
                color: "navbar-transparent"
            })
        }
      
    }
    toggleCollapse = () =>{
        document.documentElement.classList.toggle("nav-open")
        this.setState({
            collapseOpen: !this.state.collapseOpen
        })
    }
    onCollapseExiting = () => {
        this.setState({
            collapseOut: "collapsing-out"
        })
    }
    onCollapseExited = () => {
        this.setState({
            collapseOut: ""
        })
    }
    render() {
        return(
            <Navbar
            className={"fixed-top "+ this.state.color }
            color-on-scroll="100"
            expand="lg">
                <Container>
                    <div className="navbar-translate">
                        <NavbarBrand
                        to="/"
                        id="navbar-brand"
                        tag={Link}>
                            DetFake
                        </NavbarBrand>
                        <UncontrolledTooltip placement="bottom" target="navbar-brand">
                            Designed By Kishan Sahu
                        </UncontrolledTooltip>
                        <button
                        aria-expanded={this.state.collapseOpen}
                        className="navbar-toggler navbar-toggler"
                        onClick={this.toggleCollapse}
                        >
                        <span className="navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                        </button>
                    </div>
                    <Collapse
                    className={"justify-content-end " + this.state.collapseOut}
                    navbar
                    isOpen={this.state.collapseOpen}
                    onExiting={this.onCollapseExiting}
                    onExited={this.onCollapseExited}
                    >
                    <div className="navbar-collapse-header">
                        <Row>
                            <Col className="collapse-brand" xs="6">
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                DetFake
                            </a>
                            </Col>
                            <Col className="collapse-close text-right" xs="6">
                            <button
                                aria-expanded={this.state.collapseOpen}
                                className="navbar-toggler"
                                onClick={this.toggleCollapse}
                            >
                                <i className="tim-icons icon-simple-remove" />
                            </button>
                            </Col>
                        </Row>
                    </div>
                    <Nav navbar>
                        <NavItem className="p-0">
                            <NavLink
                            data-placement="bottom"
                            href="https://github.com/starkky07/Liar-liar-model"
                            rel="noopener noreferrer"
                            target="_blank"
                            title="Github view"
                            >
                            <i className="fab fa-github" />
                            <p className="d-lg-none d-xl-none">Twitter</p>
                            </NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <Button
                            className="nav-link d-none d-lg-block"
                            color="primary"
                            href="/signin"
                            >
                            <i className="tim-icons icon-spaceship" /> Sign in
                            </Button>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/register">
                            Register
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/Liar-liar-model/issues">
                            Have an issue?
                            </NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        )
    }
}
export default NavBar;