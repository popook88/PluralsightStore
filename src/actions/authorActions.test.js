import expect from "expect";
import * as authorActions from "./authorActions";
import * as types from "./actionTypes";
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";

const coryAuthor = { id: "cory-house", firstName: "Cory", lastName: "House" };
//test a sync action
describe("Author Actions", () => {
  describe("loadAuthorsSuccess", () => {
    it("should create a LOAD_AUTHORS_SUCCESS action", () => {
      const authors = [coryAuthor];
      const expectedAction = {
        type: types.LOAD_AUTHORS_SUCCESS,
        authors: authors
      };
      const action = authorActions.loadAuthorsSuccess(authors);
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

  it("should create BEGIN_AJAX_CALL and LOAD_AUTHORS_SUCCESS when loading authors", done => {
    const expectedActions = [
      { type: types.BEGIN_AJAX_CALL },
      {
        type: types.LOAD_AUTHORS_SUCCESS,
        body: { authors: [coryAuthor] }
      }
    ];

    const store = mockStore({ authors: [] }, expectedActions);
    store.dispatch(authorActions.loadAuthors()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_AUTHORS_SUCCESS);
      done();
    });
  });
});
