import { combineReducers } from "redux";

const initialUserState = {
  id: 0,
  username: "",
  email: "",
  loading: true,
  userData: null,
  errorMsg: ""
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "CURRENT_USER":
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email
      };
    case "LOADING":
      return { ...state, loading: false };
    case "SET_CURRENT_USER":
      return { ...state, userData: action.payload };
    case "FAILED_LOGIN":
      return { ...state, errorMsg: action.payload };
    default:
      return state;
  }
};

const initialTestState = {
  queue: [],
  selectedSnippet: null,
  used: [],
  typedText: "",
  snippetIndex: 0,
  currentTestResults: [],
  isAccurate: true,
  isComplete: false,
  testSummary: {},
  tempTestStore: null
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
    case "ON_NEXT":
      return {
        ...state,
        typedText: "",
        currentTestResults: [],
        isAccurate: true,
        isComplete: false
      };
    case "TEMP_TEST_STORE":
      return { ...state, tempTestStore: action.payload };
    case "SAVED_TEST":
      return { ...state, testSummary: action.payload, isComplete: false };
    case "SNIPPET_INDEX":
      return { ...state, snippetIndex: action.payload };
    default:
      return state;
  }
};

const initialModalState = {
  modalStatus: false
  // modalType: ""
};

const modalReducer = (state = initialModalState, action) => {
  switch (action.type) {
    case "MODAL_STATUS":
      return { ...state, modalStatus: action.payload };
    // case "MODAL_TYPE":
    //   return { ...state, modalType: action.payload };
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
  user: userReducer,
  test: testReducer,
  modal: modalReducer,
  stats: statsReducer
});

export default rootReducer;
