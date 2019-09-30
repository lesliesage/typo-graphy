import store from "../redux/store";
import {
  URL_QUEUE,
  URL_TESTS,
  URL_MEDIANS,
  URL_PROFILE,
  URL_LOGIN
} from "../constants/constants";

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

// function modalType(type) {
//   return { type: "MODAL_TYPE", payload: type };
// }

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

// function settingModalType(type) {
//   return dispatch => {
//     dispatch(modalType(type));
//   };
// }

function updateUser(user){
  return { type: "USER", payload: user }
}

function loading() {
  return { type: "LOADING", payload: false };
}

const loginUser = (username, password) => {
  return (dispatch) => {
    console.log(process.env.REACT_APP_API_ENDPOINT)
    dispatch(authenticatingUser())
    // fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/login`)
    fetch(URL_LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      // {user: {}, jwt: 'aaaaaaaaaaaaaaa.bbbbbbbbbbbbbbbbbbbbb.ccccccccccccccccccc'}
      .then(({ user, jwt }) => {
        localStorage.setItem('jwt', jwt)
        dispatch(setCurrentUser(user))
      })
      .catch(r => r.json().then(e => dispatch(failedLogin(e.message))))
      // .then((jsonResponse) => {
      //   localStorage.setItem('jwt', jsonResponse.jwt)
      //   dispatch(setCurrentUser(jsonResponse.user))
      // })
  }
}

const fetchCurrentUser = () => {
  // takes the token in localStorage and finds out who it belongs to
  return (dispatch) => {
    dispatch(authenticatingUser())
    fetch(URL_PROFILE, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(response => response.json())
      .then(({ user }) => dispatch(setCurrentUser(user)))
  }
}

const setCurrentUser = (userData) => ({
  type: 'SET_CURRENT_USER',
  payload: userData
})

const failedLogin = (errorMsg) => ({
  type: 'FAILED_LOGIN',
  payload: errorMsg
})

// tell our app we're currently fetching
const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' })

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
      .then(t => dispatch(savedTest(t)));
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
  updateUser,
  loading,
  loginUser,
  fetchCurrentUser,
  setCurrentUser,
  failedLogin,
  authenticatingUser,
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
  // modalType,
  openingModal,
  closingModal
  // settingModalType,
};
