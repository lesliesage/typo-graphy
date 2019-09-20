import ActionTypes from "../constants/ActionTypes";

const URL_BASE = "http://localhost:3000/";
const URL_QUEUE = URL_BASE + "queue";
const URL_TESTS = URL_BASE + "tests"; // or "tests/index" ?

function onChange(onChangeObj) {
  return { type: "ON_CHANGE", payload: onChangeObj };
}

function fetchedQueue(snippets) {
  return { type: "FETCHED_QUEUE", payload: snippets };
}

function selectedSnippet(snippet) {
  return { type: "SELECTED_SNIPPET", payload: snippet };
}

function savedTest(testToSave) {
  console.log("inside savedTest in actions");
  return { type: "SAVED_TEST", payload: testToSave };
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
  console.log("inside saving test in actions");
  console.log(testToSave);
  //info: {title: "", name: "", etc.}
  return (dispatch, getState) => {
    //need access to the current state
    //getState().searchText => would give your your searchText state
    fetch(URL_TESTS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testToSave)
    })
      .then(res => console.log(res))
      // .then(res => res.json())
      .then(t => {
        console.log(t);
        dispatch(savedTest(testToSave));
      });
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
