import expect from "expect";
import * as authorActions from "./authorActions";
import * as types from "./actionTypes";
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";

//test a sync action
describe("Author Actions", () => {
  describe("loadAuthorsSuccess", () => {
    it("should create a LOAD_AUTHORS_SUCCESS action", () => {
      const authors = { id: "clean-code", title: "Clean Code" };
      const expectedAction = {
        type: types.LOAD_AUTHORS_SUCCESS,
        authors: authors
      };
      const action = courseActions.loadAuthors(course);
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
    const expectedActions = [
      { type: types.BEGIN_AJAX_CALL },
      {
        type: types.LOAD_AUTHORS_SUCCESS,
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
});