import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CharDetails from "../charDetails/charDetails";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import Header from "../header";
import './app.sass';

export default class App extends Component {

    state = {
        randomChar: true
    }

    toggleRandomBlock = () => {
        this.setState({
            randomChar: !this.state.randomChar
        });
        console.log('CHANGE!!');
    }

    render() {
        
        const randomBlock = this.state.randomChar ? <RandomChar /> : null;
        
        const toggleButton = this.state.randomChar ? "Hide" : "Show";

        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {randomBlock}
                            <button
                                className='random-char-button'
                                onClick={this.toggleRandomBlock}
                            >{toggleButton} Random Character</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}