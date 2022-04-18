import React from 'react';
import classNames from "classnames";
import './Card.css'
import {useDispatch} from "react-redux";
import {flipCard} from "../store/cardsSlice";

let Card = ({color, flip, index}) => {

    const dispatch = useDispatch()
    let cardContainerClassName = classNames('card__container', {flip})
    let cardClassName = classNames('card', {flip})
    let cardBackClassName = classNames('card__back', `${color}`)

    return (
        <div className ={cardContainerClassName}  onClick = {() =>{
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