import React, { Component } from 'react'
import {  Nav, Navbar, NavDropdown,  } from 'react-bootstrap'
import MyAccount from './MyAccount'
import ShoppingCart from './ShoppingCart'

export default class MyNavBar extends Component {
  
  
    render() {
      const shoppingcart=(this.props.activeUser.accountType==="buyer")? <> <MyAccount></MyAccount><ShoppingCart></ShoppingCart></>:<><MyAccount></MyAccount><Nav.Link href="/#/uploaditems">upload items</Nav.Link></>

      const login=(!this.props.activeUser)? <Nav> <Nav.Link href="/#/signupSeller">signup</Nav.Link> <Nav.Link href="/#/Login">Login  </Nav.Link> </Nav>:null
      const logout=(this.props.activeUser)? <Nav>  
          {shoppingcart}


       <Nav.Link onClick={this.props.logout}  href="/#/Logout">Logout  </Nav.Link> </Nav>:null
        return (
            <div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/#/">React-Bootstrap</Navbar.Brand>
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
