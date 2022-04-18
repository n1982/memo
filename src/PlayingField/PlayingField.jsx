import React, {useEffect}from 'react';
import {useDispatch, useSelector} from "react-redux";
import {disableCards, unfliptAsync} from "../store/cardsSlice";

import Card from "../Card";
import './PlayingField.css'

const PlayingField = () => {
    const cards = useSelector((state) => state.cards.cards)
    const firstCard = useSelector((state)=> state.cards.cardFirst)
    const secondCard = useSelector((state)=> state.cards.cardSecond)
    const dispatch = useDispatch()

    useEffect(()=>{
       if (!!firstCard && !!secondCard && firstCard?.color !== secondCard?.color){
            console.log('flip card')
               dispatch(unfliptAsync(firstCard, secondCard))
        }
       else if(!!firstCard && !!secondCard && firstCard?.color === secondCard?.color) {
            dispatch(disableCards({firstCard, secondCard}))
        }
    },[firstCard, secondCard])
    return (
        <div className = 'playing-field__container'>
            <div className = 'playing-field'>
                {
                    cards.map((card, index) => (
                        <Card key = {card.id} index = {index} {...card} />
                    ))
                }

            </div>
        </div>
    );
}

export default PlayingField;