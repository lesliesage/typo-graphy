import ActionTypes from "../constants/ActionTypes";

const URL = "http://localhost:3000/queue";

function onChange(onChangeObj) {
  return { type: "ON_CHANGE", payload: onChangeObj };
}

function fetchedQueue(snippets) {
  return { type: "FETCHED_QUEUE", payload: snippets };
}

function selectedSnippet(snippet) {
  return { type: "SELECTED_SNIPPET", payload: snippet };
}

function fetchingQueue() {
  return (dispatch, getState) => {
    fetch(URL)
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
  hideModal
};
