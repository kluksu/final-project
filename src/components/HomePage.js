import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardsPage from './CardsPage'
import MyCarousel from './MyCarousel'

export default class HomePage extends Component {
    componentDidMount(){
        console.log(this.props.products)
    }

    render() {
        return (
            <div>
                <div fade    className=" d-flex   w-30">
                    <Container>
                    <Row>        
                    <Col lg={12} xl={4} md={12} sm={12} xs={12}> <MyCarousel ></MyCarousel></Col> 
                    <Col lg={12} xl={4} md={12} sm={12} xs={12}> <MyCarousel></MyCarousel></Col>
                    <Col lg={12} xl={4} md={12} sm={12} xs={12}> <MyCarousel></MyCarousel></Col>     
                    </Row>   
                    <Row>
                        <CardsPage className="productsGallery" activeUser={this.props.activeUser} products={this.props.products}></CardsPage>
                    </Row>
                    </Container>
  

              </div>

            </div>
        )
    }
}
