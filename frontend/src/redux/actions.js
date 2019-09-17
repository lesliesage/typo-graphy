// action creators
const URL = "http://localhost:3000/queue";

function changeTypedText(value) {
  return { type: "CHANGE_TYPED_TEXT", payload: value };
}

function fetchedQueue(snippets) {
  return { type: "FETCHED_QUEUE", payload: snippets };
}

// function selectedSnippet(snippet) {
//   return { type: "SELECTED_SNIPPET", payload: snippet };
// }

function fetchingQueue() {
  return dispatch => {
    fetch(URL)
      .then(res => res.json())
      .then(snippets => {dispatch(fetchedQueue(snippets))})
      };
  };

export { changeTypedText, fetchedQueue, fetchingQueue };
