import delay from "./delay";
// import * as data from "./mockApiData.json";

const data = {
  authors: [
    {
      id: "cory-house",
      firstName: "Cory",
      lastName: "House"
    },
    {
      id: "scott-allen",
      firstName: "Scott",
      lastName: "Allen"
    },
    {
      id: "dan-wahlin",
      firstName: "Dan",
      lastName: "Wahlin"
    }
  ]
};

let authors = data.authors;
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

//This would be performed on the server in a real app. Just stubbing in.
const generateId = author => {
  return author.firstName.toLowerCase() + "-" + author.lastName.toLowerCase();
};

const removeAuthorById = authorId => {
  for (let i = 0; i < authors.length; i++) {
    if (authors[i].id == authorId) {
      authors.splice(i, 1);
    }
  }
};

class AuthorApi {
  static getAllAuthors() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], authors));
      }, delay);
    });
  }
  static resetToDefaultAuthors() {
    authors = Object.assign([], data.authors);
  }
  static saveAuthor(author) {
    author = Object.assign({}, author); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minAuthorNameLength = 3;
        if (author.firstName.length < minAuthorNameLength) {
          return reject(
            `First Name must be at least ${minAuthorNameLength} characters.`
          );
        }

        if (author.lastName.length < minAuthorNameLength) {
          return reject(
            `Last Name must be at least ${minAuthorNameLength} characters.`
          );
        }

        if (author.id) {
          const existingAuthorIndex = authors.findIndex(a => a.id == author.id);
          authors.splice(existingAuthorIndex, 1, author);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          author.id = generateId(author);
          authors.push(author);
        }

        resolve(author);
      }, delay);
    });
  }

  static deleteAuthor(authorId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        removeAuthorById(authorId);
        resolve();
      }, delay);
    });
  }
}

export default AuthorApi;
