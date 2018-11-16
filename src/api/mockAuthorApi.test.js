import expect from "expect";
import AuthorApi from "./mockAuthorApi";
import { data } from "./mockApiData.js";

// describe("The Author Api", () => {
//   let api;

//   beforeEach(() => {
//     api = AuthorApi;
//     api.resetToDefaultAuthors();
//   });

//   describe("getAllAuthors", () => {
//     // it("should return a promise that resolves to the mockApiData.authors when getAllAuthors", async () => {
//     //   const result = await api.getAllAuthors();
//     //   expect(result).toEqual(data.authors);
//     // });
//   });

//   describe("saveAuthor", () => {
//     // it("should add a valid new author to authors", async () => {
//     //   const authorToSave = {
//     //     firstName: "First",
//     //     lastName: "Last"
//     //   };
//     //   await api.saveAuthor(authorToSave);
//     //   authorToSave.id = "first-last";
//     //   const result = await api.getAllAuthors();
//     //   expect(result.length).toEqual(data.authors.length + 1);
//     //   expect(result).toContain(authorToSave);
//     // });

//     // // it("should update an existing author successfully", async () => {
//     // //   const authorToUpdate = {
//     // //     firstName: "NewFirst",
//     // //     lastName: "NewLast",
//     // //     id: "first-last"
//     // //   };
//     // //   await api.saveAuthor(authorToUpdate);
//     // //   const result = await api.getAllAuthors();
//     // //   expect(result.length).toEqual(data.authors.length);
//     // //   expect(result).toContain(authorToUpdate);
//     // // });

//     // it("should reject a firstName that is 2 characters long", async () => {
//     //   const authorToSave = {
//     //     firstName: "Fi",
//     //     lastName: "Last"
//     //   };
//     //   try {
//     //     await api.saveAuthor(authorToSave);
//     //   } catch (err) {
//     //     expect(err).toEqual("First Name must be at least 3 characters.");
//     //     const result = await api.getAllAuthors();
//     //     expect(result.length).toEqual(data.authors.length);
//     //   }
//     // });
//     // it("should reject a lastName that is 2 characters long", async () => {
//     //   const authorToSave = {
//     //     firstName: "First",
//     //     lastName: "La"
//     //   };
//     //   try {
//     //     await api.saveAuthor(authorToSave);
//     //   } catch (err) {
//     //     expect(err).toEqual("Last Name must be at least 3 characters.");
//     //     const result = await api.getAllAuthors();
//     //     expect(result.length).toEqual(data.authors.length);
//     //   }
//     // });
//   });

//   describe("deleteAuthor", () => {
//   //   it("should delete an author when an existing id is passed in", async () => {
//   //     const cory = { id: "cory-house", firstName: "Cory", lastName: "House" };
//   //     await api.deleteAuthor(cory.id);
//   //     const result = await api.getAllAuthors();
//   //     expect(result.length).toEqual(data.authors.length - 1);
//   //     expect(result).toNotContain(cory);
//   //   });
//   //   it("should not delete an author when an unknown authorId passed in", async () => {
//   //     const unknownId = "unknown";
//   //     await api.deleteAuthor(unknownId);
//   //     const result = await api.getAllAuthors();
//   //     expect(result.length).toEqual(data.authors.length);
//   //   });
//   // });
// });
