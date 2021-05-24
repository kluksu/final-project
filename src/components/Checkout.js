import React, { Component } from 'react'
import { Jumbotron, Table, Button } from 'react-bootstrap'

export default class Checkout extends Component {
    render() {
        console.log(this.props.selectedCart)


       let  cartArr=[]
       let orderArr=[]
       let buyerQuantity
        for (let i = 0; i < this.props.cart.length; i++) {
            const orderItem = this.props.cart[i];
            buyerQuantity=this.props.cart[i].buyerQuantity
           console.log(orderItem)
            if(this.props.selectedCart===orderItem.product.user && this.props.activeUser.userName===orderItem.activeUser.userName){
                orderArr.push(orderItem)
            cartArr.push( <tr>
                <td>{orderItem.product.id}</td>
                <td>{orderItem.product.itemName}</td>
                <td>{orderItem.product.price}</td>
                <td>{buyerQuantity}</td>
                <td>{orderItem.product.price*buyerQuantity}</td>
               </tr>)
            console.log(orderItem)

            }
        }
        return (
            <div>
                <Jumbotron>{this.props.selectedCart}'s checkout</Jumbotron>
                <Table striped bordered hover size="xl">
     
     <thead>
       <tr>
       <th>id</th>
       <th>Item name</th>
         <th>Price per unit</th>
         <th>Ordered quantity</th>
         <th>Item total</th>
       </tr>
     </thead>
     <tbody>
    {cartArr}
     
       </tbody>
   </Table>
   <Button onClick={()=>this.props.createOrder({order:orderArr,buyerQuantity:buyerQuantity})}> send order</Button>
            </div>
        )
    }
}
