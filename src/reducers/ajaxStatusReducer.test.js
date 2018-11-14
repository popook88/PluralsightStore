import expect from "expect";
import ajaxStatusReducer from "./ajaxStatusReducer";
import * as ajaxStatusActions from "../actions/ajaxStatusActions";
import * as courseActions from "../actions/courseActions";
import * as authorActions from "../actions/authorActions";

describe("Ajax status Reducer", () => {
  it("it should increment state if BEGIN_AJAX_CALL action is passed in", () => {
    const initialState = 1;
    const action = ajaxStatusActions.beginAjaxCall();

    const newState = ajaxStatusReducer(initialState, action);
    expect(newState).toEqual(2);
  });

  it("it should decrement state if AJAX_CALL_ERROR is passed in", () => {
    const initialState = 1;
    const action = ajaxStatusActions.ajaxCallError();
    const newState = ajaxStatusReducer(initialState, action);
    expect(newState).toEqual(0);
  });

  it("it should decrement state if LOAD_COURSES_SUCCESS is passed in", () => {
    const initialState = 1;
    const action = courseActions.loadCoursesSuccess();
    const newState = ajaxStatusReducer(initialState, action);
    expect(newState).toEqual(0);
  });

  it("it should decrement state if CREATE_COURSE_SUCCESS is passed in", () => {
    const initialState = 1;
    const action = courseActions.createCourseSuccess();
    const newState = ajaxStatusReducer(initialState, action);
    expect(newState).toEqual(0);
  });

  it("it should decrement state if UPDATE_COURSE_SUCCESS is passed in", () => {
    const initialState = 1;
    const action = courseActions.updateCourseSuccess();
    const newState = ajaxStatusReducer(initialState, action);
    expect(newState).toEqual(0);
  });

  it("it should decrement state if LOAD_AUTHORS_SUCCESS is passed in", () => {
    const initialState = 1;
    const action = authorActions.loadAuthorsSuccess();
    const newState = ajaxStatusReducer(initialState, action);
    expect(newState).toEqual(0);
  });
});
