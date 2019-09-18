import { combineReducers } from "redux";

const initialState = {
  currentTestLanguage: null,
  queue: [],
  snippetIndex: 0,
  selectedSnippet: null,
  typedText: "",
  currentTestResults: [],
  isAccurate: true,
  isComplete: false
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGED_LANGUAGE_SELECTION":
      return { ...state, currentTestLanguage: action.payload };
    case "FETCHED_QUEUE":
      return { ...state, queue: action.payload };
    case "NEXT_SNIPPET":
      return { ...state, snippetIndex: action.payload };
    case "SELECTED_SNIPPET":
      return { ...state, selectedSnippet: action.payload };
    case "ON_CHANGE":
      return {
        ...state,
        typedText: action.payload.typedText,
        currentTestResults: state.currentTestResults.concat([
          action.payload.resultSubArray
        ])
        // figure out isAccurate & isComplete
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  test: testReducer
});

export default rootReducer;
