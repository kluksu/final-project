import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MyCarousel from './MyCarousel'

export default class HomePage extends Component {

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
                    </Container>
  

              </div>

            </div>
        )
    }
}
