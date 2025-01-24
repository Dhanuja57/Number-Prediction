import React, { useState } from 'react';
import './Game.css';
import Result from './Result';

const secnum = Math.floor(Math.random() * 10) + 1;

function Game() {
    const [term, setTerm] = useState("");

    const Change = (e) => {
        setTerm(e.target.value);
    };

    return (
        <div className="container">
            <div className='head'>
                <label htmlFor='term'>
                    Guess the number between 1 to 10: 
                </label>
            </div>
            <input
                id='term'
                type='text'
                name='term'
                onChange={Change}
            />
            <Result secnum={secnum} term={term} />
        </div>
    );
}

export default Game;
