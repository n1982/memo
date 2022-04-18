import React, {useEffect}from 'react';
import {useDispatch, useSelector} from "react-redux";
import {disableCards, unfliptAsync, shuffleCards} from "../store/cardsSlice";

import Card from "../Card";
import './PlayingField.css'

const PlayingField = () => {
    const cards = useSelector((state) => state.cards.cards)
    const firstCard = useSelector((state)=> state.cards.cardFirst)
    const secondCard = useSelector((state)=> state.cards.cardSecond)
    const gameRound = useSelector((state)=> state.cards.gameRound)
    const pairCards = useSelector((state)=> state.cards.pairCards)
    const dispatch = useDispatch()

    useEffect(()=>{
       if (!!firstCard && !!secondCard && firstCard?.color !== secondCard?.color){
            console.log('flip card')
               dispatch(unfliptAsync(firstCard, secondCard))
        } else if(!!firstCard && !!secondCard && firstCard?.color === secondCard?.color) {
            dispatch(disableCards({firstCard, secondCard}))
        }
    },[firstCard, secondCard]);

    useEffect(()=>{
        dispatch(shuffleCards())
    },[])

    return (
        <>
            <div className='information'>
            {pairCards>0 && <h3>Раунд №{gameRound}</h3>}
            {pairCards>0 &&<h3>Осталось найти {pairCards} пар</h3>}
            {pairCards===0 && <h3>Все пары найдены. Игра окончена</h3>}
            </div>
        <div className = 'playing-field__container'>
            <div className = 'playing-field'>
                {
                    cards.map((card, index) => (
                        <Card key = {card.id} index = {index} {...card} />
                    ))
                }

            </div>
        </div>
        </>
    );
}

export default PlayingField;