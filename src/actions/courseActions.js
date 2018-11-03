import * as types from "./actionTypes";
import courseApi from "../api/mockCourseApi";
export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourseSuccess(savedCourse) {
  return { type: types.CREATE_COURSE_SUCCESS, savedCourse };
}

export function updateCourseSuccess(updatedCourse) {
  return { type: types.UPDATE_COURSE_SUCCESS, updatedCourse };
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi
      .getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function saveCourse() {
  return function(dispatch, getState) {
    return courseApi
    .saveCourse()
    .then(savedCourse => {
      dispatch(createCourseSuccess(savedCourse));
    })
    .catch(error => {
      throw error;
    });
  };
}
