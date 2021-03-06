import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import CreateNewField from './createNewFields/CreateNewField'


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
            price:0,
            id:0,
            currentPicture:"",
            picturesArr:[],
            newFieldsArr:[],
            formID:0,
            

           


        }
    }
   
  
 

    
    
    updatefield=(fieldData)=>{


        let field=  [{
            fieldName:fieldData.fieldName,
          specifics:fieldData.specifics, 
         }]
         this.setState({newFieldsArr:this.state.newFieldsArr.concat(field)});
   
        }
  
     
    componentDidUpdate(prevProps,prevState){
        if((this.state.currentPicture!==prevState.currentPicture)){
        let arr=[];
        arr.push(<img  src="https://picsum.photos/200" //{`${this.state.currentPicture}`}
        ></img> )
        this.setState({picturesArr:this.state.picturesArr.concat(arr)})
        console.log(this.state.currentPicture)
    }
       

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
            <div className="formContainer">
                <Form>
  <Row>
      <Col xl={3} lg={3} md={4} sm={10}>
    <Form.Group  controlId="formGridQIStock">
      <Form.Label>quantity in stock</Form.Label>
      <Form.Control onChange={this.changeQuantity} type="number" placeholder="Enter quantity" />
    </Form.Group>
    </Col>
    <Col  xl={1} lg={1} md={2} sm={2}>
    <Form.Group  controlId="formGridUnitName">
    <Form.Label>units</Form.Label>
      <Form.Control onChange={this.changeUnit} type="text" placeholder="kg\meter\units.." />
    </Form.Group>
    </Col>
 

<Col>
    <Form.Group  controlId="formGridName">
      <Form.Label>item name</Form.Label>
      <Form.Control onChange={this.changeItemName} type="text" placeholder="name" />
    </Form.Group>
    </Col>

    <Col  xl={4} lg={4} md={6} sm={12}>

  <Form.Group controlId="formGridQ-PerBatch">
    <Form.Label>Quantitiy per batch</Form.Label>
    <Form.Control onChange={this.changeBatch} type="number" placeholder="Quantitiy per batch" />
  </Form.Group>
  </Col>

  </Row>

  <Row>
<Col xl={6} sm={12}>
  <Form.Group controlId="formGridMOQ">
    <Form.Label>minimum order quantity (batches)</Form.Label>
    <Form.Control  onChange={this.changeMinimum} type="number" placeholder="MOQ" />
  </Form.Group>
  </Col>
  <Col xl={6} sm={12}>
    <Form.Group  controlId="formGridpricePerUnit">
      <Form.Label>price per unit</Form.Label>
      <Form.Control onChange={this.changePrice} type="number" placeholder="enter price here" />
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
  
  </Row>
  <Row> 
  <CreateNewField updatefield={this.updatefield}             newFieldsArr={this.state.newFieldsArr}></CreateNewField>
  
  
  
  </Row>

  
  <Row> 
      <Col xl={4} ></Col>
      <Col xl={4} sm={12}>
      <Button className="submitItembtn" onClick={()=>this.props.updateProducts({
        fieldsArr:this.state.fieldsArr,
        quantity:this.state.quantity,
        unit:this.state.unit,
        itemName:this.state.itemName,
        batch:this.state.batch,
        minimum:this.state.minimum,
        price:this.state.price,
        id:"",
        picturesArr:this.state.picturesArr,
        activateUser:this.props.activateUser,
        newFieldsArr:this.state.newFieldsArr
  })} variant="primary" type="button">
    Submit
  </Button>
  </Col>
  </Row>
 
</Form>
            </div>
        )
    }
}
