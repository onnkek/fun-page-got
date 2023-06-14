import React from "react";
import { Col, Container, Row } from "reactstrap";
import CharDetails from "../charDetails/charDetails";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import Header from "../header";

export default function App() {
    return (
        <>
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{ size: 5, offset: 0 }}>
                        <RandomChar />
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