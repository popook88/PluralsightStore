import expect from "expect";
import CourseApi from "./mockCourseApi";
import { data } from "./mockApiData.js";
let courses = data.courses;

// describe("The Course Api", () => {
//   let api;

//   beforeEach(() => {
//     api = CourseApi;
//     api.resetToDefaultCourses();
//   });

//   describe("getAllCourses", () => {
//     it("should return a promise that resolves to the mockApiData.courses when getAllCourses", async () => {
//       const result = await api.getAllCourses();
//       expect(result).toEqual(data.courses);
//     });
//   });

//   describe("saveCourse", () => {
//     it("should add a valid new course to courses", async () => {
//       const courseToSave = {
//         title: "Test Course"
//       };
//       await api.saveCourse(courseToSave);
//       courseToSave.id = "test-course";
//       courseToSave.watchHref = `http://www.pluralsight.com/courses/${
//         courseToSave.id
//       }`;
//       const result = await api.getAllCourses();
//       expect(result.length).toEqual(data.courses.length + 1);
//       expect(result).toContain(courseToSave);
//     });

//     it("should update an existing course successfully", async () => {
//       const courseToUpdate = {
//         title: "New Title",
//         id: "clean-code"
//       };
//       await api.saveCourse(courseToUpdate);
//       const result = await api.getAllCourses();
//       //expect(result.length).toEqual(7);
//       expect(result).toNotContain(courseToUpdate);
//     });

//     it("should reject a firstName that is 2 characters long", async () => {
//       const courseToSave = {
//         firstName: "Fi",
//         lastName: "Last"
//       };
//       try {
//         await api.saveCourse(courseToSave);
//       } catch (err) {
//         expect(err).toEqual("First Name must be at least 3 characters.");
//         const result = await api.getAllCourses();
//         expect(result.length).toEqual(data.courses.length);
//       }
//     });
//     it("should reject a lastName that is 2 characters long", async () => {
//       const courseToSave = {
//         firstName: "First",
//         lastName: "La"
//       };
//       try {
//         await api.saveCourse(courseToSave);
//       } catch (err) {
//         expect(err).toEqual("Last Name must be at least 3 characters.");
//         const result = await api.getAllCourses();
//         expect(result.length).toEqual(data.courses.length);
//       }
//     });
//   });

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
// });
