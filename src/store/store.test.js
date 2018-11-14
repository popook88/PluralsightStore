import expect from "expect";
import { createStore } from "redux";
import rootReducer from "../reducers";
import initialState from "../reducers/initialState";
import * as courseActions from "../actions/courseActions";
import * as authorActions from "../actions/authorActions";
import * as ajaxStatusActions from "../actions/ajaxStatusActions";

describe("Store", () => {
  let store;
  beforeEach(() => {
    store = createStore(rootReducer, initialState);
  });
  describe("courseReducer", () => {
    it("Should handle creating courses", () => {
      //arrange
      const newCourse = {
        title: "Clean Code"
      };
      //act
      const action = courseActions.createCourseSuccess(newCourse);
      store.dispatch(action);
      //assert
      const actual = store.getState().courses[0];
      expect(actual).toEqual(newCourse);
    });
  });

  describe("authorReducer", () => {
    it("Should handle loading authors", () => {
      const authorsToLoad = [
        {
          id: "A"
        }
      ];
      const action = authorActions.loadAuthorsSuccess(authorsToLoad);
      store.dispatch(action);

      const actual = store.getState().authors;
      expect(actual).toEqual(authorsToLoad);
    });
  });

  describe("ajaxStatusReducer", () => {
    it("Should handle beginning an ajax call", () => {
      const action = ajaxStatusActions.beginAjaxCall();
      store.dispatch(action);
      const actual = store.getState().ajaxCallsInProgress;
      expect(actual).toEqual(1);
    });
  });
});
