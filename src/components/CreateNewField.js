import React, { Component } from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export default class CreateNewField extends Component {
    constructor(props){
        super(props)
        this.state={
            fieldName:"",
            sepcifics: "deteils"
        }
    }
    render() {
        return (
            <Col xl={10} sm={10}>
<Row>
<Col xl={6} xs={6}>

                  <Form.Group controlId="formBasicNieldName">
    <Form.Label>field name</Form.Label>
    <Form.Control  type="text" placeholder="Enter the new field name" />
    <Form.Text className="text-muted">
        color, width, size, ect..
    </Form.Text>
  </Form.Group>
  </Col>
  <Col xl={6} xs={6}>

  <Form.Group controlId="formBasicNieldName">
    <Form.Label>sepcifics name</Form.Label>
    <Form.Control  type="text" placeholder="Enter the sepcifics name" />
    <Form.Text className="text-muted">
        blue, lg, 10 cm ect.. 
    </Form.Text>
  </Form.Group>
  </Col>

  </Row>
</Col>
        )
    }
}
