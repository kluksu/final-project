import React, { Component } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import CardsPage from './CardsPage'

import SmartSearch from './SmartSearch'

export default class HomePage extends Component {
    constructor(props){
        super(props)
        this.state={
            CardsArr:[],
            selectedStore:""

        }
    }
 

    render() {
        return (
            <div>
                <div fade    className=" d-flex   w-30">
                    <Container>
                    <Row>
                        <CardsPage className="productsGallery" getStore={this.props.getStore}  getText={this.props.getText} searchText={this.props.searchText} activeUser={this.props.activeUser} products={this.props.products}></CardsPage>
                    </Row>
                    </Container>
  

              </div>

            </div>
        )
    }
}
