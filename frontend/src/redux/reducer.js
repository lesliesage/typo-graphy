import { combineReducers } from "redux";

const initialState = {
  currentTestLanguage: null,
  queue: [],
  snippetIndex: 0,
  selectedSnippet: null,
  typedText: "",
  currentTestResults: []
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
    case "CHANGE_TYPED_TEXT":
      return { ...state, typedText: action.payload };
    case "ADD_TO_TEST_RESULTS":
      return {
        ...state,
        currentTestResults: state.currentTestResults.concat([action.payload])
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  test: testReducer
});

export default rootReducer;
