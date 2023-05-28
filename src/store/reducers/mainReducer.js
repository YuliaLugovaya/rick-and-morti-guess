import { mainTypes } from "../actions/actionTypes";

const initialState = {
  characters: [],
  rightAnswers: [],
  falseAnswers: [],
}

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case mainTypes.ADD_CHARACTER: {
      const newCharacter = action.payload;
      return { ...state, characters: [newCharacter] }
    }
    default: {
      return state;
    }
  }
}

export function rightAnswersReducer(state = initialState, action) {
  switch (action.type) {
    case mainTypes.RIGHT_ANSWER: {
      const rightAnswer = action.payload;
      return { ...state, rightAnswers: [...state.rightAnswers, rightAnswer] }
    }
    default: {
      return state;
    }
  }
}

export function falseAnswersReducer(state = initialState, action) {
  switch (action.type) {
    case mainTypes.FALSE_ANSWER: {
      const falseAnswer = action.payload;
      return { ...state, falseAnswers: [...state.falseAnswers, falseAnswer] }
    }
    default: {
      return state;
    }
  }
}