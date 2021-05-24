import React, { Component } from 'react'
import {  Nav, Navbar, NavDropdown,  } from 'react-bootstrap'
import OrdersDropDown from '../OrdersDropDown'
import MyAccount from './MyAccount'
import ShoppingCart from './ShoppingCart'

export default class MyNavBar extends Component {
  
  
    render() {
      const shoppingcart=(this.props.activeUser.accountType==="buyer")? <> <MyAccount activeUser={this.props.activeUser}></MyAccount><ShoppingCart cartSelect={this.props.cartSelect} activeUser={this.props.activeUser} cart={this.props.cart} products={this.props.products}></ShoppingCart></>:<><MyAccount></MyAccount>{/*<Nav.Link href={`/#/awatingOrders/${this.props.activeUser.userName}`}>awating Orders</Nav.Link>*/}{ <OrdersDropDown  orders={this.props.orders} getSelectedOrder={this.props.getSelectedOrder} activeUser={this.props.activeUser}></OrdersDropDown>}<Nav.Link href="/#/uploaditems">upload items</Nav.Link></>

      const login=(!this.props.activeUser)? <Nav> <Nav.Link href="/#/signupSeller">signup</Nav.Link> <Nav.Link href="/#/Login">Login  </Nav.Link> </Nav>:null
      const logout=(this.props.activeUser)? <Nav>  
          {shoppingcart}


       <Nav.Link onClick={this.props.logout}  href="/#/Logout">Logout  </Nav.Link> </Nav>:null
        return (
            <div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/#/">someName</Navbar.Brand>
 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
    <Nav className="mr-auto">

      <Nav.Link href="/#/Features">Features</Nav.Link>
      <Nav.Link href="/#/Pricing">Pricing</Nav.Link>
      <Nav.Link href="/#/About">About</Nav.Link>


      
    </Nav>
    {login}
    {logout}
  </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}
