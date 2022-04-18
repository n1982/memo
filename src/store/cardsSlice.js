import {createSlice} from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: [
            {
                id: 1,
                color: 'red',
                flip: false,
                disabled: false
            },
            {
                id: 2,
                color: 'green',
                flip: false,
                disabled: false
            },
            {
                id: 3,
                color: 'blue',
                flip: false,
                disabled: false
            },
            {
                id: 4,
                color: 'yellow',
                flip: false,
                disabled: false
            },
            {
                id: 5,
                color: 'red',
                flip: false,
                disabled: false
            },
            {
                id: 6,
                color: 'green',
                flip: false,
                disabled: false
            },
            {
                id: 7,
                color: 'blue',
                flip: false,
                disabled: false
            },
            {
                id: 8,
                color: 'yellow',
                flip: false,
                disabled: false
            },
            {
                id: 9,
                color: 'red',
                flip: false,
                disabled: false
            },
            {
                id: 10,
                color: 'green',
                flip: false,
                disabled: false
            },
            {
                id: 11,
                color: 'blue',
                flip: false,
                disabled: false
            },
            {
                id: 12,
                color: 'yellow',
                flip: false,
                disabled: false
            },
            {
                id: 13,
                color: 'red',
                flip: false,
                disabled: false
            },
            {
                id: 14,
                color: 'green',
                flip: false,
                disabled: false
            },
            {
                id: 15,
                color: 'blue',
                flip: false,
                disabled: false
            },
            {
                id: 16,
                color: 'yellow',
                flip: false,
                disabled: false
            },

        ],
        cardFirst: null,
        cardSecond: null,
    },
    reducers: {
        flipCard: (state, action) => {
            if (state.cardFirst === null) {
                state.cardFirst = {...action.payload}
                state.cards[action.payload.index].flip = true
            } else if (state.cardSecond === null) {
                state.cardSecond = {...action.payload}
                state.cards[action.payload.index].flip = true
            }
        },
        unFlipCard: (state, action) => {
            const firstIndex = action.payload.firstCard.index
            const secondIndex = action.payload.secondCard.index
            state.cards[firstIndex].flip = false
            state.cards[secondIndex].flip = false
            state.cardFirst = null;
            state.cardSecond = null;
        },

        disableCards: (state, action) => {
            const firstIndex = action.payload.firstCard.index
            const secondIndex = action.payload.secondCard.index
            state.cardFirst = null;
            state.cardSecond = null;
        },
    }
});

export const {flipCard, unFlipCard, disableCards} = cardsSlice.actions


export const unfliptAsync = (firstCard, secondCard) => (dispatch) => {
    console.log(firstCard, secondCard)
    setTimeout(() => {
        dispatch(unFlipCard({firstCard, secondCard}))
    }, 1500)
}

export default cardsSlice.reducer