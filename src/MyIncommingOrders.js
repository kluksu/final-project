import React, { Component } from 'react'
import { Table } from 'react-bootstrap';

export default class MyIncommingOrders extends Component {
    render() {
        console.log("!!!")
     let incommingOrder=[]
        for (let i = 0; i < this.props.orders.length; i++) {
            const order = this.props.orders[i];

            if(order.newOrder[0].product.user===this.props.activeUser.userName){

                for (let j = 0; j < order.newOrder.length; j++) {
                    const product = order.newOrder[j];
                    console.log(product)
                if(this.props.selectedOrder===product.activeUser.userName)
           incommingOrder.push(
            <tr><td>{product.product.itemName}</td>
                <td>{product.buyerQuantity}</td>
                <td>{product.product.price}</td>
           <td>{product.product.price*product.buyerQuantity}</td></tr>)
        }}}
        return (
            <Table striped bordered hover size="xl">
            <thead>
                <th>item Name</th>
                <th>Quantity</th>
                <th>price</th>
                <th>total price</th>

            </thead>
            <tbody>
            {incommingOrder}

              </tbody>
          </Table>
        )
    }
}
