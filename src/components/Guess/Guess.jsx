import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacterThunk } from '../../store/actions/mainActions';
import { rightAnswersAC } from '../../store/actions/mainActions';
import { falseAnswersAC } from '../../store/actions/mainActions';
import { Link } from 'react-router-dom';

function Guess(props) {

  const dispatch = useDispatch();
  const { characters } = useSelector((store) => store.mainStore);
  const { rightAnswers } = useSelector((store) => store.rightAnswersStore);
  const { falseAnswers } = useSelector((store) => store.falseAnswersStore);

  useEffect(() => {
    dispatch(getCharacterThunk());
  }, [dispatch])

  const getCharacter = () => {
    dispatch(getCharacterThunk());
  }

  const isHuman = () => {
    characters.forEach((character) => {
      if (rightAnswers.find((el) => el.id === character.id) || falseAnswers.find((el) => el.id === character.id)) {
        return;
      } else {
        if (character.species === 'Human') {
          dispatch(rightAnswersAC(character));
        } else {
          dispatch(falseAnswersAC(character));
        }
      }
    })
  }

  const isNotHuman = () => {
    characters.forEach((character) => {
      if (rightAnswers.find((el) => el.id === character.id) || falseAnswers.find((el) => el.id === character.id)) {
        return;
      } else {
        if (character.species === 'Human') {
          dispatch(falseAnswersAC(character));
        } else {
          dispatch(rightAnswersAC(character));
        }
      }
    })
  }

  return (
    <>
      <main className='main'>
        <div className='character-wrapper'>
          {
            characters && characters.map((character) =>
              <div key={character.id} className='character-container'>
                <img className='character-image' src={character.image} alt="character" />
                <div className='character-buttons'>
                  <button type="button" className="btn waves-effect waves-light btn-choice" onClick={isHuman}>Human</button>
                  <button type="button" className="btn waves-effect waves-light btn-choice" onClick={isNotHuman}>Not human</button>
                </div>
              </div>
            )
          }
          <div>
          <button type="button" className="btn waves-effect waves-light btn-choice btn-choice_nav" onClick={getCharacter}>Next character</button>
          <Link to={`/answers`}>
            <button className="btn waves-effect waves-light btn-choice btn-choice_nav">
              Show answers
            </button>
          </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Guess;