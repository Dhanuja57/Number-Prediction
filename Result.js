import React from "react";

function Result({ secnum, term }) {
    let result;

    if (term) {
        const termNumber = Number(term); 
        if (isNaN(termNumber)) {
            result = 'Enter a valid number';
        } else if (secnum > termNumber) {
            result = 'Lower';
        } else if (secnum < termNumber) {
            result = 'Higher';
        } else {
            result = 'Wow, Correct!';
        }
    } else {
        result = 'Please enter a number';
    }

    return <h3>You Guessed: {result}</h3>;
}

export default Result;
