import * as types from "./actionTypes";
import AuthorApi from "../api/mockAuthorApi";
import { beginAjaxCall } from "./ajaxStatusActions";
export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return async function(dispatch) {
    dispatch(beginAjaxCall());
    try {
      const authors = await AuthorApi.getAllAuthors();
      dispatch(loadAuthorsSuccess(authors));
    } catch (error) {
      throw error;
    }
  };
}
