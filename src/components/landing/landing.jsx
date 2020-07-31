import React, { Component } from 'react'
import {
  Button,
  Row,
  Col
} from "reactstrap";

import NavBar from '../helper/Navbar'
import Footer from '../helper/Footer'
import { connect } from 'react-redux'

class Landing extends Component {
    componentDidMount() {
        
        document.body.classList.toggle("landing-page");
    }
    componentWillUnmount() {
        document.body.classList.toggle("landing-page");
    }
    componentDidUpdate () {
      //console.log(this.props)
    }
    
    render() {
      const { isAuthenticated } = this.props;
      let el = null
        if (isAuthenticated && this.props.user ) {
        el = <h1>{ this.props.user }</h1> 
        }
        return(
            <div>
                <NavBar/>
                
                <div className="wrapper">
                <div className="page-header">
                    <img
                    alt="..."
                    className="path"
                    src={require("../../styles/assets/img/blob.png")}
                    />
                    <img
                    alt="..."
                    className="path2"
                    src={require("../../styles/assets/img/path2.png")}
                    />
                    <img
                    alt="..."
                    className="shapes triangle"
                    src={require("../../styles/assets/img/triunghiuri.png")}
                    />
                    <img
                    alt="..."
                    className="shapes wave"
                    src={require("../../styles/assets/img/waves.png")}
                    />
                    <img
                    alt="..."
                    className="shapes squares"
                    src={require("../../styles/assets/img/patrat.png")}
                    />
                    <img
                    alt="..."
                    className="shapes circle"
                    src={require("../../styles/assets/img/cercuri.png")}
                    />
                    <div className="content-center">
                    {el}
                    <Row className="row-grid justify-content-between align-items-center text-left">
                      <Col lg="6" md="6">
                        <h1 className="text-white">
                          We keep you safe from<br />
                          <span className="text-white">Fake News</span>
                        </h1>
                        <p className="text-white mb-3">
                        Fake news can become extremely influential and has the ability to spread exceedingly fast. 
                        With the increase of people using social media, they are being exposed to vast information every day. 
                        Misinformation can be difficult to correct and may have lasting implications.
                        So labelling and fact checking is the only way to make sure we are safe from the mob ignorance. But the vastness of information in internet make it hard to  manually filter. 
                        Hence we are leveraging the power of Machine Learning to make the fake news detection easier..
                        </p>
                        <div className="btn-wrapper mb-3 button" >
                            <Button
                            outline
                            color="info"
                            href="/detect"
                            >
                           Start Detecting <i className="tim-icons icon-double-right" /> 
                            </Button>
  
                        </div>
                          
                          </Col>
                          <Col lg="4" md="5">
                          <img
                              alt="..."
                              className="img-fluid"
                              src={require("../../styles/assets/img/ripp.png")}
                          />
                          </Col>
                      </Row>
                      </div>
                    </div>
                    </div>
                <Footer/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    is_Authenticated: state.authReducer.isAuthenticated,
    user: state.authReducer.user
  }
}

export default connect(mapStateToProps,null)(Landing);