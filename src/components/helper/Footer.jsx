import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// reactstrap components
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";
class Footer extends Component {
    render() {
        return (
        <footer className="Footer">
            <Container>
                <Row>
                    <Col md="3">
                        <h1 className="title">DetFake</h1>
                        <p> © 2020, KS & SPC</p>
                    </Col>
                    <Col md="3">
                        <Nav vertical>
                            <NavItem>
                                <NavLink to="/" tag={Link}>
                                    Home
                                </NavLink>
                            </NavItem> 
                            <NavItem>
                                <NavLink to="/register" tag={Link}>
                                    Register
                                </NavLink>
                            </NavItem> 
                            <NavItem>
                                <NavLink to="/signin" tag={Link}>Signin</NavLink>
                            </NavItem> 
                        </Nav>
                    </Col>
                    <Col md="3">
                        <Nav vertical>
                            <NavItem>
                                <NavLink href="mailto:starkky@yahoo.com">Contact Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://starkky07.github.io">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://opensource.org/licenses/MIT">License</NavLink>
                            </NavItem> 
                        </Nav>
                    </Col>
                    <Col md="3">
                    <h4 className="title">Follow us:</h4>
                        <div >
                            <Button
                            className="btn-icon btn-neutral btn-round btn-simple"
                            color="default"
                            href="https://twitter.com/starkky07"
                            id="tooltip622135962"
                            target="_blank"
                            >
                            <i className="fab fa-twitter" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip622135962">
                            Follow us
                            </UncontrolledTooltip>
                            <Button
                            className="btn-icon btn-neutral btn-round btn-simple"
                            color="default"
                            href="https://www.facebook.com/starkky07"
                            id="tooltip230450801"
                            target="_blank"
                            >
                            <i className="fab fa-facebook" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip230450801">
                            Like us
                            </UncontrolledTooltip>
                            <Button
                            className="btn-icon btn-neutral btn-round btn-simple"
                            color="default"
                            href="https://www.instagram.com/im_kishansahu"
                            id="tooltip230450801"
                            target="_blank"
                            >
                            <i className="fab fa-instagram" />
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip230450801">
                            Like us
                            </UncontrolledTooltip>
                        </div>
                    </Col>
                </Row>
                <hr></hr>
            </Container>
        </footer>
        )
    }
}
export default Footer;