import expect from "expect";
import authorReducer from "./authorReducer";
import * as actions from "../actions/authorActions";

describe("Author Reducer", () => {
  it("should overwrite state with loaded authors when passed LOAD_AUTHORS_SUCCESS", () => {
    const initialState = [{ id: "A" }, { id: "B" }];
    const loadedAuthors = [{ id: "C" }];
    const action = actions.loadAuthorsSuccess(loadedAuthors);

    const newState = authorReducer(initialState, action);
    expect(newState.length).toEqual(1);
    expect(newState[0].id).toEqual("C");
  });
});
