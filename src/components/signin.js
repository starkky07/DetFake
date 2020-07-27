import React, { Component }  from 'react';
import { Redirect } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
import '../styles/signin.css'
import NavBar from './helper/Navbar'
import Footer from './helper/Footer'
import { connect } from 'react-redux';
import validate from './helper/validate';
import { signin, signup, resetPassword} from './../store/actions/auth'

  
class Signin extends Component {
    constructor(props){
        super(props)
        this.state =  {
            email: "", 
            password: "",
            newUser: false,
            reset: false,
            isSubmitting: false,
            errors: {},

        }
        this.setNewUser = this.setNewUser.bind(this);
        this.setReset = this.setReset.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    };
    componentDidMount() {
        console.log(this.props.isAuthenticated)
        document.body.classList.toggle("landing-page");
        $(".signup").css("display", "none")
        $(".signbtn").click(() => {
            $("form").animate({ height: "toggle", opacity:"toggle"}, "slow")
        })
    }
    componentDidUpdate(){
        console.log(this.state)
        console.log(this.props.pro)
    }
    componentWillUnmount() {
        document.body.classList.toggle("landing-page");
    }
    setNewUser (){
        this.setState({
            newUser: true
        })
    }
    setReset (){
        this.setState({
            reset: true
        })
    }
    handleEmailChange (e) {
        e.persist();
        this.setState({
            email: e.target.value
        })
        
    };
    handlePasswordChange (e) {
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit (e) {
        const { dispatch } = this.props;
        e.preventDefault()
        this.setState({
            isSubmitting: true,
            errors: validate(this.state.email, this.state.password,this.state.reset)
        })
        console.log(this.state)
        console.log("Before Signin",this.props)
        if(Object.keys(this.state.errors).length === 0 ){
            
            if(this.state.newUser){
                dispatch(signup(this.state.email, this.state.password));
            } else if( this.state.reset ){
                dispatch(resetPassword(this.state.email));
            } else {
                dispatch(signin( this.state.email, this.state.password));
            }
            console.log("After Signin",this.props)
            console.log(this.state)
            console.log(this.props.pro)
            //cleaning
        }
        

    };
    render() {
        const { isAuthenticated } = this.props;
        if (isAuthenticated) {
            return <Redirect to="/" />;
        } else {
        return(
            <div>
            <NavBar/>
            <div className="wrapper">
                <div className="page-header">
                <div className="form" >
                <form className="horizonal-form signin" onSubmit={this.handleSubmit} noValidate>
                    <div className="form-wrap" style={{position:"relative"}}>
                        <h2> Sign in to continue</h2>
                        <div className="form-grp">
                            <div className="relative">
                                <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-ctrl" id="userEmail" 
                                required=""
                                placeholder="Email"
                                value={ this.state.email }
                                onChange= { this.handleEmailChange }>
                                </input>
                                <div className="fa">
                                <FontAwesomeIcon icon={faUser} />
                                </div>
                            </div>
                        </div>
                        <div className="form-grp">
                            <div className="relative">
                                <input
                                type="password"
                                id="password"
                                name="password" 
                                className="form-ctrl" 
                                required="" 
                                placeholder="Password"
                                value={this.state.password} 
                                onChange={this.handlePasswordChange}>
                                </input>
                                <div className="fa">
                                <FontAwesomeIcon icon={faKey} />
                                </div>
                            </div>
                            <span className="pull-right" ><small><a href="#">Forgot Password ?</a></small></span>
                        </div>
                   
                        <div className="login-btn">
                        <a href="#">
                            <button className="movebtn movebtnsu" type="submit" >
                                Next <FontAwesomeIcon icon={faArrowAltCircleRight}/>
                            </button>
                        </a>
                        </div>
                
                        </div>
                        <div className="sign-up">
                        <a href="#" className="signbtn">Create account</a>
                        </div>
                </form>
                {/* <form className="form-horizontal signup">
                <div className="form-wrap" style={{position:"relative"}}>
                        <h2> Register </h2>
                        <div className="form-grp">
                            <div className="relative">
                                <input
                                type="email" className="form-ctrl" id="userEmail1" required="" autoFocus="" title="" autoComplete="" placeholder="Email"
                               
                                >
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
                        <a href="#"><button className="movebtn movebtnsu" type="Submit" >Next <FontAwesomeIcon icon={faArrowAltCircleRight}/></button></a>
                        </div>
                
                        </div>
                        <div className="sign-up">
                        <a href="#" className="signbtn">Already have an account? Sign in </a>
                        </div>
                </form> */}
            </div>
            </div>
            </div>
            <Footer/>
            </div>
            
        )
        }
}
}
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated,
        pro: state.authReducer
    };
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//       signup: (email, password) => dispatch(signup(email, password)),
//       signin: (email, password) => dispatch(signin(email, password)),
//       resetPassword: email => dispatch(resetPassword(email))
//     };
// };
export default connect(mapStateToProps, null)(Signin);