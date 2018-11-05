import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookCover from "./B_cover";

class SearchAdd extends Component {
  state = {
    isFound: false,
    query: '',
    books: []
  }

  queryListener = (query) => {
    this.setState({ query, isFound: true });

    if (!query) {
      this.setState({ books: [], isFound: false });
      return;
    }

    BooksAPI.search(query).then((res) => {
      if (res && !res.error) {
        const books = res.map(b => {
          b.shelf = this.shelfType(b);
          return b;
        });
        this.setState({ books: books, isFound: true });
      } else {
        this.setState({ books: [], isFound: false });
      }
    });
  }

  shelfType = (b) => {
    for (let i of this.props.addedBooks) {
      if (i.id === b.id) return i.shelf;
    }

    return 'none';
  }

  render() {
    const { query, books, isFound } = this.state;

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>Close</Link>
          <div className='search-books-input-wrapper'>
            <input
              value={query}
              type='text'
              placeholder='Search by title or author'
              onChange={(event) => this.queryListener(event.target.value)} />
          </div>
        </div>
        <div className='search-books-results'>
          {((query && isFound) || (!query && !isFound)) ? (
            <ol className='books-grid'>
              {books.map(book => (
                <li key={book.id}>
                  <BookCover
                    book={book}
                    changeShelf={this.props.onAddingBook} />
                </li>
              ))}
            </ol>
          ) : (
            <div className='search-book-results-empty'>
                No Results For This Search
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SearchAdd;