import React, { Component } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import CardsPage from './CardsPage'
import MyNavBar from './MyNavBar'

import SmartSearch from './SmartSearch'

export default class Store extends Component {
    constructor(props){
        super(props)
        this.state={
            CardsArr:[],
        }}
    render() {
        let storeProductsArr=[]
        for (let i = 0; i < this.props.products.length; i++) {
            const element = this.props.products[i];{
                if(element.user===this.props.selectedStore){
                storeProductsArr.push(element)}

            }
            
        }
        return (<>

            <div>
                <div fade    className=" d-flex   w-30">
                    <Row>
                        <CardsPage className="productsGallery" addCartItem={this.props.addCartItem} setBuyerQuantity={this.props.setBuyerQuantity} selectedProduct={this.props.selectedProduct} selectedStore={this.props.selectedStore} getText={this.props.getText} searchText={this.props.searchText} activeUser={this.props.activeUser} products={storeProductsArr}></CardsPage>
                    </Row>
  

              </div>

            </div></>
        )
    }
}
