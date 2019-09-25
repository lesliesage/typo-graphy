import { combineReducers } from "redux";
import ActionTypes from "../constants/ActionTypes";

const initialTestState = {
  // currentTestLanguage: null,
  queue: [],
  selectedSnippet: null,
  used: [],
  typedText: "",
  snippetIndex: 0,
  currentTestResults: [],
  isAccurate: true,
  isComplete: false,
  testSummary: {}
};

const testReducer = (state = initialTestState, action) => {
  switch (action.type) {
    case "CHANGED_LANGUAGE_SELECTION":
      return { ...state, currentTestLanguage: action.payload };
    case "FETCHED_QUEUE":
      return { ...state, queue: action.payload };
    case "SELECTED_SNIPPET":
      return { ...state, selectedSnippet: action.payload };
    case "USED_SNIPPETS":
      return { ...state, used: action.payload };
    case "ON_CHANGE":
      return {
        ...state,
        typedText: action.payload.typedText,
        currentTestResults: state.currentTestResults.concat([
          action.payload.resultSubArray
        ]),
        isAccurate:
          state.selectedSnippet.code.slice(
            0,
            action.payload.typedText.length
          ) === action.payload.typedText,
        isComplete:
          state.selectedSnippet.code.length === action.payload.typedText.length
      };
    case "SAVED_TEST":
      return { ...state, testSummary: action.payload, isComplete: false };
    case "SNIPPET_INDEX":
      return { ...state, snippetIndex: action.payload };
    default:
      return state;
  }
};

const initialModalState = {
  modalType: null,
  modalProps: {}
  // modalOpen: false  // this is probably wrong
};

const modalReducer = (state = initialModalState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL:
      return {
        modalProps: action.modalProps,
        modalType: action.modalType,
        type: action.type
      };
    case ActionTypes.HIDE_MODAL:
      return initialModalState;
    default:
      return state;
  }
};

const initialStatsState = {
  medianSet: null
};

const statsReducer = (state = initialStatsState, action) => {
  switch (action.type) {
    case "FETCHED_MEDIANS":
      return { ...state, medianSet: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  test: testReducer,
  modal: modalReducer,
  stats: statsReducer
});

export default rootReducer;
