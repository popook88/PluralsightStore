import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function ajaxCallFinished(type) {
  if (type == types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(type)) {
    return true;
  }
  return false;
}

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) == "_SUCCESS";
}
export default function ajaxStatusReducer(
  state = initialState.ajaxCallsInProgress,
  action
) {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (ajaxCallFinished(action.type)) {
    return state - 1;
  }
  return state;
}
