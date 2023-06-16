import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CharDetails from "../charDetails/charDetails";
import ItemList from "../itemList";
import ErrorMessage from "../errorMessage";
import './characterPage.sass'

export default class CharacterPage extends Component {
    
    state = {
        selectedChar: 130,
        error: false
    }
    
    onSelectedChar = (id) => {
        this.setState({
            selectedChar: id
        });
    }
    
    componentDidCatch() {
        this.setState({
            error: true
        });
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <>
                <Row>
                    <Col md='6'>
                        <ItemList onSelectedChar={this.onSelectedChar} />
                    </Col>
                    <Col md='6'>
                        <CharDetails charId={this.state.selectedChar} />
                    </Col>
                </Row>
            </>
        );
    };
}
