// action creators
const URL = "http://localhost:3000/queue";

function changeSearchText(value) {
  return { type: "CHANGE_SEARCH_TEXT", payload: value };
}

function updatingSnippet(info) {
  //info: {code: "", annotation: "", language_id: ...}
  return (dispatch, getState) => {
    //need access to the current state
    //getState().searchText => gives searchText state
    fetch(`http://localhost:3000/snippets/${info.snippetId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: info.code,
        annotation: info.annotation,
        language_id: info.language_id
      })
    })
      .then(res => res.json())
      .then(p => {
        dispatch(updatedSnippet(info));
      });
  };
}

//This works and will update our front end
function updatedSnippet({ code, annotation, languageID }) {
  return {
    type: "UPDATE_SNIPPET",
    payload: { code, annotation, languageID }
  };
}

function fetchedSnippets(snippets) {
  return { type: "FETCHED_SNIPPETS", payload: snippets };
}

function fetchingSnippets() {
  return dispatch => {
    fetch(URL)
      .then(res => res.json())
      .then(snippets => {
        dispatch(fetchedSnippets(snippets));
      });
  };
}

export {
  changeSearchText,
  updatedSnippet,
  updatingSnippet,
  fetchingSnippets
};
