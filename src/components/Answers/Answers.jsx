import React from 'react';
import { Link } from 'react-router-dom';
import rightAnswers from '../../assets/images/right_answers.jpg';
import falseAnswers from '../../assets/images/false_answers.jpg';

function Answers(props) {
  return (
    <main className='main'>
      <div className='answers-container'>
        <h3 className='answers-title'>Show answers</h3>
        <div className='button-answers'>
          <Link to={`/right_answers`}>
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator image" src={rightAnswers} alt="Right answers" />
              </div>
              <div className="card-content show-answers">
                <button type="button" className="btn waves-effect waves-light btn-add btn-answers">Right answers</button>
              </div>
            </div>
          </Link>
          <Link to={`/false_answers`}>
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator image" src={falseAnswers} alt="False answers" />
              </div>
              <div className="card-content show-answers">
                <button type="button" className="btn waves-effect waves-light btn-add btn-answers">False answers</button>
              </div>
            </div>
          </Link>
        </div>
      </div>

    </main >
  );
}

export default Answers;