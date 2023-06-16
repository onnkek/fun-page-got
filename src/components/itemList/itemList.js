import React, { Component } from "react";
import GOTService from '../../services/GOTService';
import './itemList.sass';
import Spinner from "../spinner";

export default class ItemList extends Component {

    gotService = new GOTService();

    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then(charList => {
                this.setState({
                    charList
                });
            });
    }

    renderCharList(array) {
        return array.map((item, i) => {
            return (
                <li
                    key={i}
                    className="list-group-item d-flex justify-content-between"
                    onClick={() => this.props.onSelectedChar(41 + i)}
                    >
                    {item.name}
                </li>
            );
        });
    }

    render() {

        const { charList } = this.state;

        if (!charList) {
            return <Spinner />
        }

        const content = this.renderCharList(charList);

        return (
            <>
                <div className="item-list rounded">
                    <ul className="list-group list-group-flush">
                        {content}
                    </ul>
                </div>
            </>
        );
    }
}