import React from 'react';
import Header from "./Header";
import PlayingField from "./PlayingField";
import './App.css';

const  App= ()=> {
    return (
        <div className = "App">
            <Header />
            <hr />
            <PlayingField />
        </div>
    );
}

export default App;
