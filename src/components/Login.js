import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",

        
        }
    }
    ChangeEmail=(event)=>{
        this.setState({email:event.target.value})
        console.log(this.state.email)
        
    }
    ChangePassword=(event)=>{
        this.setState({password:event.target.value})
    }
   


    render() {
    
        return (
            <div>
                                              <Container>
                <Form>
                    <Row>
                        <Col xl={12} lg={6} md={12}>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={this.ChangeEmail} type="email" placeholder="Enter email" />
  </Form.Group>
  </Col>
  <Col xl={12} lg={6} md={12}>
  <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={this.ChangePassword} type="password" placeholder="Password" />
  </Form.Group>
  </Col>
  </Row>
  <Row>
  
  
  </Row>
  <Row>
      <Col xl={12}>
      <Button className="w-100" onClick={()=>this.props.activateUser({email:this.state.email, 
        password:this.state.password})}  variant="primary" type="button">
    Submit
  </Button>
      </Col>
  </Row>


</Form>
</Container>
            </div>
        )


}}
