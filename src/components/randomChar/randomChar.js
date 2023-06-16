import React, { Component } from 'react';
import GOTService from '../../services/GOTService';
import './randomChar.sass';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class RandomChar extends Component {

    gotService = new GOTService();
    state = {
        char: {},
        loading: true
    }

    componentDidMount() {
        console.log('mounting');
        this.timerId = setInterval(this.updateCharacter, 1500);
    }
    componentDidUpdate() {
        // console.log('update');
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    componentDidCatch() {
        console.log('catch');
    }

    onCharacterLoaded = (char) => {
        this.setState({
            char,
            loading: false,
            error: false
        });
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        });
    }

    updateCharacter = () => {
        this.gotService.getCharacter(Math.floor(Math.random() * 140) + 25)
            .then(this.onCharacterLoaded)
            .catch(this.onError);
        // console.log('Update Console!');
        
    }

    toggleCharacter = () => {

    }

    render() {

        console.log('render');
        const { char, loading, error } = this.state;

        const content = loading ? <Spinner /> : error
            ? <ErrorMessage /> : <View char={char} />;



        return (
            <>
                <div className='random-block rounded'>
                    {content}
                </div>
            </>
        );
    }
}

const View = ({ char }) => {

    const { name, gender, born, died, culture } = char;

    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    );
}