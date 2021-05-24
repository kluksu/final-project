import React, { Component } from 'react'
import { Container,Jumbotron } from 'react-bootstrap'

export default class ThanksForRegistering extends Component {
    render() {
        return (
            <div className="thanks">
                <Container >
                <Jumbotron>
                    <h1>thank you for registering</h1>
                    <h2>please log in to see prices</h2>
                </Jumbotron>
                </Container>
            </div>
        )
    }
}
