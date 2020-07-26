import React, { Component }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
import '../styles/signin.css'

import NavBar from './helper/Navbar'
import Footer from './helper/Footer'

class Signin extends Component {
    componentDidMount(){
        document.body.classList.toggle("landing-page");
        $(".signup").css("display", "none")
        $(".signbtn").click(() => {
            $("form").animate({ height: "toggle", opacity:"toggle"}, "slow")
        })
    }
    componentWillUnmount() {
        document.body.classList.toggle("landing-page");
    }
    render() {
        return(
            <div>
            <NavBar/>
            <div className="wrapper">
                <div className="page-header">
            <div className="form">
                <form className="horizonal-form signin">
                    <div className="form-wrap" style={{position:"relative"}}>
                        <h2> Sign in to continue</h2>
                        <div className="form-grp">
                            <div className="relative">
                                <input
                                type="email" className="form-ctrl" id="userEmail" required="" autoFocus="" title="" autoComplete="" placeholder="Email">
                                </input>
                                <div className="fa">
                                <FontAwesomeIcon icon={faUser} />
                                </div>
                            </div>
                        </div>
                        <div className="form-grp">
                            <div className="relative">
                                <input
                                type="password" className="form-ctrl" required="" placeholder="Password" >
                                </input>
                                <div className="fa">
                                <FontAwesomeIcon icon={faKey} />
                                </div>
                            </div>
                            <span className="pull-right" ><small><a href="#">Forgot Password ?</a></small></span>
                        </div>
                   
                        <div className="login-btn">
                        <a href="#"><button class="movebtn movebtnsu" type="Submit">Next <FontAwesomeIcon icon={faArrowAltCircleRight}/></button></a>
                        </div>
                
                        </div>
                        <div className="sign-up">
                        <a href="#" className="signbtn">Create account</a>
                        </div>
                </form>
                <form className="form-horizontal signup">
                <div className="form-wrap" style={{position:"relative"}}>
                        <h2> Register </h2>
                        <div className="form-grp">
                            <div className="relative">
                                <input
                                type="email" className="form-ctrl" id="userEmail" required="" autoFocus="" title="" autoComplete="" placeholder="Email">
                                </input>
                                <div className="fa">
                                <FontAwesomeIcon icon={faUser} />
                                </div>
                            </div>
                        </div>
                        <div className="form-grp">
                            <div className="relative">
                                <input
                                type="password" className="form-ctrl" required="" placeholder="Enter a Password" >
                                </input>
                                <div className="fa">
                                <FontAwesomeIcon icon={faKey} />
                                </div>
                            </div>
                        </div>
                        <div className="form-grp">
                            <div className="relative">
                                <input
                                type="password" className="form-ctrl" required="" placeholder="Retype Password" >
                                </input>
                                <div className="fa">
                                <FontAwesomeIcon icon={faKey} />
                                </div>
                            </div>
                        </div>
                   
                        <div className="login-btn">
                        <a href="#"><button class="movebtn movebtnsu" type="Submit">Next <FontAwesomeIcon icon={faArrowAltCircleRight}/></button></a>
                        </div>
                
                        </div>
                        <div className="sign-up">
                        <a href="#" className="signbtn">Already have an account? Sign in </a>
                        </div>
                </form>
                <div className="loadingBarsContainer">
                    <div className="loading orangeBars"></div>
                    <div className="loading blueBars"></div>
                    <div className="loading greenBars"></div>
                </div>  
            </div>
            </div>
            </div>
            <Footer/>
            </div>
            
        )
    }
}
export default Signin;