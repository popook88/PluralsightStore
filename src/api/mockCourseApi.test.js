import expect from "expect";
import CourseApi from "./mockCourseApi";
import { data } from "./mockApiData.js";
let courses = data.courses;

describe("The Course Api", () => {
  let api;

  beforeEach(() => {
    api = CourseApi;
    api.resetToDefaultCourses();
  });

  describe("getAllCourses", () => {
    it("should return a promise that resolves to the mockApiData.courses when getAllCourses", done => {
      api.getAllCourses().then(result => {
        expect(result).toEqual(data.courses);
        done();
      });
    });
  });

  describe("saveCourse", () => {
    it("should add a valid new course to courses", done => {
      const courseToSave = {
        title: "Test Course"
      };
      api.saveCourse(courseToSave).then(result => {
        courseToSave.id = "test-course";
        courseToSave.watchHref = `http://www.pluralsight.com/courses/${
          courseToSave.id
        }`;
      });
      api.getAllCourses().then(result => {
        expect(result.length).toEqual(data.courses.length + 1);
        expect(result).toContain(courseToSave);
        done();
      });
    });

    it("should update an existing course successfully", (done) => {
      const courseToUpdate = {
        title: "New Title",
        id: "clean-code"
      };
      api.saveCourse(courseToUpdate).then(result => {});
      api.getAllCourses().then(result => {
        expect(result).toContain(courseToUpdate);
        done();
      });
    });

    // it("should reject a course title that is 0 characters long", (done) => {
    //   const courseToSave = {
    //     title: "",
    //     id: "clean-code"
    //   };
    //   api.saveCourse(courseToSave).then(result => {
    //     expect(true).toBe(false);
    //     done();
    //   })
    //   .catch(err => {
    //     expect(err).toEqual(5);
    //     done();
    //   });
    });
    // it("should reject a lastName that is 2 characters long", async () => {
    //   const courseToSave = {
    //     firstName: "First",
    //     lastName: "La"
    //   };
    //   try {
    //     await api.saveCourse(courseToSave);
    //   } catch (err) {
    //     expect(err).toEqual("Last Name must be at least 3 characters.");
    //     const result = await api.getAllCourses();
    //     expect(result.length).toEqual(data.courses.length);
    //   }
    // });
  // });

  //   describe("deleteCourse", () => {
  //     it("should delete an course when an existing id is passed in", async () => {
  //       const cory = { id: "cory-house", firstName: "Cory", lastName: "House" };
  //       await api.deleteCourse(cory.id);
  //       const result = await api.getAllCourses();
  //       expect(result.length).toEqual(data.courses.length - 1);
  //       expect(result).toNotContain(cory);
  //     });
  //     it("should not delete an course when an unknown courseId passed in", async () => {
  //       const unknownId = "unknown";
  //       await api.deleteCourse(unknownId);
  //       const result = await api.getAllCourses();
  //       expect(result.length).toEqual(data.courses.length);
  //     });
  //   });
});
