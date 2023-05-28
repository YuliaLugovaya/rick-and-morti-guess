import React from 'react';
import { Link } from 'react-router-dom';

function Answers(props) {
  return (
    <main className='main'>
      <div className='button-answers'>
        <Link to={`/right_answers`}>
          <button type="button" className="btn waves-effect waves-light btn-add btn-answers">Right answers</button>
        </Link>
        <Link to={`/false_answers`}>
          <button type="button" className="btn waves-effect waves-light btn-add btn-answers">False answers</button>
        </Link>
      </div>
    </main>
  );
}

export default Answers;