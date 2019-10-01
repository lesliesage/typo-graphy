import store from "../redux/store";
import {
  URL_QUEUE,
  URL_TESTS,
  URL_MEDIANS,
  URL_PROFILE
} from "../constants/constants";

export function onChange(onChangeObj) {
  return { type: "ON_CHANGE", payload: onChangeObj };
}

export function onNext() {
  return { type: "ON_NEXT" };
}

export function fetchedQueue(snippets) {
  return { type: "FETCHED_QUEUE", payload: snippets };
}

export function selectedSnippet(snippet) {
  return { type: "SELECTED_SNIPPET", payload: snippet };
}

export function usedSnippets(arr) {
  return { type: "USED_SNIPPETS", payload: arr };
}

export function savedTest(t) {
  return { type: "SAVED_TEST", payload: t };
}

export function modalStatus(status) {
  return { type: "MODAL_STATUS", payload: status };
}

export function openingModal() {
  return dispatch => {
    dispatch(modalStatus(true));
  };
}

export function closingModal() {
  return dispatch => {
    dispatch(modalStatus(false));
  };
}

export function updateUser(currentUser) {
  return { type: "CURRENT_USER", payload: currentUser };
}

export function loading() {
  return { type: "LOADING", payload: false };
}

export const fetchCurrentUser = () => {
  // takes the token in localStorage and finds out who it belongs to
  return dispatch => {
    // dispatch(authenticatingUser());  // is this supposed to dispatch a message?
    fetch(URL_PROFILE, {
      method: "GET",
      headers: {
        Authentication: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(({ user }) => dispatch(setCurrentUser(user)));
  };
};

export const setCurrentUser = userData => ({
  type: "SET_CURRENT_USER",
  payload: userData
});

export const failedLogin = errorMsg => ({
  type: "FAILED_LOGIN",
  payload: errorMsg
});

// tell our app we're currently fetching
export const authenticatingUser = () => ({ type: "AUTHENTICATING_USER" });

export function fetchingQueue() {
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

export function savingTest(testToSave) {
  return dispatch => {
    fetch(URL_TESTS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authentication: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(testToSave)
    })
      .then(res => res.json())
      .then(t => dispatch(savedTest(t)));
  };
}

export function nextIndex() {
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

export function snippetIndex(i) {
  return { type: "SNIPPET_INDEX", payload: i };
}

export function selectingSnippet() {
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

export function fetchingMedians() {
  return dispatch => {
    fetch(URL_MEDIANS)
      .then(res => res.json())
      .then(medianSet => {
        dispatch(fetchedMedians(medianSet));
      });
  };
}

export function fetchedMedians(medianSet) {
  return { type: "FETCHED_MEDIANS", payload: medianSet };
}
