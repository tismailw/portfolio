import { useEffect, useState } from "react";
import axios from "axios";
import './Books.css';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/books/")
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  // Define custom reading status order
  const statusOrder = {
    "Currently Reading": 0,
    "Finished": 1,
    "To Be Read": 2
  };

  // Sort the books based on reading status order
  const sortedBooks = [...books].sort((a, b) => {
    return statusOrder[a.reading_status] - statusOrder[b.reading_status];
  });

  return (
    <div className="books-container">
      {sortedBooks.map((book) => (
        <div key={book.id} className="book-card">
          <h3>{book.title}</h3>

          {book.image ? (
            <img
              src={book.image}
              alt={book.title}
              className="book-image"
            />
          ) : (
            <p className="no-image">No image available</p>
          )}

          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Status:</strong> {book.reading_status}</p>
          {book.genres && (
            <p><strong>Genres:</strong> {book.genres.join(", ")}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Books;
