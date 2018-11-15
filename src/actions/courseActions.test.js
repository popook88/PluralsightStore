import expect from "expect";
import * as courseActions from "./courseActions";
import * as types from "./actionTypes";
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";

//test a sync action
describe("Course Actions", () => {
  describe("createCourseSuccess", () => {
    it("should create a CREATE_COURSE_SUCCESS action", () => {
      const course = { id: "clean-code", title: "Clean Code" };
      const expectedAction = {
        type: types.CREATE_COURSE_SUCCESS,
        savedCourse: course
      };
      const action = courseActions.createCourseSuccess(course);
      expect(action).toEqual(expectedAction);
    });
  });
  describe("updateCourseSuccess", () => {
    it("should create a UPDATE_COURSE_SUCCESS action", () => {
      const course = { id: "clean-code", title: "Clean Code" };
      const expectedAction = {
        type: types.UPDATE_COURSE_SUCCESS,
        updatedCourse: course
      };
      const action = courseActions.updateCourseSuccess(course);
      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it("should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses", done => {
    /*
      Here is an example to call nock
      nock('http://example.com/')
        .get('/courses')
        .reply(200, { body: { course: [{id: 'clean-code', title: 'Clean Code'}]}});
    */
    const expectedActions = [
      { type: types.BEGIN_AJAX_CALL },
      {
        type: types.LOAD_COURSES_SUCCESS,
        body: { courses: [{ id: "clean-code", title: "Clean Code" }] }
      }
    ];

    const store = mockStore({ courses: [] }, expectedActions);
    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    });
  });

  it("should create BEGIN_AJAX_CALL and CREATE_COURSE_SUCCESS when adding a course", done => {
    const courseToAdd = { title: "Clean Code" };
    const expectedActions = [
      { type: types.BEGIN_AJAX_CALL },
      {
        type: types.CREATE_COURSE_SUCCESS,
        body: { courses: [courseToAdd] }
      }
    ];

    const store = mockStore({ courses: [] }, expectedActions);
    store.dispatch(courseActions.saveCourse(courseToAdd)).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.CREATE_COURSE_SUCCESS);
      done();
    });
  });

  it("should create BEGIN_AJAX_CALL and UPDATE_COURSE_SUCCESS when adding a course", done => {
    const courseToAdd = { id: "clean-code", title: "Clean Code" };
    const expectedActions = [
      { type: types.BEGIN_AJAX_CALL },
      {
        type: types.UPDATE_COURSE_SUCCESS,
        body: { courses: [courseToAdd] }
      }
    ];

    const store = mockStore({ courses: [] }, expectedActions);
    store.dispatch(courseActions.saveCourse(courseToAdd)).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.UPDATE_COURSE_SUCCESS);
      done();
    });
  });
});
