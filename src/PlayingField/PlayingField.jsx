import React from 'react';
import Card from "../Card";
import './PlayingField.css'

function PlayingField(props) {
    return (
        <div className='playing-field__container'>
            <div className = 'playing-field'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default PlayingField;