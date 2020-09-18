import React, { useState, useEffect } from 'react';
import {deck, Card} from './type'

const Deck:React.FC = (props) => {

    const [mainDeck, setMainDeck] = useState<Card[]>(deck)
    const [mainDeckLenght, setMainDeckLenght] = useState<number>(mainDeck.length)
    const [leftDeck, setLeftDeck] = useState<Card[]>([])
    const [rightDeck, setRightDeck] = useState<Card[]>([])

    const shuffleDeck = (array:any) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    useEffect(() => {
        shuffleDeck(mainDeck)
    }, [])
    const handleDrawLeft = () => {
        var leftDeckCopy = leftDeck;
        var mainDeckCopy = mainDeck;
        var mainDeckLenghtCopy = mainDeckLenght;

        if(mainDeck.length === 0){
            alert('There isn`t card left :[')
        }

        var newCard = mainDeckCopy.pop();
        leftDeckCopy.push(newCard || {} as Card)

        setLeftDeck(leftDeckCopy)
        setMainDeck(mainDeckCopy)
        setMainDeckLenght(mainDeckLenghtCopy-1)
    }

    const handleDrawRight = () => {
        var rightDeckCopy = rightDeck;
        var mainDeckCopy = mainDeck;
        var mainDeckLenghtCopy = mainDeckLenght;

        if(mainDeck.length === 0){
            alert('There isn`t card left :[')
        }
        var newCard = mainDeckCopy.pop();
        rightDeckCopy.push(newCard || {} as Card)
        
        setRightDeck(rightDeckCopy)
        setMainDeck(mainDeckCopy)
        setMainDeckLenght(mainDeckLenghtCopy-1)
    }

  return (
    <div className="container">
        <div className="deck-container">
            <span>{mainDeckLenght}</span>
        </div>
        <div className="hands-container">
            <div className="left-hand-container">
                <button className="btn btn-green" onClick={(e) => handleDrawLeft()}>Draw Card</button>
                <ul className="list-hand">
                    {
                        leftDeck.map((card) => {
                            return (
                                <li key={card.value}>
                                    value: {card.value}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="right-hand-container">
                <button className="btn btn-orange" onClick={(e) => handleDrawRight()}>Draw Card</button>
                <ul className="list-hand">
                    {
                        rightDeck.map((card) => {
                            return (
                                <li key={card.value}>
                                    value: {card.value}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Deck;
