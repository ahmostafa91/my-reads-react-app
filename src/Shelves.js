import React, { Component } from "react";
import BookCover from "./B_cover";

class Shelves extends Component {
  render() {
    const { shelfType, books, changeShelf } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfType}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <BookCover book={book} changeShelf={changeShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelves;
