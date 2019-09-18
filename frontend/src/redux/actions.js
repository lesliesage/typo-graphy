const URL = "http://localhost:3000/queue";

function changeTypedText(typedText) {
  return { type: "CHANGE_TYPED_TEXT", payload: typedText };
}

function addToTestResults(resultSubArray) {
  return { type: "ADD_TO_TEST_RESULTS", payload: resultSubArray}
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
        dispatch(selectedSnippet(getState().queue[getState().snippetIndex]));
      });
  };
}

export { changeTypedText, addToTestResults, fetchedQueue, fetchingQueue };
