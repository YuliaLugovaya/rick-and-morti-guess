import { mainTypes } from "./actionTypes"

export const addCharacterAC = (character) => ({
  type: mainTypes.ADD_CHARACTER,
  payload: character,
})

export const rightAnswersAC = (answer) => ({
  type: mainTypes.RIGHT_ANSWER,
  payload: answer,
})

export const falseAnswersAC = (answer) => ({
  type: mainTypes.FALSE_ANSWER,
  payload: answer,
})

export const getCharacterThunk = () => (dispatch) => {
  const random = Math.ceil(Math.random() * 826);
    fetch(`https://rickandmortyapi.com/api/character/${random}`)
      .then(data => data.json())
      .then(result => dispatch(addCharacterAC(result)));
}