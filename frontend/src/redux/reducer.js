import { combineReducers } from "redux";

const typedTextReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_TYPED_TEXT":
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

const rootReducer = combineReducers({
  typedText: typedTextReducer,
  queue: queueReducer
});

export default rootReducer;
