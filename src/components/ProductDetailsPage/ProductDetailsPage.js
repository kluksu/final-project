import React, { Component } from 'react'
import { Container, Table } from 'react-bootstrap'
import './ProductDetailsPage.css';


export default class ProductDetailsPage extends Component {
    render() {
       
        return (
            <div className="productPage"> 
        <div className="gallery"> {this.props.selectedProduct.picturesArr}</div>  

    <Container>
        <Container>
            {this.props.selectedProduct.pictureArr}
        </Container>
              <Table striped bordered hover size="xl">
     
  <thead>
    <tr>
      <th>feature</th>
      <th>value</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>Item name</td>
      <td>{this.props.selectedProduct.itemName}</td>
     </tr>
    <tr>
      <td>Quntity in stock</td>
      <td>{`${this.props.selectedProduct.quantity} ${this.props.selectedProduct.unit}`}</td>
    </tr>
    <tr>
      <td> Units per batch</td>
      <td>{this.props.selectedProduct.batch}</td>
    </tr>

    <tr>
      <td>Price per unit</td>
      <td>{this.props.selectedProduct.price}</td>
    </tr>
    <tr>
      <td>Minimum batches per order</td>
      <td>{this.props.selectedProduct.minimum}</td>
    </tr>


  
  </tbody>
</Table>
</Container>
            </div>
        )
    }
}
