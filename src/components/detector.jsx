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
  ModalFooter 
} from "reactstrap";
import { connect } from 'react-redux';
import NavBar from './helper/Navbar'
import Footer from './helper/Footer'
import axios from 'axios'

class Detector extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalOpen: false,
            data : undefined
        }
        this.timeOutId = null
        this.toggleModal = this.toggleModal.bind(this)
        
    }
    toggleModal = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=20')
        .then( response => {
            this.setState({
                data: response.data[5].title
            })
        })
        .catch( err => console.log(err));
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
        let modalBody = "...loading";
        if(this.state.data !== undefined){
            modalBody = this.state.data
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
                            <FormGroup>
                                <Label for="DropdownSelection">Type</Label>
                                <Input type="select" name="Select" color="success" id="DropdownSelection">
                                    <option className="h6">1</option>
                                    <option className="h6">2</option>
                                    <option className="h6">3</option>
                                    <option className="h6">4</option>
                                    <option className="h6">5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="text-input">Input Text</Label>
                                <Input type="textarea" id="text-input"></Input>
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
                                    <p>{modalBody}</p>
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