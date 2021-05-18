import React, { Component } from 'react'
import { Button, Card, Nav } from 'react-bootstrap'

export default class ProductCard extends Component {
    componentDidMount(){
        console.log(this.props.product.picturesArr[0].props)
    }
    
    render() {
        const priceShown=(this.props.activeUser)? <Card.Text>price: {this.props.product.price}</Card.Text>:
         <Card.Text> price: login to see prices</Card.Text>
        return (
            <div>
                <Card style={{ width: '200px' }}>
  <Card.Img variant="top" src={this.props.product.picturesArr[0].props.src} />
  <Card.Body>
    <Card.Title>{this.props.product.itemName}</Card.Title>
    {priceShown}
    <Nav.Link href="/#/store" >go to store</Nav.Link>
     </Card.Body>
</Card>
            </div>
        )
    }
}
