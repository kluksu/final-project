import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export default class SmartSearch extends Component {
       constructor(props){
           super(props)
           this.state={
           }
       }
  

    render() {
        return (
            <div>
                     <Container>

                <Form className="smartSearchBox">
  <Form.Group controlId="formBasicEmail">
    <Form.Control onChange={this.props.getText} className="smartSearch" type="text" placeholder="search..." />
    <Form.Text className="text-muted">
    </Form.Text>

  </Form.Group>

  
  <Button variant="primary" type="button">
    Search
  </Button>

</Form>
</Container>

                
            </div>
        )
    }
}
