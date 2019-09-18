import { combineReducers } from "redux";

const currentTestLanguageReducer = (state = null, action) => {
  switch (action.type) {
    case "CHANGED_LANGUAGE_SELECTION":
      return action.payload;
    default:
      return state;
  }
};

const queueReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_QUEUE":
      return action.payload;
    default:
      return state;
  }
};

const snippetIndexReducer = (state = 0, action) => {
  switch (action.type) {
    case "NEXT_SNIPPET":
      return action.payload;
    default:
      return state;
  }
};

const selectedSnippetReducer = (state = null, action) => {
  switch (action.type) {
    case "SELECTED_SNIPPET":
      return action.payload;
    default:
      return state;
  }
};

const typedTextReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_TYPED_TEXT":
      return action.payload;
    default:
      return state;
  }
};

const currentTestResultsReducer = (state = [], action) => {
  switch (action.type) {
    case "CHANGED_INPUT":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  currentTestLanguage: currentTestLanguageReducer,
  queue: queueReducer,
  snippetIndex: snippetIndexReducer,
  selectedSnippet: selectedSnippetReducer,
  typedText: typedTextReducer,
  currentTestResults: currentTestResultsReducer
});

export default rootReducer;
