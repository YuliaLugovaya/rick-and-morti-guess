import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CharacterCard from '../CharacterCard/CharacterCard';

function RightAnswers(props) {
  const { rightAnswers } = useSelector((store) => store.rightAnswersStore);

  return (
    <main className='main'>
      <div className='answers-container'>
        <h3 className='answers-title'>Right answers</h3>
        <div className='answers-wrapper'>
          {
            rightAnswers && rightAnswers.map((character) =>
              <div key={character.id} className="character-answers card">
                <CharacterCard image={character.image} species={character.species} name={character.name} status={character.status} gender={character.gender} location={character.location} episode={character.episode} />
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