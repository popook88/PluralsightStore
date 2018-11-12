import expect from "expect";
import * as courseActions from "./courseActions";
import * as types from "./actionTypes";

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
});
