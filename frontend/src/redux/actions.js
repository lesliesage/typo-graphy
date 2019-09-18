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
        dispatch(selectedSnippet(getState().test.queue[getState().test.snippetIndex]));
      });
  };
}

export { onChange, fetchedQueue, selectedSnippet, fetchingQueue };