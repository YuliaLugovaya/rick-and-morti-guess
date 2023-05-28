import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function RightAnswers(props) {
  const { rightAnswers } = useSelector((store) => store.rightAnswersStore);

  return (
    <main className='main'>
      <div className='answers-container'>
        <div className='answers-wrapper'>
        {
          rightAnswers && rightAnswers.map((character) =>
            <div className='character-answers'>
              <img className='character-image' key={character.id} src={character.image} alt="character" />
              <div className='character-buttons'>
                <p className='answers-text'>Your answer: <span className='right-answer'>right</span> (this {character.species})</p>
              </div>
            </div>
          )
        }
        </div>
        <Link to={`/false_answers`}>
          <button type="button" className="btn waves-effect waves-light btn-add">False answers</button>
        </Link>
      </div>
    </main>
  );
}

export default RightAnswers;