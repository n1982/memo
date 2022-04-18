import React, {useEffect} from 'react';
import classNames from "classnames";
import './Card.css'
import {useDispatch, useSelector} from "react-redux";
import {flipCard, unFlipCard} from "../store/cardsSlice";

let Card = ({id, color, flip, disabled, index}) => {

    const dispatch = useDispatch()
    let cardClassName = classNames('card', {flip})
    let cardBackClassName = classNames('card__back', `${color}`)

    return (
        <div className = 'card__container' onClick = {() =>{
            if (!flip) dispatch(flipCard({index, color}))}
        }>
            <div className = {cardClassName}>
                <div className = 'card__front' />
                <div className = {cardBackClassName} />
            </div>
        </div>
    );
}

export default Card;