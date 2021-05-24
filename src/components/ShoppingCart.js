import React, { Component } from 'react'
import { NavDropdown } from 'react-bootstrap'

export default class ShoppingCart extends Component {
       ///////////
    render() {
       let  storesArr=[]
       let finalArr=[]
              if(this.props.cart.length>0){
              
         for (let j = 0; j < this.props.cart.length; j++) {
                const cartItem = this.props.cart[j];
                console.log(cartItem)
                 if ((!storesArr.includes(cartItem.product.user)) && (this.props.activeUser.userName===cartItem.activeUser.userName)){
                    finalArr.push(<NavDropdown.Item onClick={()=>{this.props.cartSelect({cartStore:cartItem.product.user})}}  href={`#/cart+${cartItem.product.user}+${this.props.activeUser.userName}`}>{cartItem.product.user}</NavDropdown.Item>)
                    storesArr.push(cartItem.product.user)
                }
            }
        } 
        
            
        
        return (
            <div>
                 <NavDropdown title="shopping cart" id="collasible-nav-dropdown">
             {finalArr}
      </NavDropdown>
                
            </div>
        )
    }
}
