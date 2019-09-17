import { combineReducers } from "redux";

const searchTextReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.payload;
    default:
      return state;
  }
};

const snippetsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_SNIPPETS":
      return action.payload
    case "UPDATE_SNIPPET":
      return state.map(snippet => {
        if (snippet.id === action.payload.snippetId) {
          return {
            ...snippet,
            code: action.payload.code,
            annotation: action.payload.annotation,
            language_id: action.payload.language_id
          };
        } else {
          return snippet;
        }
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  snippets: snippetsReducer
});

export default rootReducer;
