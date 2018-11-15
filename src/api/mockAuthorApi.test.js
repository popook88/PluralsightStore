import expect from "expect";
import AuthorApi from "./mockAuthorApi";
import * as data from "./mockApiData.json";

describe("The Author Api", () => {
  let api;

  beforeEach(() => {
    api = AuthorApi;
    api.resetToDefaultAuthors();
  });

  it("should return a promise that resolves to the mockApiData.authors when getAllAuthors", async () => {
    const result = await api.getAllAuthors();
    expect(result).toEqual(data.authors);
  });

  describe("saveAuthor", () => {
    it("should add a valid author to authors", async () => {
      const authorToSave = {
        firstName: "First",
        lastName: "Last"
      };
      await api.saveAuthor(authorToSave);
      authorToSave.id = "first-last";
      const result = await api.getAllAuthors();
      expect(result.length).toEqual(data.authors.length + 1);
      expect(result).toContain(authorToSave);
    });
  });
});
