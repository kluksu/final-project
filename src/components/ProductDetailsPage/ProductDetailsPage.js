import React, { Component } from 'react'
import { Container, Table } from 'react-bootstrap'
import './ProductDetailsPage.css';


export default class ProductDetailsPage extends Component {
    render() {
      let visibleFieldsArr=[]
      for (let i = 0; i <  this.props.selectedProduct.newFieldsArr.length; i++) {
        const element = this.props.selectedProduct.newFieldsArr[i];
        visibleFieldsArr.push(<tr><td>{element.fieldName}</td><td>{element.specifics}</td></tr>)
      }

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
    {visibleFieldsArr}
    </tbody>
</Table>
</Container>
            </div>
        )
    }
}
