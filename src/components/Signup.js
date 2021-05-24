import React, { Component } from 'react'
import { Button, Col, Container, Form, Nav, Row } from 'react-bootstrap'
import ThanksForRegistering from './ThanksForRegistering'

export default class Signup extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            repPassword:"",
            phone_number:"",
            userName:"",
            address:"",
            type:"",
            submited:""

            
        }
    
    }
    getValue=(event)=>{
      this.setState({type:event.target.id})
      console.log(this.state.type)}

    ChangeAddress=(event)=>{
      this.setState({address:event.target.value})
      console.log(this.state.address)
      
  }
    ChangeUserName=(event)=>{
      this.setState({userName:event.target.value})
      console.log(this.state.userName)
      
  }
    ChangeEmail=(event)=>{
        this.setState({email:event.target.value})
        console.log(this.state.email)
        
    }
    ChangePassword=(event)=>{
        this.setState({password:event.target.value})
    }
        ChangeRepPassword=(event)=>{
            this.setState({repPassword:event.target.value})
    }
    ChangePhone_Number=(event)=>{
        this.setState({phone_number:event.target.value})
    }
    componentDidUpdate(prevProps,prevState){
      if(this.props.signupSubmited!==prevProps.signupSubmited){
        window.location.replace("/#/Signupcompleted")  

      }
    
    }
 
    render() {

       
         
        return (
            <div className="formContainer">
                <Form>
                    <Row>
                        <Col xl={6} lg={6} md={12}>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={this.ChangeEmail} type="email" placeholder="Enter email" />
  </Form.Group>
  </Col>
  <Col xl={6} lg={6} md={12}>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  onChange={this.ChangePassword} type="password" placeholder="Password" />
  </Form.Group>
  </Col>
  </Row>
  <Row>
  <Col xl={6} lg={6} md={12}>
  <Form.Group controlId="formGroupRepPassword">
    <Form.Label> repet Password</Form.Label>
    <Form.Control onChange={this.ChangeRepPassword} type="password" placeholder="repet password" />
  </Form.Group>
  </Col>
  <Col>
  <Form.Group controlId="formGroupPhone_number">
    <Form.Label>phone number</Form.Label>
    <Form.Control onChange={this.ChangePhone_Number} type="number" placeholder="phone number" />
  </Form.Group>
  </Col>
  </Row>
 
  <Row>
    
    <Col xl={4} lg={6} md={12}>
  <Form.Group controlId="formGroupUserName">
    <Form.Label>user name</Form.Label>
    <Form.Control onChange={this.ChangeUserName} type="text" placeholder="user name\company Name" />
  </Form.Group>
  </Col>
    
    <Col xl={4} lg={6} md={12}>
  <Form.Group controlId="formGroupAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control onChange={this.ChangeAddress} type="text" placeholder="Enter Address" />
  </Form.Group>
  </Col>
   <Form.Group  onChange={this.getValue} as={Row}>
      <Form.Label as="legend" column sm={2}>
        account type
      </Form.Label>
      <Col xl={3} lg={3} md={3}>
        <Form.Check
          type="radio"
          label="seller"
          name="formHorizontalRadios"
          id="seller"
        />
        <Form.Check
          type="radio"
          label="buyer"
          name="formHorizontalRadios"
          id="buyer"
        />
     
      </Col>
    </Form.Group>
    

    
  </Row>
  <Row>
      <Col xl={12}>
      <Button className="w-100" onClick={()=>this.props.updateUsers({email:this.state.email,
      password:this.state.password,
      phone_number:this.state.phone_number,
      userName:this.state.userName,
      address: this.state.address,
      accountType:this.state.type,
      }) } variant="primary" type="button">
    Submit
  </Button>
      </Col>
  </Row>


</Form>
            </div>
        )
   
  }}
