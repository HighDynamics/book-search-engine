import { gql } from '@apollo/client';

/**
 * Expects `{email, password}`. Returns `Auth` type
 */
export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

/**
 * Expects `{username, email, password}`. Returns `Auth` type
 */
export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
      }
    }
  }
`;

/**
 * Expects `book: {[authors], description, title, bookId, image, link}. Returns `User` type.
 */
export const SAVE_BOOK = gql`
  mutation SaveBook($book: bookInput) {
    saveBook(book: $book) {
      _id
      username
      bookCount
      savedBooks {
        title
        authors
        description
        bookId
        image
        link
      }
    }
  }
`;

/**
 * Expects `bookId`. Returns `User` type.
 */
export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookId: String) {
    removeBook(bookId: $bookId) {
      _id
      username
      bookCount
      savedBooks {
        title
        authors
        description
        bookId
        image
        link
      }
    }
  }
`;
