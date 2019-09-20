import ActionTypes from "../constants/ActionTypes";

const URL_BASE = "http://localhost:3000/";
const URL_QUEUE = URL_BASE + "queue";
const URL_TESTS = URL_BASE + "tests";

function onChange(onChangeObj) {
  return { type: "ON_CHANGE", payload: onChangeObj };
}

function fetchedQueue(snippets) {
  return { type: "FETCHED_QUEUE", payload: snippets };
}

function selectedSnippet(snippet) {
  return { type: "SELECTED_SNIPPET", payload: snippet };
}

function savedTest(t) {
  return { type: "SAVED_TEST", payload: t };
}

function fetchingQueue() {
  return (dispatch, getState) => {
    fetch(URL_QUEUE)
      .then(res => res.json())
      .then(snippets => {
        dispatch(fetchedQueue(snippets));
      })
      .then(() => {
        dispatch(
          selectedSnippet(getState().test.queue[getState().test.snippetIndex])
        );
      });
  };
}

function savingTest(testToSave) {
  return (dispatch) => {
    fetch(URL_TESTS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testToSave)
    })
      .then(res => res.json())
      .then(t => dispatch(savedTest(t)));
  };
}

const showModal = ({ modalProps, modalType }) => dispatch => {
  dispatch({
    type: ActionTypes.SHOW_MODAL,
    modalProps,
    modalType
  });
};

const hideModal = () => dispatch => {
  dispatch({
    type: ActionTypes.HIDE_MODAL
  });
};

export {
  onChange,
  fetchedQueue,
  selectedSnippet,
  fetchingQueue,
  showModal,
  // savedTest,
  savingTest,
  hideModal
};
