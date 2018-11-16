import expect from "expect";
import CourseApi from "./mockCourseApi";
// import * as data from "./mockApiData.json";

const data = {
  courses: [
    {
      id: "react-flux-building-applications",
      title: "Building Applications in React and Flux",
      watchHref:
        "http://www.pluralsight.com/courses/react-flux-building-applications",
      authorId: "cory-house",
      length: "5:08",
      category: "JavaScript"
    },
    {
      id: "clean-code",
      title: "Clean Code: Writing Code for Humans",
      watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
      authorId: "cory-house",
      length: "3:10",
      category: "Software Practices"
    },
    {
      id: "architecture",
      title: "Architecting Applications for the Real World",
      watchHref:
        "http://www.pluralsight.com/courses/architecting-applications-dotnet",
      authorId: "cory-house",
      length: "2:52",
      category: "Software Architecture"
    },
    {
      id: "career-reboot-for-developer-mind",
      title: "Becoming an Outlier: Reprogramming the Developer Mind",
      watchHref:
        "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
      authorId: "cory-house",
      length: "2:30",
      category: "Career"
    },
    {
      id: "web-components-shadow-dom",
      title: "Web Component Fundamentals",
      watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
      authorId: "cory-house",
      length: "5:10",
      category: "HTML5"
    }
  ]
};

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
