import React, { Component } from 'react'
import { NavDropdown } from 'react-bootstrap'

export default class ShoppingCart extends Component {
       
    render() {
        for (let i = 0; i < this.props.products.length; i++) {
            const element = this.props.products[i];
            
            
        }
        return (
            <div>
                 <NavDropdown title="shopping cart" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
                
            </div>
        )
    }
}
