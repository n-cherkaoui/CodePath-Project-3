import React from "react";
import { useState } from "react";
import FlippableCard from './components/flippable-card.jsx'
import './App.css'


const App = () => {
  const cards = [{question: "1+1", answer: "2"}, {question: "2+2", answer: "4"}, {question: "3+3", answer: "6"}, {question: "4+4", answer: "8"}, {question: "5+5", answer: "10"}]
  const [card, setCard] = useState(0)
  var [reviewedCards, setReviewedCards] = useState(new Set([card]))

  const changeCard = () => {
    var newCard = card

    if (reviewedCards.size == cards.length) {
      // TODO: Check if this is O(1)
      reviewedCards.clear()
      reviewedCards.add(card)
    }
    
    // TODO: Optimize from O(cards.length) -> O(1)
    while (reviewedCards.has(newCard)){
      newCard = Math.floor(Math.random()*cards.length);
    }

    setCard(newCard)
    reviewedCards.add(newCard)
  }

  return (
    <div className="app">
      <h1 className="heading">Addition Flashcards</h1>
      <h2 className="desc">Cards for learning basic addition</h2>
      <p className="cardCount">Cards: {cards.length}</p>
      <FlippableCard front={cards[card].question} back={cards[card].answer}/>
      <button className="next" onClick={changeCard}><i className="fa-solid fa-arrow-right"></i></button>
    </div>
  )
}

export default App

// TODO: Large Samosa that the user can click to harvest one at a time
// TODO: Samosa counter
// TODO: Upgrades that increase power of cursor at certain thresholds
// TODO: When purchasing an upgrade, the user loses samosas
// TODO: Decrease the size of the large samosa on click