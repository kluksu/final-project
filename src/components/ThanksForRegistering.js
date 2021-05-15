import React, { Component } from 'react'
import { Container,Jumbotron } from 'react-bootstrap'

export default class ThanksForRegistering extends Component {
    render() {
        return (
            <div>
                <Container>
                <Jumbotron>
                    <h1>thank you for registering</h1>
                    <h2>now you can</h2>
                </Jumbotron>
                </Container>
            </div>
        )
    }
}
