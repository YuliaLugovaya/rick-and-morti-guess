import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function FalseAnswers(props) {
  const { falseAnswers } = useSelector((store) => store.falseAnswersStore);

  return (
    <main className='main'>
      <div className='answers-container'>
        <div className='answers-wrapper'>
          {
            falseAnswers && falseAnswers.map((character) =>
              <div className='character-answers'>
                <img className='character-image' key={character.id} src={character.image} alt="character" />
                <div className='character-buttons'>
                  <p className='answers-text'>Your answer: <span className='false-answer'>false</span> (this {character.species})</p>
                </div>
              </div>
            )
          }
        </div>
        <Link to={`/right_answers`}>
          <button type="button" className="btn waves-effect waves-light btn-add">Right answers</button>
        </Link>
      </div>
    </main>
  );
}

export default FalseAnswers;