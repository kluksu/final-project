import React, { Component } from 'react'
import { Button, Card, Form, Nav } from 'react-bootstrap'

export default class ProductCard extends Component {
    constructor(props){
        super(props)
        this.state={
            BuyerQuantity:0
        }}
    
        setBuyerQuantity= (event)=>{
            this.setState({BuyerQuantity:event.target.value})
        }
    
   
       
    
    render() {
        let src=(this.props.product.picturesArr[0].props.src)?this.props.product.picturesArr[0].props.src:<div></div>
        const inStore=(this.props.selectedStore)?<Form>
        <Form.Group controlId="formBasicEmail" className="cardForm"> 
        <Nav.Link href={`/#/store/${this.props.product.user}/x${this.props.product.itemName}`}  onClick={()=>this.props.selectedProduct({product:this.props.product })} >more details</Nav.Link>
        <Button variant="primary"  type="button" onClick={()=>this.props.addCartItem({product:this.props.product, BuyerQuantity:this.state.BuyerQuantity})}>
add to cart        </Button>
         <Form.Control type="number" onChange={this.setBuyerQuantity} placeholder="0" />
          </Form.Group>
        </Form>:    <Nav.Link href={`/#/store/${this.props.product.user}`} onClick={()=>this.props.getStore({user:this.props.product.user })}>go to {this.props.product.user}'s store</Nav.Link>
        
        const priceShown=(this.props.activeUser)? <Card.Text>{`${this.props.product.price}$ per ${this.props.product.unit}`}</Card.Text>:
         <Card.Text> price: login to see prices</Card.Text>
        return (
            <div className="cardWrep">
                <Card style={{ width: '300px' }}>
  <Card.Img variant="top" src={"https://picsum.photos/300/300"} />
  <Card.Body>
    <Card.Title>{this.props.product.itemName}</Card.Title>
    {priceShown}
    {inStore}
     </Card.Body>
</Card>
            </div>
        )
    }
}
