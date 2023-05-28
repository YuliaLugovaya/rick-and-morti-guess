import React from 'react';

function CharacterCard( { image, species, name, status, gender, location, episode } ) {
  return (
    <>
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator image" src={image} alt="character" />
      </div>
      <div className="card-content">
        <div className='card-title-wrapper'>
          <span className="card-title grey-text text-darken-4">{name}</span>
          <i className="material-icons right activator card-title">more_vert</i>
        </div>
        <p><span className='subtitle'>Species:</span> {species}</p>
      </div>
      <div className="card-reveal">
        <div className="card-title grey-text text-darken-4"><span>{name}</span><i className="material-icons right">close</i></div>
        <p><span className='subtitle'>Status:</span> {status}</p>
        <p><span className='subtitle'>Gender:</span> {gender}</p>
        <p><span className='subtitle'>Location:</span> {location.name}</p>
        <p><span className='subtitle'>Episode:</span> {episode.map((el) => (episode.length === 1 || episode.indexOf(el) === episode.length - 1) ? el.slice(40) : el.slice(40) + ', ')}</p>
      </div>
    </>
  );
}

export default CharacterCard;