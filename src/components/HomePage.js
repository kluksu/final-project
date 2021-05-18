import React, { Component } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import CardsPage from './CardsPage'

import SmartSearch from './SmartSearch'

export default class HomePage extends Component {
    constructor(props){
        super(props)
        this.state={
            CardsArr:[],
        }
    }

    render() {
        return (
            <div>
                <div fade    className=" d-flex   w-30">
                    <Container>
                    <Row>
                        <CardsPage className="productsGallery" getText={this.props.getText} activeUser={this.props.activeUser} products={this.props.products}></CardsPage>
                    </Row>
                    </Container>
  

              </div>

            </div>
        )
    }
}
