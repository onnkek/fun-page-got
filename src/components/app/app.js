import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import RandomChar from "../randomChar";
import Header from "../header";
import ErrorMessage from "../errorMessage";
import './app.sass';
import CharacterPage from "../characterPage/characterPage";

export default class App extends Component {

    state = {
        randomChar: true,
        error: false
    }

    componentDidCatch() {
        console.log('ХУЕТА СЛУЧИЛАСЯ!!!');
        this.setState({
            error: true
        });
    }

    toggleRandomBlock = () => {
        this.setState((state) => {
            return {
                randomChar: !state.randomChar
            }
        });
        console.log('CHANGE!!');
    }

    render() {

        const randomBlock = this.state.randomChar ? <RandomChar /> : null;

        const toggleButton = this.state.randomChar ? "Hide" : "Show";

        if (this.state.error) {
            return <ErrorMessage />
        }

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
                    <CharacterPage />
                    <CharacterPage />
                    <CharacterPage />
                </Container>
            </>
        );
    }
}