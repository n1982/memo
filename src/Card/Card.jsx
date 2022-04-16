import React from 'react';
import classNames from "classnames";
import './Card.css'

let Card = ({flip = false}) => {
    let cardClassName = classNames('card', {flip})
    return (
        <div className = 'card__container'>
            <div className = {cardClassName}>
                <div className = 'card__front' />
                <div className = 'card__back' />
            </div>
        </div>
    );
}

export default Card;