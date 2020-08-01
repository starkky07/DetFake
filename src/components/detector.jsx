import React, { Component } from 'react'
import {
  Button,
  Card,
  CardBody,
  Label,
  Input,
  Form,
  FormGroup,
  Row,
  Col,
  Modal,
  ModalBody, 
  ModalFooter,
  Table
} from "reactstrap";
import { connect } from 'react-redux';
import NavBar from './helper/Navbar'
import Footer from './helper/Footer'
import Spinner from './helper/Spinner'
import pd from 'paralleldots'
require('dotenv').config()

class Detector extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalOpen: false,
            textInput : "",
            score: undefined
        }
        this.timeOutId = null
        this.toggleModal = this.toggleModal.bind(this)
        this.handleTextInput = this.handleTextInput.bind(this)
        pd.apiKey=process.env.REACT_APP_PARALLELDOTS_API_KEY;
    }
    handleTextInput (e) {
        e.preventDefault();
        this.setState({
            textInput: e.target.value
        })
    }
    toggleModal = () => {
        if(!this.state.modalOpen){
            pd.sentiment(this.state.textInput)
            .then( response => {
                var sentiment = JSON.parse(response)
                console.log(sentiment)
                console.log(sentiment.sentiment)
                this.setState({
                    score: sentiment.sentiment
                })
            })
            .catch( err => console.log(err));
        }
        this.setState({
            modalOpen: !this.state.modalOpen
        })
        
    }
    componentDidMount() {
        document.body.classList.toggle("landing-page");
      }
      componentWillUnmount() {
        document.body.classList.toggle("landing-page");
      }
    render() {
        let modalBody = <Spinner/>
        if(this.state.score !== undefined){
            modalBody =    (                         
                                <Table dark>
                                <thead>
                                    <tr>
                                        <th className="text-muted">TAG</th>
                                        <th className="text-muted">CONFIDENCE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>POSITIVE</td>
                                        <td>{ this.state.score.positive}%</td>
                                    </tr>
                                    <tr>
                                        <td>NEGATIVE</td>
                                        <td>{ this.state.score.negative}%</td>
                                    </tr>
                                    <tr>
                                        <td>NEUTRAL</td>
                                        <td>{ this.state.score.neutral}%</td>
                                    </tr>
                                </tbody>
                            </Table>
                            );
        }
        
        return(
            <div>
                <NavBar/>
                <div className="wrapper">
                <div className="page-header">
                <div className="content-center">
                <Row>
                <Col lg="12" md="6">
                <Card>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="Input-Url">Input Url</Label>
                                <Input type="url" id="Input-Url"></Input>
                            </FormGroup>
                            {/* <FormGroup>
                                <Label for="DropdownSelection">Type</Label>
                                <Input type="select" name="Select" color="success" id="DropdownSelection">
                                    <option className="h6">1</option>
                                    <option className="h6">2</option>
                                    <option className="h6">3</option>
                                    <option className="h6">4</option>
                                    <option className="h6">5</option>
                                </Input>
                            </FormGroup> */}
                            <FormGroup>
                                <Label className="text-muted">OR</Label>
                            </FormGroup>
                            <FormGroup>
                                <Label for="text-input">Input Text</Label>
                                <Input type="textarea" id="text-input" onChange={this.handleTextInput}></Input>
                            </FormGroup>
                            <Button className="btn-round" color="bg-info" onClick={this.toggleModal}>
                            Get Results
                            </Button>
                            <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                                <div className="modal-header">
                                    <h4 className="modal-title">Results</h4>
                                <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-hidden="true"
                                onClick={this.toggleModal}
                                >
                                    <i className="tim-icons icon-simple-remove" />
                                </button>
                                </div>
                                <ModalBody>
                                    {modalBody}
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="secondary" onClick={this.toggleModal}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </Modal>
                        </Form>
                    </CardBody>
                </Card>
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
        isAuthenticated: state.authReducer.isAuthenticated,
        user: state.authReducer.user
    };
}


export default connect(mapStateToProps, null)(Detector);