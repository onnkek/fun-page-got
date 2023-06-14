import React, { Component } from "react";
import './itemList.sass';

export default class ItemList extends Component {
    render() {
        return (
            <>
                <div className="item-list rounded">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between">
                            John Snow
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            Brandon Stark
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            Geremy
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}