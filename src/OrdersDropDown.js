import React, { Component } from 'react'
import { NavDropdown } from 'react-bootstrap'

export default class OrdersDropDown extends Component {
   constructor(props){
       super(props)
       this.state={
           selectedOrder:""
       }
   }
    render() { 
        let finalArr=[]
        let ordersArr=[]
        let awatingColor=(ordersArr.length>0)?"colorRed":""

          if(this.props.orders.length>0){

             for (let i = 0; i < this.props.orders.length; i++) {
                 const singalOrder = this.props.orders[i];
                 let orderedTo=singalOrder.orderedFrom.userName
                 if(singalOrder.newOrder[0].product.user===this.props.activeUser.userName && !ordersArr.includes(orderedTo)){
                     finalArr.push(<NavDropdown.Item  onClick={()=>this.props.getSelectedOrder(orderedTo)} href={`/#/order/${this.props.activeUser.userName}/${orderedTo}`}>{orderedTo}</NavDropdown.Item>)
                     ordersArr.push(orderedTo)
                     
                 }
                 
             }
         }
                 /*   finalArr.push*/ 
           
        
            
        
        return (
            <div>
                
                 <NavDropdown  title="awating orders" className={awatingColor} id="collasible-nav-dropdown ">
                     
                     {finalArr}
      </NavDropdown>
                
            </div>
        )
        }
    }