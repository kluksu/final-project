import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';
import SmartSearch from './SmartSearch';

export default class CardsPage extends Component {
   constructor(props){
       super(props)
       this.state={
           CardsArr:[],
       }
   }
  

    render() {
        let  Arr=[]
       
        if(this.props.products.length>=1){
        for (let i = 0; i < this.props.products.length; i++) {
            const element = this.props.products[i];

        Arr.push( <Col xl={3} lg={4} md={6} sm={12}><ProductCard  activeUser={this.props.activeUser} product={element}></ProductCard></Col>)
            
      
    }

    return (<>
  <SmartSearch getText={this.props.getText} ></SmartSearch>
           <Row>
           {Arr}
           </Row>
           </>
    )
}else return          <SmartSearch getText={this.props.getText}></SmartSearch>


}
}
