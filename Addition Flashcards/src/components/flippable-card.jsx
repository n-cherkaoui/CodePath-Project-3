import './flippable-card.css';
import Card from './card/card';
import {CSSTransition} from 'react-transition-group';
import {useState} from 'react';
import questionsJson from './questions.json'
// import {levenshteinEditDistance} from 'levenshtein-edit-distance'

function FlippableCard(props) {
    const [showFront, setShowFront] = useState(true);
    const [card, setCard] = useState(0)
    // var [reviewedCards, setReviewedCards] = useState(new Set([card]))
    var [correctAnswer, setCheckedAnswer] = useState('')
    var [currAnswer, setCurrAnswer] = useState('')

    const nextCard = () => {
        setCard((card+1)%questionsJson.cards.length)
    }

    const prevCard = () => {
        var newCard = card - 1 < 0 ? questionsJson.cards.length-1 : card - 1;
        setCard(newCard);
    }

    const shuffle = () => {
        questionsJson.cards.sort(() => Math.random() - 0.5)
    }

    const checkAnswer = () => {
        if (showFront){
            // console.log(levenshteinEditDistance(questionsJson.cards[card].answer, currAnswer) / questionsJson.cards[card].answer.length)
            if (questionsJson.cards[card].answer == currAnswer) {
            setCheckedAnswer('correct')
            }
            else {
            setCheckedAnswer('wrong')
            }
        }
    }

    return(
        <div className="app">
        <h1 className="heading">Addition Flashcards</h1>
        <h2 className="desc">Cards for learning basic addition</h2>
        <p className="cardCount">Cards: {questionsJson.cards.length}</p>
        <div className="flippable-card-container">
                <CSSTransition
                    in={showFront}
                    timeout={300}
                    classNames='flip'
                >
                    <Card front={questionsJson.cards[card].question} back={questionsJson.cards[card].answer} onClick={() => {
                        setShowFront((v) => !v);
                    }}/>
                </CSSTransition>
            </div>
        <div className="guessContainer">
            <p>Guess the answer here: </p>
            <input className="guessBox" type="text" id={correctAnswer} onChange={e => setCurrAnswer(e.target.value)}></input>
            <button className="checkAnswer" onClick={checkAnswer}>Check</button>
        </div>
        <div className="navContainer">
        <button className="prev" onClick={prevCard}><i className="fa-solid fa-arrow-left"></i></button>
        <button className="next" onClick={nextCard}><i className="fa-solid fa-arrow-right"></i></button>
        <button className="shuffle" onClick={shuffle}>Shuffle</button>
        </div>
        </div>
    );
}

export default FlippableCard;