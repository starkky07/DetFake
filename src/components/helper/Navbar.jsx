import React, { Component } from 'react'
import { connect } from 'react-redux';
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
import { logout } from './../../store/actions/auth'

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapseOpen: false,
            color: "navbar-transparent",
            user: " "
        }
        this.changeColor = this.changeColor.bind(this);
        this.toggleCollapse = this.toggleCollapse.bind(this);
        this.onCollapseExited = this.onCollapseExited.bind(this);
        this.onCollapseExiting = this.onCollapseExiting.bind(this);

    }
    componentDidMount() {
       if(this.props.user){
          
           var s = String(this.props.user);
           s = s.substring(0, s.indexOf('@'));
           this.setState({
               user: s
           })
           //console.log(this.props.user,s) 
       }
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
        let el = null   
        let userButton = null
        let signin = 'Sign in'
        if(this.props.isAuthenticated){
            signin =  'Hi, '+ this.state.user
        }
        if(this.state.collapseOpen){
            el =        (<NavItem>
                            <NavLink href="/signin">
                                {signin}
                            </NavLink>
                        </NavItem>);
        }
        if(!this.props.isAuthenticated){
            userButton=(<NavItem>
                            <Button
                            className="nav-link d-none d-lg-block"
                            color="primary"
                            href="/signin"
                            >
                            <i className="tim-icons icon-spaceship" /> {signin}
                            </Button>
                        </NavItem>);
        } else {
            el = (  <div>                            
                        <NavItem>
                            <NavLink href="/detect">
                                {signin}
                            </NavLink>
                        </NavItem>    
                        <NavItem>
                            <NavLink href="/detect" onClick={this.logout}>
                                Logout
                            </NavLink>
                        </NavItem>
                    </div> );
            userButton = (
                    <div>
                        {/* <NavItem>
                            <NavLink href="#" onClick={ (e) => e.preventDefault()}>
                                {signin}
                            </NavLink>
                        </NavItem> */}
                        <NavItem>
                            <Button
                            className="nav-link d-none d-lg-block"
                            color="primary"
                            href="/"
                            onClick={this.logout}
                            >
                            <i className="tim-icons icon-spaceship" /> Logout
                            </Button>
                        </NavItem>                        
                    </div>
                    );
        }
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
                            <a href="/" onClick={e => e.preventDefault()}>
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
                            href="https://github.com/starkky07/DetFake"
                            rel="noopener noreferrer"
                            target="_blank"
                            title="Github view"
                            >
                            <i className="fab fa-github" />
                            </NavLink>
                        </NavItem>
                        {el}
                        { userButton }

                        <NavItem>
                            <NavLink href="https://github.com/starkky07/DetFake/issues">
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

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated,
        user: state.authReducer.user,
        authMsg: state.authReducer.authMsg
    };
}
const mapDisptachToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(NavBar);