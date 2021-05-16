import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import CreateNewField from './CreateNewField'

export default class UploadItems extends Component {
    constructor(props){
        super(props)
        this.state={
            fieldsArr:[],
            quantity:0,
            unit:"",
            itemName:"",
            batch:1,
            minimum:0,
            price:"",
            id:"",
            currentPicture:"",
            picturesArr:[]



        }
    }
  
     getFields=()=>{
         
       let  arr=[]
        arr.push(<CreateNewField ></CreateNewField>)
        this.setState({fieldsArr:this.state.fieldsArr.concat(arr)})
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.currentPicture!==prevState.currentPicture){
        let arr=[];
        arr.push(<img src="https://i.picsum.photos/id/65/200/200.jpg?hmac=pZrTO_F80X2VYUVpgorpj6xM_WABGhjIXYieK__8B50"  //{`${this.state.currentPicture}`}
        ></img>)
        this.setState({picturesArr:this.state.picturesArr.concat(arr)})}
        console.log(this.state.picturesArr)
    }
    getPic=(event)=>{
        this.setState({currentPicture:event.target.value})

    }
    changePrice=(event)=>{
        this.setState({price:event.target.value})}
    changePrice=(event)=>{
        this.setState({price:event.target.value})}
    changeMinimum=(event)=>{
        this.setState({minimum:event.target.value})}
    changeBatch=(event)=>{
        this.setState({batch:event.target.value})
    }
    changeItemName=(event)=>{
        this.setState({itemName:event.target.value})
    }
    changeUnit=(event)=>{
        this.setState({unit:event.target.value})
    }
    changeQuantity=(event)=>{
        this.setState({quantity:event.target.value})
    }
    render() {
        return (
            <div>
                <Container>
                <Form>
  <Row>
      <Col xl={3} lg={3} md={4} sm={10}>
    <Form.Group  controlId="formGridQIStock">
      <Form.Label>quantity in stock</Form.Label>
      <Form.Control type="number" placeholder="Enter quantity" />
    </Form.Group>
    </Col>
    <Col  xl={1} lg={1} md={2} sm={2}>
    <Form.Group  controlId="formGridUnitName">
    <Form.Label>units</Form.Label>
      <Form.Control type="number" placeholder="kg\meter\units.." />
    </Form.Group>
    </Col>
 

<Col>
    <Form.Group  controlId="formGridName">
      <Form.Label>item name</Form.Label>
      <Form.Control type="text" placeholder="name" />
    </Form.Group>
    </Col>

    <Col  xl={4} lg={4} md={6} sm={12}>

  <Form.Group controlId="formGridQ-PerBatch">
    <Form.Label>Quantitiy per batch</Form.Label>
    <Form.Control type="number" placeholder="Quantitiy per batch" />
  </Form.Group>
  </Col>

  </Row>

  <Row>
<Col xl={6} sm={12}>
  <Form.Group controlId="formGridMOQ">
    <Form.Label>minimum order quantity (batches)</Form.Label>
    <Form.Control type="number" placeholder="MOQ" />
  </Form.Group>
  </Col>
  <Col xl={6} sm={12}>
    <Form.Group  controlId="formGridpricePerUnit">
      <Form.Label>price per unit</Form.Label>
      <Form.Control type="number" placeholder="enter price here" />
    </Form.Group>
    
    </Col>
    <Row>
        <Col xl={3}>
  <Form.Group>
    <Form.File onChange={this.getPic} id="picture1" label="upload picture" />
  </Form.Group>
  
  <Form.Group>
    <Form.File onChange={this.getPic} id="picture2" label="upload picture" />
  </Form.Group>
  <Form.Group>
    <Form.File  onChange={this.getPic} id="picture3" label="upload picture" />
  </Form.Group>
  <Form.Group>
    <Form.File onChange={this.getPic} id="picture4" label="upload picture" />
  </Form.Group>
  </Col>
  <Col>
  <div className="picturesUpload">
  {this.state.picturesArr}
  </div>
 
</Col>
  
  </Row>
  
  </Row>
  <Row>
      <Col xl={2}>
      </Col>
  <Col xl={10} xs={2}>
  {this.state.fieldsArr}  
  </Col>
  </Row>
  <Row> 
  
      <Col xl={2} xs={2}>
  <Button onClick={this.getFields} variant="primary" type="button">
      add costume field
  </Button>
  </Col>
  
  
  </Row>

  

  <Button variant="primary" type="button">
    Submit
  </Button>
</Form>
</Container>
            </div>
        )
    }
}