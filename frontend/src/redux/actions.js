// action creators
const URL = "http://localhost:3000/queue";

function changeTypedText(value) {
  return { type: "CHANGE_SEARCH_TEXT", payload: value };
}

function fetchedQueue(snippets) {
  return { type: "FETCHED_QUEUE", payload: snippets };
}

function fetchingQueue() {
  return dispatch => {
    fetch(URL)
      .then(res => res.json())
      .then(snippets => {
        dispatch(fetchedQueue(snippets));
      });
  };
}

export {
  changeTypedText,
  fetchedQueue,
  fetchingQueue
};
