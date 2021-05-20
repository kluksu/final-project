import React, { Component } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

export default class CreateNewField extends Component {
    constructor(props){
        super(props)
        this.state={
            fieldName:"",
            sepcifics: "deteils",
            key:0


        }
    } 
     
    
     
    changeFieldName=(event)=>{
        this.setState({fieldName:event.target.value})
        console.log(this.state.fieldName)
    }
    changeFieldSepcifics=(event)=>{
        this.setState({sepcifics:event.target.value})
        console.log(this.state.sepcifics)
    }
    render() {
        
        return (
        <Row>
                          <Col xl={6} sm={12}>
     <Form.Group controlId="formBasicNieldName">
    <Form.Label>field name</Form.Label>
    <Form.Control onChange={this.changeFieldName}     type="text"    placeholder="Enter the new field name" />
    <Form.Text className="text-muted">
        color, width, size, ect..
    </Form.Text>
  </Form.Group>
  </Col>
  
  <Col xl={6} sm={12}>
  <Form.Group controlId="formBasicNieldName">
    <Form.Label>sepcifics name</Form.Label>
    <Form.Control onChange={this.changeFieldSepcifics}    type="text" placeholder="Enter the sepcifics name"  />
    <Form.Text className="text-muted">
        blue, lg, 10 cm ect.. 
    </Form.Text>
  </Form.Group>
  </Col>
  <Col  xl={4}></Col>
  <Col xl={4} sm={12}>

            <Button className="createNewFieldsBtn"  onClick={()=>this.props.updatefield({fieldName:this.state.fieldName,specifics:this.state.sepcifics})}   variant="primary" type="button">
            add new field name {this.state.fieldName}         
            </Button>

            </Col>
            </Row>        )
        }
}
