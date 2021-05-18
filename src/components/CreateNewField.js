import React, { Component } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

export default class CreateNewField extends Component {
    constructor(props){
        super(props)
        this.state={
            fieldName:"",
            sepcifics: "deteils",
            key:this.props.formID

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
            <Col xl={10} sm={10}>
<Row>
<Col xl={6} xs={6}>

                  <Form.Group controlId="formBasicNieldName">
    <Form.Label>field name</Form.Label>
    <Form.Control onChange={this.changeFieldName}     type="text" placeholder="Enter the new field name" />
    <Form.Text className="text-muted">
        color, width, size, ect..
    </Form.Text>
  </Form.Group>
  </Col>
  <Col xl={6} xs={6}>

  <Form.Group controlId="formBasicNieldName">
    <Form.Label>sepcifics name</Form.Label>
    <Form.Control onChange={this.changeFieldSepcifics}   type="text" placeholder="Enter the sepcifics name" />
    <Form.Text className="text-muted">
        blue, lg, 10 cm ect.. 
    </Form.Text>
  </Form.Group>
  </Col>
  <Col xl={2} xs={2}>
            <Button  onClick={()=>this.props.updatefield({fieldName:this.state.fieldName,specifics:this.state.sepcifics})}   variant="primary" type="button">
            add {this.state.fieldName}         
            </Button>
            </Col>
            <Col xl={2} xs={2}>
            <Button onClick={()=>this.props.deleteForm({formID:this.props.formID})}   variant="primary" type="button">
             delete {`${this.state.fieldName}`}       
          </Button>
            </Col>
          

  </Row>
</Col>
        )
    }
}
