import React from 'react';
import defultImage from '../../assets/images/Rick_and_Morty.jpg';
import { Link } from 'react-router-dom';


function Main(props) {
  return (
    <>
      <main className='main'>
        <h2 className='pages-title'>Rick and Morty: Guess the characters</h2>
        <div className='home-wrapper'>
          <div className='home-items'>
            <img className='home-image' src={defultImage} alt="Rick_and_Morty" />
          </div>
          <div className='home-items'>
            <p className='home-text'>Rick and Morty is an American adult animated science-fiction sitcom. The show revolves around the adventures of the members of the Smith household, which consists of parents Jerry and Beth, their children Summer and Morty, and Beth's father, Rick Sanchez, who lives with them as a guest. The family lives outside of Seattle, Washington. The adventures of Rick and Morty, however, take place across an infinite number of realities, with the characters traveling to other planets and dimensions through portals and Rick's flying saucer.</p>
            <p className='home-text'>The rules of the game: when we press the button, we get a random image of a cartoon character. There are two buttons below the image, allowing you to select the "Human"/"Not Human" attribute. All correct and incorrect answers are recorded in the Show answers section.</p>
            <Link to={`/guess`}>
              <button className="btn waves-effect waves-light form-check-btn">
                Let's play!
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;