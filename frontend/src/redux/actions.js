import store from "../redux/store";

const URL_BASE = "http://localhost:3000/";
const URL_QUEUE = URL_BASE + "queue";
const URL_TESTS = URL_BASE + "tests";
const URL_MEDIANS = URL_BASE + "medians";

function onChange(onChangeObj) {
  return { type: "ON_CHANGE", payload: onChangeObj };
}

function onNext() {
  return { type: "ON_NEXT" };
}

function fetchedQueue(snippets) {
  return { type: "FETCHED_QUEUE", payload: snippets };
}

function selectedSnippet(snippet) {
  return { type: "SELECTED_SNIPPET", payload: snippet };
}

function usedSnippets(arr) {
  return { type: "USED_SNIPPETS", payload: arr };
}

function savedTest(t) {
  return { type: "SAVED_TEST", payload: t };
}

function modalStatus(status) {
  return { type: "MODAL_STATUS", payload: status };
}

function modalType(type) {
  return { type: "MODAL_TYPE", payload: type };
}

function openingModal() {
  return dispatch => {
    dispatch(modalStatus(true));
  };
}

function closingModal() {
  return dispatch => {
    dispatch(modalStatus(false));
  };
}

function settingModalType(type) {
  return dispatch => {
    dispatch(modalType(type));
  };
}

function fetchingQueue() {
  return dispatch => {
    fetch(URL_QUEUE)
      .then(res => res.json())
      .then(snippets => {
        dispatch(fetchedQueue(snippets));
      })
      .then(() => {
        dispatch(selectingSnippet());
      });
  };
}

function savingTest(testToSave) {
  return dispatch => {
    fetch(URL_TESTS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testToSave)
    })
      .then(res => res.json())
      .then(t => dispatch(savedTest(t)))
  };
}

function nextIndex() {
  return dispatch => {
    const queue = store.getState().test.queue
      ? store.getState().test.queue
      : null;
    const queueIndeces = queue ? [...Array(queue.length).keys()] : null;
    let usedIndeces = store.getState().test.used;
    if (queueIndeces.length === usedIndeces.length) {
      usedIndeces = [];
    }
    const unusedIndeces = queueIndeces.filter(el => !usedIndeces.includes(el));
    const nextSnippetIndex =
      unusedIndeces[Math.floor(Math.random() * unusedIndeces.length)];
    usedIndeces.push(nextSnippetIndex);
    const nextSnippet = queue[nextSnippetIndex];
    dispatch(usedSnippets(usedIndeces));
    dispatch(snippetIndex(snippetIndex));
    dispatch(selectedSnippet(nextSnippet));
  };
}

function snippetIndex(i) {
  return { type: "SNIPPET_INDEX", payload: i };
}

function selectingSnippet() {
  return dispatch => {
    const queue = store.getState().test.queue
      ? store.getState().test.queue
      : null;
    const queueIndeces = queue ? [...Array(queue.length).keys()] : null;
    let usedIndeces = [];
    usedIndeces = [];
    const nextSnippetIndex =
      queueIndeces[Math.floor(Math.random() * queueIndeces.length)];
    usedIndeces.push(nextSnippetIndex);
    const nextSnippet = queue[nextSnippetIndex];
    dispatch(usedSnippets(usedIndeces));
    dispatch(snippetIndex(snippetIndex));
    dispatch(selectedSnippet(nextSnippet));
  };
}

function fetchingMedians() {
  return dispatch => {
    fetch(URL_MEDIANS)
      .then(res => res.json())
      .then(medianSet => {
        dispatch(fetchedMedians(medianSet));
      });
  };
}

function fetchedMedians(medianSet) {
  return { type: "FETCHED_MEDIANS", payload: medianSet };
}

export {
  fetchingQueue,
  fetchedQueue,
  selectingSnippet,
  selectedSnippet,
  nextIndex,
  snippetIndex,
  usedSnippets,
  onChange,
  onNext,
  savingTest,
  fetchingMedians,
  modalStatus,
  modalType,
  openingModal,
  closingModal,
  settingModalType
};
